import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // Create transporter using SMTP (configured for Infomaniak)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.infomaniak.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 15000,
    });

    // Email to you (notification of new signup)
    await transporter.sendMail({
      from: `"GoldBench" <${process.env.SMTP_USER}>`,
      to: "contact@goldbench.ch",
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
    });

    // Confirmation email to the user
    await transporter.sendMail({
      from: `"GoldBench" <${process.env.SMTP_USER}>`,
      to: email,
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
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    
    // Check if SMTP is configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("SMTP not configured. Missing environment variables.");
      return NextResponse.json(
        { error: "Email service not configured. Please contact support." },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
