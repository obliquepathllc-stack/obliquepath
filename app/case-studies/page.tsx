import { buildMetadata } from "@/lib/metadata";
import { CaseStudiesContent } from "./case-studies-content";

export const metadata = buildMetadata({
  title: "Case Studies | AI Automation & Custom Software | Oblique Path",
  description: "Real results from real businesses. See how Oblique Path built AI automation systems, custom platforms, voice agents, and mobile apps for clients across healthcare, legal, waste management, and more.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
