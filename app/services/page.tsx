import type { Metadata } from "next";
import { ServicesContent } from "./services-content";

export const metadata: Metadata = {
  title: "AI Automation & Custom Software Services | Oblique Path",
  description: "AI automation, custom web platforms, mobile apps, and voice agents for businesses ready to stop running manually. Built in Windsor, serving Toronto, Michigan, and Chicago.",
  openGraph: {
    title: "Services | Oblique Path",
    description: "From booking automation to full custom platforms. We scope, build, and deploy — typically live in 4–6 weeks.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
