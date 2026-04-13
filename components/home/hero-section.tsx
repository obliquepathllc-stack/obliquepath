"use client";

// HERO SECTION — rewrote for obliquepath.dev homepage
// Removed: AI chat widget, "100+ businesses" claim, typewriter effect
// Added: logo strip, social proof line, two CTAs linking to /case-studies and /book-demo

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// ─── WORD ANIMATION VARIANTS ──────────────────────────────────────────────────
const headlineContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const LINE1 = ["Stop", "Running", "on", "Manual."];
const LINE2 = ["Build", "Systems", "That", "Work", "Without", "You."];

const clientLogos = [
  { name: "First Point Cleaners", src: "/clients-logo/first-point-cleaners.jpg" },
  { name: "BuildPath", src: "/clients-logo/buildpath.svg" },
  { name: "Anitrous", src: "/clients-logo/anitrous.svg" },
  { name: "Aerrand", src: "/clients-logo/errand.svg" },
  { name: "Harbor One Capital", src: "/clients-logo/hoc.svg" },
  { name: "Junk Cycle", src: "/clients-logo/junk-cycle 1.jpg" },
  { name: "Growtt", src: "/clients-logo/growtt.png" },
  { name: "AQUAPROX Africa", src: "/clients-logo/aquaprox-africa.jpg" },
];

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 lg:px-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto">
        {/* Headline + Subheadline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col space-y-6"
        >
          <motion.h1
            variants={headlineContainer}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[72px] font-extrabold leading-[1.05] tracking-tight"
          >
            {/* Line 1 — plain */}
            {LINE1.map((word) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.22em]">
                <motion.span variants={wordVariant} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
            {/* Line 2 — gradient, words animate inside the gradient span */}
            <span className="gradient-text">
              {LINE2.map((word) => (
                <span key={word} className="inline-block overflow-hidden mr-[0.22em]">
                  <motion.span variants={wordVariant} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-3xl font-medium leading-relaxed"
          >
            Oblique Path builds AI automation systems and custom platforms for
            businesses that are done with spreadsheets, manual follow-ups, and
            admin overhead. Working software, deployed fast.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link href="/case-studies">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto font-semibold"
              >
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/book-demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                Book a Strategy Call
              </Button>
            </Link>
          </motion.div>

          {/* Social proof line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-foreground/70 font-medium"
          >
            Trusted by businesses and organizations across Canada and North
            America
          </motion.p>
        </motion.div>

        {/* Client logo strip — infinite marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-border/30"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-foreground/40 font-semibold mb-6">
            Trusted by
          </p>
          <div className="overflow-hidden relative">
            {/* fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <div className="flex w-max animate-marquee">
              {/* render twice for seamless loop */}
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="shrink-0 mx-8 w-[90px] flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={90}
                    height={40}
                    className="w-full h-auto max-h-[48px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
