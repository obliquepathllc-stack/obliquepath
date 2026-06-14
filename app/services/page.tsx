import { buildMetadata } from "@/lib/metadata";
import { ServicesContent } from "./services-content";

export const metadata = buildMetadata({
  title: "AI Automation & Custom Software Services | Oblique Path",
  description: "AI automation, custom web platforms, mobile apps, and voice agents for businesses ready to stop running manually. Built in Windsor, serving Toronto, Michigan, and Chicago.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesContent />;
}
