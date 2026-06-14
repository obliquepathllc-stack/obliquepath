import { buildMetadata } from "@/lib/metadata";
import { PricingContent } from "./pricing-content";

export const metadata = buildMetadata({
  title: "Pricing | AI Automation & Custom Software | Oblique Path",
  description: "Transparent, fixed-price engagements. Automation suites live in 4–6 weeks. Custom platforms in 4–5 months. No hidden fees — scope first, quote second.",
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingContent />;
}
