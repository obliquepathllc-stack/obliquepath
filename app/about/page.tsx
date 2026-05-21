import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Oblique Path | AI Automation for Growing Businesses",
  description: "Oblique Path is an AI automation and custom software company based in Windsor, Ontario. We build systems that replace manual work — for service businesses, mid-market teams, and enterprise operations.",
  openGraph: {
    title: "About Oblique Path",
    description: "We build automation systems and custom platforms for businesses done running manually. Headquartered in Windsor, ON. Serving Toronto, Michigan, and Chicago.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
