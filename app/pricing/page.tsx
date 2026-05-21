import type { Metadata } from "next";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing | AI Automation & Custom Software | Oblique Path",
  description: "Transparent, fixed-price engagements. Automation suites live in 4–6 weeks. Custom platforms in 4–5 months. No hidden fees — scope first, quote second.",
  openGraph: {
    title: "Pricing | Oblique Path",
    description: "Fixed quotes after scoping. Automation Suite or Custom Platform. No surprises.",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
