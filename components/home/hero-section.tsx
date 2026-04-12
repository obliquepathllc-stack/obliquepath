"use client";

// HERO SECTION — rewrote for obliquepath.dev homepage
// Removed: AI chat widget, "100+ businesses" claim, typewriter effect
// Added: logo strip, social proof line, two CTAs linking to /case-studies and /book-demo

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const clientLogos: { name: string; src: string | null }[] = [
  { name: "First Point Cleaners", src: "/clients-logo/immaculatus-cleaning.svg" },
  { name: "BuildPath", src: "/clients-logo/buildpath.svg" },
  { name: "Anitrous", src: "/clients-logo/anitrous.svg" },
  { name: "Aerrand", src: "/clients-logo/errand.svg" },
  { name: "Harbor One Capital", src: "/clients-logo/hoc.svg" },
  { name: "Junk Cycle", src: "/clients-logo/junk-cycle 1.jpg" },
  { name: "Growtt", src: null },
  { name: "AQUAPROX AI", src: null },
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[72px] font-extrabold leading-[1.05] tracking-tight"
          >
            We Build AI Systems and Custom Platforms That{" "}
            <span className="gradient-text">
              Replace Manual Operations.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-3xl font-medium leading-relaxed"
          >
            From staffing automation to government-grade integrations. Oblique
            Path delivers working software that eliminates overhead, accelerates
            decisions, and scales with your organization.
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

        {/* Client logo strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-border/30"
        >
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.55 + 0.07 * index }}
              >
                {logo.src ? (
                  <div className="max-w-[80px] md:max-w-[100px] grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={100}
                      height={40}
                      className="w-full h-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ) : (
                  <span className="text-sm font-semibold tracking-wide text-foreground/40 hover:text-foreground/70 transition-colors duration-300 whitespace-nowrap">
                    {logo.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
