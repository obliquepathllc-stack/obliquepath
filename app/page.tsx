"use client";

// HOMEPAGE — obliquepath.dev
// Sections (in order):
//   1. HeroSection          — headline, subheadline, CTAs, logo strip
//   2. WhoWeWorkWith        — three audience segment cards
//   3. WhatWeBuild          — three core capability blocks
//   4. MetricsBar           — four result stats
//   5. CaseStudiesPreview   — three case study cards linking to /case-studies
//   6. Industries           — five industry pills
//   7. OurProcess           — four numbered steps
//   8. FinalCTA             — closing headline + Book / Contact buttons

import { HeroSection } from "@/components/home/hero-section";
import { WhoWeWorkWith } from "@/components/home/who-we-work-with";
import { WhatWeBuild } from "@/components/home/what-we-build";
import { MetricsBar } from "@/components/home/metrics-bar";
import { CaseStudiesPreview } from "@/components/home/case-studies-preview";
import { Industries } from "@/components/home/industries";
import { OurProcess } from "@/components/home/our-process";
import { FinalCTA } from "@/components/home/final-cta";
import { FloatingElements } from "@/components/floating-elements";
import { MouseSpotlight } from "@/components/mouse-spotlight";
import { ScrollWatcher } from "@/components/scroll-watcher";
import { TechBackground } from "@/components/tech-background";
import { variants } from "@/lib/motion-variants";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBgVariant = () => {
    if (scrollY < 300) return "grid";
    if (scrollY < 1000) return "particles";
    return "circuits";
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "tween", duration: 0.5 }}
    >
      {/* Tech-inspired animated backgrounds */}
      {mounted && (
        <div className="fixed inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={getBgVariant()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <TechBackground
                variant={getBgVariant()}
                density={isMobile ? "low" : "medium"}
                interactive={!isMobile}
              />
            </motion.div>
          </AnimatePresence>

          <FloatingElements
            count={isMobile ? 3 : 5}
            variant="mixed"
            opacity={0.3}
          />

          <MouseSpotlight disabled={isMobile} />

          <ScrollWatcher progressPosition="top" scrollToTopThreshold={300} />
        </div>
      )}
      <ScrollWatcher progressPosition="top" />

      {/* 1. HERO */}
      <HeroSection />

      {/* 2. WHO WE WORK WITH */}
      <WhoWeWorkWith />

      {/* 3. WHAT WE BUILD */}
      <WhatWeBuild />

      {/* 4. RESULTS / METRICS BAR */}
      <MetricsBar />

      {/* 5. SELECTED WORK */}
      <CaseStudiesPreview />

      {/* 6. INDUSTRIES */}
      <Industries />

      {/* 7. HOW WE WORK / PROCESS */}
      <OurProcess />

      {/* 8. FINAL CTA */}
      <FinalCTA />
    </motion.div>
  );
}
