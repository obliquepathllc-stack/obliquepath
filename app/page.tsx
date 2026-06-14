import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Oblique Path | AI Automation for Growing Businesses",
  description: "Oblique Path builds automation systems and custom software for businesses ready to stop doing things manually. From AI workflows to full-stack platforms, deployed in weeks.",
  path: "/",
});

import { HeroSection } from "@/components/home/hero-section";
import { WhoWeWorkWith } from "@/components/home/who-we-work-with";
import { WhatWeBuild } from "@/components/home/what-we-build";
import { MetricsBar } from "@/components/home/metrics-bar";
import { CaseStudiesPreview } from "@/components/home/case-studies-preview";
import { Industries } from "@/components/home/industries";
import { OurProcess } from "@/components/home/our-process";
import { FinalCTA } from "@/components/home/final-cta";
import { ChatWidget } from "@/components/home/chat-widget";
import { ScrollWatcher } from "@/components/scroll-watcher";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <ScrollWatcher />
      <HeroSection />
      <WhoWeWorkWith />
      <WhatWeBuild />
      <MetricsBar />
      <CaseStudiesPreview />
      <Industries />
      <OurProcess />
      <FinalCTA />
      <ChatWidget />
    </main>
  );
}
