import { buildMetadata } from "@/lib/metadata";
import { TechSupportContent } from "./tech-support-content";

export const metadata = buildMetadata({
  title: "Tech Support & Maintenance | Oblique Path",
  description: "Ongoing support, monitoring, and maintenance for your automation systems and custom platforms. Bug fixes, performance upgrades, and proactive issue resolution.",
  path: "/tech-support",
});

export default function TechSupportPage() {
  return <TechSupportContent />;
}
