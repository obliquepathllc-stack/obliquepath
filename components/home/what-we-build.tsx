"use client";

// What We Build — NO icon boxes. Type-driven design with large numbers.
// taste-skill: Remove generic AI icon patterns entirely.

import { useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

const WORKFLOW_VIDEO = process.env.NEXT_PUBLIC_WORKFLOW_VIDEO_URL;

const capabilities = [
  {
    number: "01",
    title: "AI & Automation Systems",
    description:
      "Intelligent workflows that handle intake, validation, routing, approvals, and reporting. No human in the loop. From healthcare staffing to lead nurturing, we eliminate the work that kills your team's time.",
    detail: "Booking automation · Lead follow-up · Document processing · CRM integration · Custom AI agents",
  },
  {
    number: "02",
    title: "Custom Platforms & Web Applications",
    description:
      "Secure, scalable platforms built for your specific operation. Not adapted from a template. Dashboards, portals, management systems, and client-facing tools engineered to grow with you.",
    detail: "Staffing platforms · Client portals · Inventory systems · Operations dashboards · SaaS products",
  },
  {
    number: "03",
    title: "Voice Agents & AI Integration",
    description:
      "Conversational AI that handles inbound calls, qualifies leads, books appointments, and escalates intelligently. Deployed across phone, web, and messaging channels simultaneously.",
    detail: "Inbound call automation · Lead qualification · Appointment booking · Multi-channel AI",
  },
  {
    number: "04",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps built for your specific operation. iOS and Android, with automation and backend integrations built in from day one. Not a template repackaged.",
    detail: "iOS & Android · React Native · App-backend integration · Offline-first · Push automation",
  },
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 as number },
  transition: { duration: 0.7, delay, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
});

const slideIn = (delay = 0) => ({
  initial: { opacity: 0, x: -48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.1 as number },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export function WhatWeBuild() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const video = videoRef.current;
    if (!video?.duration) return;
    video.currentTime = Math.max(0, Math.min(progress * video.duration, video.duration));
  });

  return (
    <section ref={sectionRef} className="px-4 lg:px-16 py-24 md:py-36 border-t border-border">
      <div className="container max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <motion.div {...reveal()}>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-5">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] leading-[0.95]">
              Four core<br />capabilities.
            </h2>
          </motion.div>
          <motion.div {...reveal(0.1)} className="flex items-end">
            <p className="text-muted-foreground text-lg leading-relaxed">
              We don&apos;t offer packages. We scope what you actually need and build it to last. Typically live in 4–6 weeks for automation, 4–5 months for custom platforms.
            </p>
          </motion.div>
        </div>

        {/* Capabilities + optional sticky video panel */}
        <div className="flex gap-16 items-start">

          {/* Capabilities — full width rows, no cards */}
          <div className="flex-1 flex flex-col">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.number}
                {...slideIn(i * 0.1)}
                className="grid grid-cols-1 lg:grid-cols-[100px_1fr_1fr] gap-6 lg:gap-12 py-10 border-t border-border last:border-b"
              >
                {/* Large number */}
                <div className="flex items-start">
                  <span className="text-[80px] md:text-[96px] font-black tracking-tighter leading-none text-foreground/[0.13] select-none">
                    {cap.number}
                  </span>
                </div>

                {/* Title + description */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{cap.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>

                {/* Detail tags */}
                <div className="flex items-start lg:justify-end">
                  <p className="text-sm text-muted-foreground/60 leading-loose">{cap.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sticky video panel — desktop only, only renders when URL is set */}
          {WORKFLOW_VIDEO && (
            <div className="hidden xl:block w-64 shrink-0">
              <div className="sticky top-32">
                <video
                  ref={videoRef}
                  src={WORKFLOW_VIDEO}
                  muted
                  playsInline
                  preload="auto"
                  className="w-full aspect-[9/16] rounded-2xl border border-border object-cover"
                />
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/35 text-center mt-3">
                  Automation in action
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Inline CTA */}
        <motion.div {...reveal(0.3)} className="mt-12 flex items-center gap-6">
          <Link href="/book-demo">
            <button className="rounded-full bg-foreground text-background font-semibold px-7 py-3.5 flex items-center gap-2 hover:opacity-80 active:scale-[0.97] transition-all duration-200 group">
              Scope your build free
              <ArrowUpRight size={15} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </Link>
          <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            View all services →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
