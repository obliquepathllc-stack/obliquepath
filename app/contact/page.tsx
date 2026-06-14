import { buildMetadata } from "@/lib/metadata";
import { ContactContent } from "./contact-content";

export const metadata = buildMetadata({
  title: "Contact Oblique Path | AI Automation & Custom Software",
  description: "Get in touch with Oblique Path. We build AI automation systems and custom software for businesses in Windsor, Toronto, Michigan, Chicago, and beyond.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
