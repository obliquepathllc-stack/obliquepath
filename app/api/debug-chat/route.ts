import { NextResponse } from "next/server";

export async function GET() {
  const keySet = !!process.env.Z_AI_API_KEY;
  const keyPreview = process.env.Z_AI_API_KEY
    ? process.env.Z_AI_API_KEY.slice(0, 8) + "..."
    : "NOT SET";

  // Try a live call to z.ai
  let apiStatus = "untested";
  let apiError = "";
  if (keySet) {
    try {
      const res = await fetch("https://api.z.ai/api/paas/v4/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.Z_AI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "glm-5.1",
          max_tokens: 100,
          messages: [{ role: "user", content: "Say: ok" }],
        }),
      });
      const body = await res.text();
      apiStatus = res.ok ? "ok" : `error ${res.status}`;
      if (!res.ok) apiError = body.slice(0, 200);
    } catch (e) {
      apiStatus = "fetch_failed";
      apiError = String(e);
    }
  }

  return NextResponse.json({ keySet, keyPreview, apiStatus, apiError });
}
