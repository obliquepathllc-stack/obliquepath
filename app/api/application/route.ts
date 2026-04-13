import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, position, coverLetter, resumeLink } = body;

    await resend.emails.send({
      from: "Oblique Path Website <onboarding@resend.dev>",
      to: "obliquepathllc@gmail.com",
      replyTo: email,
      subject: `New Job Application — ${name} for ${position}`,
      html: `
        <h2>New Job Application</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Position</strong></td><td>${position}</td></tr>
          <tr><td><strong>Resume</strong></td><td><a href="${resumeLink}">${resumeLink}</a></td></tr>
          <tr><td><strong>Cover Letter</strong></td><td>${coverLetter}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
