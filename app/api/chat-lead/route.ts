import { Resend } from "resend";
import { NextResponse } from "next/server";

// ─── LEAD CAPTURE EMAIL ROUTE ─────────────────────────────────────────────────
// Called when the chatbot detects the visitor has shared their email.
// Sends a notification to the team with name, email, and conversation context.

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, summary, timestamp } = await request.json();

    await resend.emails.send({
      from: "Oblique Path Website <onboarding@resend.dev>",
      to: "obliquepathllc@gmail.com",
      replyTo: email,
      subject: "New Lead from Website Chat",
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #1a1a2e;">New Lead from Website Chat</h2>
          <table cellpadding="8" style="border-collapse:collapse; width:100%;">
            <tr><td style="color:#666; width:120px;"><strong>Name</strong></td><td>${name || "Not provided"}</td></tr>
            <tr><td style="color:#666;"><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="color:#666;"><strong>Source</strong></td><td>Homepage chatbot</td></tr>
            <tr><td style="color:#666;"><strong>Time</strong></td><td>${new Date(timestamp).toLocaleString("en-CA", { timeZone: "America/Toronto" })}</td></tr>
          </table>
          <h3 style="color:#1a1a2e; margin-top:24px;">Conversation Context (last 3 messages)</h3>
          <div style="background:#f5f5f5; padding:16px; border-radius:8px; font-size:14px; white-space:pre-wrap;">${summary}</div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Chat lead capture error:", error);
    return NextResponse.json({ error: "Failed to send lead" }, { status: 500 });
  }
}
