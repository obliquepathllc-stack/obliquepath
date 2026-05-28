// Homepage — clean server component
// TechBackground, FloatingElements, MouseSpotlight removed (generic, replaced by editorial luxury design)

import { HeroSection } from "@/components/home/hero-section";
import { WhoWeWorkWith } from "@/components/home/who-we-work-with";
import { ScrollStory } from "@/components/home/scroll-story";
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
      <ScrollStory />
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
