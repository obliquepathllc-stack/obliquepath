"use client";

// /case-studies — listing page, theme-aware (light + dark)
// Cards link to /case-studies/[slug] (SEO). Individual pages are always dark.
// Layout: zigzag asymmetric bento, client marquee, spotlight hover

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { caseStudies, FILTERS, type CaseStudy } from "@/lib/case-studies";
import { ScrollWatcher } from "@/components/scroll-watcher";

function getBentoSpan(index: number, total: number): "wide" | "narrow" | "full" {
  if (total === 1) return "full";
  if (total === 2) return index === 0 ? "wide" : "narrow";
  if (total % 2 === 1 && index === total - 1) return "full";
  const pair = Math.floor(index / 2);
  const posInPair = index % 2;
  return pair % 2 === 0
    ? posInPair === 0 ? "wide" : "narrow"
    : posInPair === 0 ? "narrow" : "wide";
}

function StudyCard({ study, index, total }: { study: CaseStudy; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const span = getBentoSpan(index, total);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  return (
    <Link
      href={study.pageUrl ?? `/case-studies/${study.id}`}
      className={cn(
        span === "full" && "md:col-span-3",
        span === "wide" && "md:col-span-2",
        span === "narrow" && "md:col-span-1"
      )}
    >
      <motion.div
        ref={cardRef}
        className="relative group h-full overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_2px_16px_-6px_rgba(0,0,0,0.07)] cursor-pointer"
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.75, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
        whileHover={{ scale: 1.015, boxShadow: "0 8px 32px -8px rgba(0,0,0,0.14)" }}
        style={{ transition: "transform 0.4s cubic-bezier(0.32,0.72,0,1)" }}
      >
        {/* Spotlight radial (works on light and dark) */}
        <div
          className="absolute inset-0 rounded-[1.75rem] pointer-events-none transition-opacity duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(420px circle at ${spot.x}px ${spot.y}px, rgba(99,102,241,0.09), transparent 70%)`,
          }}
        />

        {/* Hover border glow */}
        <div
          className="absolute inset-0 rounded-[1.75rem] pointer-events-none transition-all duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            boxShadow: "inset 0 0 0 1.5px rgba(99,102,241,0.25)",
          }}
        />

        {/* Client image as subtle bg tint */}
        {study.image && (
          <div className="absolute inset-0 rounded-[1.75rem] overflow-hidden pointer-events-none">
            <Image
              src={study.image}
              alt=""
              fill
              className="object-cover opacity-[0.03] scale-110 group-hover:opacity-[0.06] transition-opacity duration-700"
            />
          </div>
        )}

        <div className={cn("relative p-7", span === "wide" && "md:p-10")}>
          {/* Top: tag + logo */}
          <div className="flex items-start justify-between mb-7">
            <span className="text-[11px] tracking-wide font-medium text-muted-foreground border border-border rounded-full px-3 py-1.5">
              {study.filterTag}
            </span>
            {study.image && (
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-secondary border border-border flex items-center justify-center p-1.5 shrink-0">
                <Image src={study.image} alt={study.client} width={32} height={32} className="object-contain w-full h-full" />
              </div>
            )}
          </div>

          {/* Client name */}
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-3">
            {study.client}
          </p>

          {/* Hero metric */}
          <div className="mb-4">
            <div className={cn("font-bold text-foreground leading-none tracking-tighter mb-1.5", span === "wide" ? "text-7xl md:text-8xl" : "text-5xl md:text-6xl")}>
              {study.results[0].stat}
            </div>
            <div className="text-sm text-muted-foreground">{study.results[0].description}</div>
          </div>

          {/* Testimonial snippet */}
          <p className={cn("text-muted-foreground/70 text-sm leading-relaxed italic mb-7", span === "wide" ? "line-clamp-3" : "line-clamp-2")}>
            &ldquo;{study.testimonial}&rdquo;
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
            <span>Read case study</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

const marqueeItems = caseStudies.flatMap((s) => [s.client, "·"]);

function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden py-4 border-y border-border">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className={cn("text-xs tracking-widest uppercase shrink-0", item === "·" ? "text-muted-foreground/20" : "text-muted-foreground/50 font-medium")}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter((s) => s.filterTag === activeFilter);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <ScrollWatcher />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative flex items-center min-h-[58vh] pt-32 pb-20 md:pt-44 md:pb-24 px-4 lg:px-16 overflow-hidden">
        <div className="absolute -top-20 left-1/3 w-[700px] h-[500px] bg-primary/[0.05] rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[400px] bg-primary/[0.03] rounded-full blur-[110px] pointer-events-none" />

        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-secondary px-4 py-2 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium">Case Studies</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-[80px] font-bold tracking-tighter leading-[0.93] mb-7">
              Proof,
              <br />
              <span className="text-muted-foreground/40">not promises.</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-lg mb-12 leading-relaxed">
              Real businesses, measurable outcomes. Every case here is a workflow we built and a problem we eliminated — numbers included.
            </p>

            <div className="flex flex-wrap gap-x-10 gap-y-5">
              {[
                { value: "8+", label: "Clients automated" },
                { value: "8", label: "Industries served" },
                { value: "60%", label: "Avg. admin time saved" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-foreground tracking-tight">{s.value}</span>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────────────────── */}
      <MarqueeStrip />

      {/* ── FILTERS ───────────────────────────────────────────────────────────── */}
      <section className="px-4 lg:px-16 pt-10 mb-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1"
            style={{ scrollbarWidth: "none" }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "shrink-0 px-5 py-2 rounded-full text-xs font-medium border transition-all duration-200",
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_16px_rgba(99,102,241,0.2)]"
                    : "bg-secondary text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                )}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BENTO GRID ────────────────────────────────────────────────────────── */}
      <section className="px-4 lg:px-16 pb-24 md:pb-32">
        <div className="container max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-3"
            >
              {filtered.length === 0 ? (
                <div className="md:col-span-3 py-24 text-center text-muted-foreground text-sm">
                  No case studies in this category yet.
                </div>
              ) : (
                filtered.map((study, i) => (
                  <StudyCard key={study.id} study={study} index={i} total={filtered.length} />
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────────── */}
      <section className="px-4 lg:px-16 pb-32 md:pb-40">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-12 md:p-16 text-center shadow-[0_8px_48px_-12px_rgba(0,0,0,0.1)]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/[0.05] blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 mb-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Get started</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                Ready for results like these?
              </h2>
              <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
                Book a free consultation. We map your workflow, identify the gaps, and build the system that eliminates them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-demo">
                  <button className="rounded-full bg-primary text-primary-foreground font-semibold px-8 py-4 flex items-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all duration-200 group mx-auto sm:mx-0">
                    Book a Free Consultation
                    <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="rounded-full border border-border text-foreground/60 font-medium px-8 py-4 hover:border-primary/40 hover:text-foreground transition-all duration-200 mx-auto sm:mx-0">
                    View Pricing
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
