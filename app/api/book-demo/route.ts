import { Resend } from "resend";
import { NextResponse } from "next/server";

const BOOKING_LINK = "https://calendar.app.google/vTDgiUnbzwZ647Cp7";

const AUTOMATING_CONTEXT: Record<string, string> = {
  "Scheduling & Dispatch": "automating your scheduling and dispatch",
  "Invoicing & Payments": "automating invoicing and payment follow-up",
  "Lead Follow-Up": "automating lead follow-up",
  "CRM & Sales": "automating your CRM and sales workflow",
  "Healthcare Staffing": "automating healthcare staffing operations",
  "AI Agents": "building AI voice or chat agents for your business",
  "Custom Software": "building custom software for your operation",
  Other: "what you want to automate",
  Scheduling: "automating your scheduling",
  Invoicing: "automating invoicing",
  CRM: "automating your CRM workflows",
};

function buildReplyHtml(firstName: string, automating: string): string {
  const context = AUTOMATING_CONTEXT[automating] ?? "what you want to automate";
  return `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;color:#111;line-height:1.7;font-size:15px">
      <p>Hey ${firstName},</p>
      <p>Got your request. ${context.charAt(0).toUpperCase() + context.slice(1)} is exactly the kind of thing we build, so this is a good fit to explore.</p>
      <p>Book a 30-minute call below and we can map out what the build would actually look like for your business. No pitch, just a real conversation about what needs to happen.</p>
      <p style="margin-top:28px">
        <a href="${BOOKING_LINK}"
          style="display:inline-block;background:#4f46e5;color:#fff;font-weight:600;padding:13px 28px;border-radius:99px;text-decoration:none;font-size:14px;letter-spacing:0.01em">
          Book a call
        </a>
      </p>
      <p style="margin-top:36px;color:#555;font-size:14px;line-height:1.6">
        Talk soon,<br>
        <strong style="color:#111">Johnpaul</strong><br>
        Oblique Path<br>
        <a href="https://obliquepath.dev" style="color:#4f46e5;text-decoration:none">obliquepath.dev</a>
      </p>
    </div>
  `;
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, automating, phone, company } = body;
    const firstName = (name as string).split(" ")[0];

    // Send both emails in parallel
    await Promise.all([
      // Internal notification to the team
      resend.emails.send({
        from: "Oblique Path <johnpaul@obliquepath.dev>",
        to: "obliquepathllc@gmail.com",
        replyTo: email,
        subject: `New discovery call request — ${name}${company ? ` (${company})` : ""}`,
        html: `
          <h2 style="font-family:sans-serif">New Discovery Call Request</h2>
          <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif">
            <tr><td><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            ${phone ? `<tr><td><strong>Phone</strong></td><td>${phone}</td></tr>` : ""}
            ${company ? `<tr><td><strong>Company</strong></td><td>${company}</td></tr>` : ""}
            <tr><td><strong>Automating</strong></td><td>${automating}</td></tr>
          </table>
          <p style="margin-top:16px;color:#666;font-family:sans-serif;font-size:14px">Auto-reply sent to ${email}</p>
        `,
      }),

      // Instant reply to the prospect
      resend.emails.send({
        from: "Johnpaul from Oblique Path <johnpaul@obliquepath.dev>",
        to: email,
        replyTo: "info@obliquepath.dev",
        subject: `Re: Your Oblique Path discovery call request`,
        html: buildReplyHtml(firstName, automating),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Book demo error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
