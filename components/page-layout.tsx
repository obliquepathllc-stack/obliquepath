"use client";

// PageLayout — clean luxury wrapper for interior pages
// Replaces: TechBackground, FloatingElements, MouseSpotlight (all removed — generic)
// Used by: Services, Pricing, About, Contact, Blog, Careers, Book Demo

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ScrollWatcher } from "@/components/scroll-watcher";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <>
      <ScrollWatcher />

      {/* Page hero header */}
      <section className="relative pt-32 pb-14 md:pt-44 md:pb-20 px-4 lg:px-16 overflow-hidden border-b border-border">
        {/* Subtle ambient glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.025em] leading-[0.93]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Page content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        {children}
      </motion.main>
    </>
  );
}
