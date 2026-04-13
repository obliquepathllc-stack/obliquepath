import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, service, companySize, message } = body;

    await resend.emails.send({
      from: "Oblique Path Website <onboarding@resend.dev>",
      to: "obliquepathllc@gmail.com",
      replyTo: email,
      subject: `New Strategy Call Request — ${firstName} ${lastName} (${company})`,
      html: `
        <h2>New Strategy Call / Demo Request</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td><strong>Name</strong></td><td>${firstName} ${lastName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Company</strong></td><td>${company}</td></tr>
          <tr><td><strong>Service Interest</strong></td><td>${service}</td></tr>
          <tr><td><strong>Company Size</strong></td><td>${companySize}</td></tr>
          ${message ? `<tr><td><strong>Message</strong></td><td>${message}</td></tr>` : ""}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Book demo error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
