import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Oblique Path — AI Automation for Growing Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "0px" }}>
          <span
            style={{
              fontSize: 42,
              fontWeight: 800,
              background: "linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #4f46e5 100%)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.03em",
            }}
          >
            Oblique
          </span>
          <span
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: "#fafafa",
              letterSpacing: "-0.03em",
            }}
          >
            path
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#fafafa",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Stop Running
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#fafafa",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            on Manual.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#a1a1aa",
              letterSpacing: "-0.01em",
              marginTop: 8,
              fontWeight: 400,
            }}
          >
            AI automation systems and custom platforms for growing businesses.
          </div>
        </div>

        {/* Bottom: URL + accent bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 4,
              borderRadius: 2,
              background: "linear-gradient(90deg, #818cf8, #6366f1)",
            }}
          />
          <span style={{ fontSize: 18, color: "#71717a", letterSpacing: "0.02em" }}>
            obliquepath.dev
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
