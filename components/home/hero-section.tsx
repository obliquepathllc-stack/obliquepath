"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { FloatingPaths } from "@/components/ui/background-paths";

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

const lineEntry = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const HERO_VIDEO = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">

      {/* Animated path lines — blue brand texture behind everything */}
      <div className="absolute inset-0 z-[1] opacity-55 pointer-events-none">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Headline anchor glow */}
      <div className="absolute top-[10%] -left-[8%] w-[700px] h-[700px] rounded-full bg-primary/[0.10] blur-[160px] pointer-events-none z-[2]" />
      <div className="absolute top-[0%] right-[-5%] w-[450px] h-[450px] rounded-full bg-primary/[0.07] blur-[140px] pointer-events-none z-[2]" />

      {/* Background video — only renders when URL is set */}
      {HERO_VIDEO && (
        <>
          <video
            src={HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/30 to-background pointer-events-none" />
        </>
      )}

      {/* Main hero content — flex-1 fills remaining space above scroll indicator + logos */}
      <div className="flex-1 flex flex-col justify-center px-4 lg:px-16 pt-32 pb-8 md:pt-44 md:pb-10 relative z-10">
        <div className="container max-w-6xl mx-auto">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-10"
          >
            AI Automation & Custom Software
          </motion.p>

          {/* Headline — line-by-line reveal */}
          <h1 className="text-[clamp(38px,7.5vw,104px)] font-black tracking-[-0.03em] leading-[0.92] mb-14">
            <motion.span className="block" {...lineEntry(0.2)}>
              Stop Running Manually.
            </motion.span>
            <motion.span className="gradient-text block" {...lineEntry(0.42)}>
              Build Systems That Work Without You.
            </motion.span>
          </h1>

          {/* Capability chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {["AI Automation", "Custom Software", "Mobile Apps", "Voice Agents"].map((cap) => (
              <span
                key={cap}
                className="text-[11px] font-medium tracking-wide text-muted-foreground border border-border rounded-full px-3.5 py-1.5 bg-card/60"
              >
                {cap}
              </span>
            ))}
          </motion.div>

          {/* Subtitle + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row sm:items-start gap-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              We build automation systems, custom web platforms, and mobile apps for businesses done running manually. Working software, deployed fast.
            </p>

            <div className="flex flex-col gap-3 sm:shrink-0">
              <Link href="/book-demo">
                <button className="rounded-full bg-foreground text-background font-bold px-8 py-4 flex items-center gap-2 hover:opacity-90 hover:shadow-[0_8px_40px_-6px_oklch(0.62_0.18_280_/_0.45)] active:scale-[0.97] transition-all duration-300 group text-[15px] w-full justify-center sm:w-auto">
                  Book a Strategy Call
                  <ArrowUpRight size={16} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </Link>
              <Link href="/case-studies">
                <button className="rounded-full border border-border text-foreground/60 font-medium px-8 py-4 hover:border-foreground/30 hover:text-foreground transition-all duration-200 text-[15px] w-full sm:w-auto">
                  See Our Work
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator — flex item, always below content, never overlaps buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="hidden md:flex flex-col items-center gap-2.5 py-4 relative z-10"
      >
        <span className="text-[9px] tracking-[0.28em] uppercase text-muted-foreground/60 font-medium">Scroll</span>
        <div className="relative w-px h-9 rounded-full overflow-hidden bg-muted-foreground/[0.12]">
          <motion.div
            className="absolute top-0 left-0 w-full rounded-full"
            style={{ height: "55%", background: "linear-gradient(to bottom, oklch(0.62 0.18 280 / 0.65), transparent)" }}
            animate={{ top: ["-55%", "155%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: [0.45, 0, 0.55, 1], repeatDelay: 0.4 }}
          />
        </div>
      </motion.div>

      {/* Client logos — bottom strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 border-t border-border px-4 lg:px-16 py-8"
      >
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground shrink-0 font-medium">
              Trusted by
            </p>
            <div className="overflow-hidden w-full" style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
              <motion.div
                className="flex items-center gap-12 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, ease: "linear", repeat: Infinity }}
              >
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <div key={`${logo.name}-${i}`} className="shrink-0 h-6 opacity-40 grayscale">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={80}
                      height={24}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
