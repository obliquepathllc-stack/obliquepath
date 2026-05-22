"use client";

// Case Studies Preview — spotlight hover cards linking to individual slug pages

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react";
import { useState, useRef, useCallback } from "react";

const previews = [
  {
    client: "Oblique Path",
    tag: "AI Voice Agent",
    stat: "60s",
    statLabel: "form fill to AI call",
    description: "AI voice agent calls leads automatically, qualifies them in conversation, logs to CRM, and sends a full transcript. Try it live.",
    slug: "ai-voice-agent",
    wide: true,
  },
  {
    client: "Aerrand",
    tag: "Technology & Operations",
    stat: "70%",
    statLabel: "faster onboarding",
    description: "End-to-end onboarding automation replaced manual emails and spreadsheets. Zero manual follow-ups required after go-live.",
    slug: "aerrand",
    wide: false,
  },
  {
    client: "Junk Cycle",
    tag: "Waste & Removal",
    stat: "60%",
    statLabel: "less time on scheduling",
    description: "Online booking, automated confirmations, and dispatch coordination replaced five-platform chaos with one clean system.",
    slug: "junk-cycle",
    wide: false,
  },
];

function PreviewCard({ preview, index }: { preview: typeof previews[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  return (
    <Link href={`/case-studies/${preview.slug}`} className={preview.wide ? "md:col-span-2" : "md:col-span-1"}>
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="relative group h-full overflow-hidden rounded-2xl border border-border bg-card p-8 cursor-pointer shadow-[0_2px_16px_-6px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_28px_-6px_rgba(0,0,0,0.12)] transition-all duration-300"
      >
        {/* Spotlight */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(300px circle at ${spot.x}px ${spot.y}px, rgba(99,102,241,0.08), transparent 70%)`,
          }}
        />

        <div className="relative z-10 flex flex-col h-full gap-5">
          {/* Tag */}
          <span className="text-[11px] tracking-wide font-medium text-muted-foreground border border-border rounded-full px-3 py-1 self-start">
            {preview.tag}
          </span>

          {/* Client + stat */}
          <div>
            <p className="text-xs text-muted-foreground/60 mb-1">{preview.client}</p>
            <div className={`font-bold text-foreground leading-none tracking-tighter mb-1 ${preview.wide ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"}`}>
              {preview.stat}
            </div>
            <p className="text-sm text-muted-foreground">{preview.statLabel}</p>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">{preview.description}</p>

          {/* CTA */}
          <div className="flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
            <span>Read case study</span>
            <ArrowUpRight size={14} weight="bold" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function CaseStudiesPreview() {
  return (
    <section className="px-4 lg:px-16 py-24 md:py-32 ">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Selected Work</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em]">Real builds. Real outcomes.</h2>
          </div>
          <Link href="/case-studies" className="shrink-0">
            <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200 group">
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {previews.map((preview, i) => (
            <PreviewCard key={preview.slug} preview={preview} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
