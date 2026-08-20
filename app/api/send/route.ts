import { NextResponse } from "next/server";

// Edge runtime so this works on the Cloudflare Pages production runtime.
export const runtime = "edge";

const TO_ADDRESS = "contact@goldbench.ch";
// Resend's shared sender works with zero DNS setup. Once goldbench.ch is
// verified in Resend, set RESEND_FROM to e.g. "GoldBench <noreply@goldbench.ch>".
const FROM_ADDRESS = process.env.RESEND_FROM || "GoldBench <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[v0] send route: RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const type = typeof body.type === "string" ? body.type : "contact";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  // Server-side validation (never trust the client alone).
  if (!name || name.length > 200) {
    return NextResponse.json({ error: "A valid name is required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (type === "contact" && !message) {
    return NextResponse.json({ error: "A message is required." }, { status: 400 });
  }

  const isEarlyAccess = type === "early-access";
  const subject = isEarlyAccess
    ? `New early access request from ${name}`
    : `New contact message from ${name}`;

  const rows = [
    ["Name", name],
    ["Email", email],
    [isEarlyAccess ? "Atelier" : "Company", company || "Not provided"],
  ];
  if (message) rows.push(["Message", message]);

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
      <h2 style="color: #b8860b;">${escapeHtml(subject)}</h2>
      <table style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding: 6px 16px 6px 0; font-weight: bold; vertical-align: top;">${escapeHtml(
                label
              )}</td><td style="padding: 6px 0;">${escapeHtml(value).replace(/\n/g, "<br />")}</td></tr>`
          )
          .join("")}
      </table>
    </div>
  `;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [TO_ADDRESS],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.log("[v0] Resend API error:", res.status, detail);
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.log("[v0] send route exception:", err instanceof Error ? err.message : String(err));
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
