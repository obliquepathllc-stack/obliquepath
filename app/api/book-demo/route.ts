import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const Z_AI_BASE = "https://api.z.ai/api/paas/v4";
const BOOKING_LINK = "https://calendar.app.google/vTDgiUnbzwZ647Cp7";

async function generateReply(name: string, automating: string): Promise<string> {
  const firstName = name.split(" ")[0];
  const res = await fetch(`${Z_AI_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.Z_AI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "glm-5.1",
      max_tokens: 300,
      messages: [
        {
          role: "system",
          content: `You are Johnpaul from Oblique Path, an AI automation agency. Write a short, warm, direct reply email to someone who just submitted a discovery call form.

Rules:
- 3-4 sentences max
- Sound like a real person, not a template
- Reference what they want to automate in a specific way
- End with a clear CTA to book a time using the link provided
- No subject line, no sign-off header needed — just the body text
- No em dashes
- Conversational but professional`,
        },
        {
          role: "user",
          content: `Name: ${firstName}. They want to automate: ${automating}. Booking link: ${BOOKING_LINK}. Write the reply email body.`,
        },
      ],
    }),
  });

  if (!res.ok) throw new Error("Z.ai call failed");
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, automating } = body;
    const firstName = name.split(" ")[0];

    // 1. Internal notification to the team
    await resend.emails.send({
      from: "Oblique Path Website <onboarding@resend.dev>",
      to: "obliquepathllc@gmail.com",
      replyTo: email,
      subject: `New Discovery Call Request — ${name}`,
      html: `
        <h2>New Discovery Call Request</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Automating</strong></td><td>${automating}</td></tr>
        </table>
        <p style="margin-top:16px;color:#666">Auto-reply has been sent to ${email}</p>
      `,
    });

    // 2. AI-generated reply to the prospect — fire and don't block the response
    generateReply(name, automating)
      .then(async (replyText) => {
        if (!replyText) return;
        await resend.emails.send({
          from: "Johnpaul from Oblique Path <onboarding@resend.dev>",
          to: email,
          replyTo: "info@obliquepath.dev",
          subject: `Re: Your discovery call request`,
          html: `
            <div style="font-family:system-ui,sans-serif;max-width:560px;color:#111;line-height:1.6">
              <p>Hi ${firstName},</p>
              ${replyText
                .split("\n")
                .filter(Boolean)
                .map((p) => `<p>${p}</p>`)
                .join("")}
              <p style="margin-top:24px">
                <a href="${BOOKING_LINK}" style="display:inline-block;background:#4f46e5;color:#fff;font-weight:600;padding:12px 24px;border-radius:99px;text-decoration:none;font-size:14px">
                  Book a time that works for you
                </a>
              </p>
              <p style="margin-top:32px;color:#555;font-size:14px">
                Johnpaul<br>
                Oblique Path<br>
                <a href="https://obliquepath.dev" style="color:#4f46e5">obliquepath.dev</a>
              </p>
            </div>
          `,
        });
      })
      .catch((err) => console.error("Auto-reply failed:", err));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Book demo error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
