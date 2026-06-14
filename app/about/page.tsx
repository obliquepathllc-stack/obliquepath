import { buildMetadata } from "@/lib/metadata";
import { AboutContent } from "./about-content";

export const metadata = buildMetadata({
  title: "About Oblique Path | AI Automation for Growing Businesses",
  description: "Oblique Path is an AI automation and custom software company based in Windsor, Ontario. We build systems that replace manual work — for service businesses, mid-market teams, and enterprise operations.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
