import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, atelier, captchaAnswer, expectedAnswer } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate captcha
    if (parseInt(captchaAnswer) !== expectedAnswer) {
      return NextResponse.json(
        { error: "Incorrect captcha answer" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Use Resend API for Edge-compatible email sending
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      // Still return success to not block the user - log for manual follow-up
      console.log("Early access request (email not sent):", { name, email, atelier });
      return NextResponse.json({ success: true });
    }

    // Send notification email to you
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GoldBench <onboarding@resend.dev>",
        to: ["contact@goldbench.ch"],
        subject: `New Early Access Request: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #D4AF37;">New Early Access Request</h2>
            <hr style="border: 1px solid #eee;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Atelier/Company:</strong> ${atelier || "Not provided"}</p>
            <hr style="border: 1px solid #eee;" />
            <p style="color: #666; font-size: 12px;">This request was submitted through the GoldBench landing page.</p>
          </div>
        `,
      }),
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.text();
      console.error("Failed to send notification email:", errorData);
    }

    // Send confirmation email to the user
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GoldBench <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to GoldBench Early Access",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #050505; color: #E5E4E2; padding: 40px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #D4AF37; font-weight: 300; letter-spacing: 2px;">GOLDBENCH</h1>
            </div>
            <h2 style="color: #E5E4E2; font-weight: 300;">Thank you, ${name.split(" ")[0]}!</h2>
            <p style="line-height: 1.8; color: #E5E4E2CC;">
              Your request for early access to GoldBench has been received. You're now on our priority list for the beta launch.
            </p>
            <p style="line-height: 1.8; color: #E5E4E2CC;">
              We're building something special for goldsmiths and jewelers like you. We'll be in touch soon with your exclusive access details.
            </p>
            <div style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #333;">
              <p style="color: #666; font-size: 12px;">
                Questions? Reply to this email or contact us at contact@goldbench.ch
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!confirmationResponse.ok) {
      const errorData = await confirmationResponse.text();
      console.error("Failed to send confirmation email:", errorData);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again later." },
      { status: 500 }
    );
  }
}
