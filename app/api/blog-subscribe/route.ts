import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    await resend.emails.send({
      from: "Oblique Path Website <onboarding@resend.dev>",
      to: "obliquepathllc@gmail.com",
      replyTo: email,
      subject: `New Blog Subscriber — ${name}`,
      html: `
        <h2>New Blog Subscriber</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Blog subscribe error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
