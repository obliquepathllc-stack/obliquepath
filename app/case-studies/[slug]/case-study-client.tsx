"use client";

// Individual case study — full before/after narrative format
// taste-skill: Ethereal Glass, Double-Bezel metric cards, blur scroll reveal

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies";
import { ArrowLeft, ArrowRight, ArrowUpRight, PhoneCall } from "lucide-react";
import { ScrollWatcher } from "@/components/scroll-watcher";

// Scroll entry with blur (taste-skill §5C)
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.15 as number },
  transition: { duration: 0.75, delay, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
});

// Double-Bezel metric card (taste-skill Doppelrand §4A)
function MetricCard({ stat, description, delay }: { stat: string; description: string; delay: number }) {
  return (
    <motion.div {...reveal(delay)} className="rounded-[1.5rem] bg-white/[0.04] border border-white/[0.06] p-2">
      <div className="rounded-[calc(1.5rem-0.5rem)] bg-white/[0.03] border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-6 text-center flex flex-col items-center justify-center gap-2 min-h-[120px]">
        <div className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">
          {stat}
        </div>
        <div className="text-xs text-white/35 leading-snug max-w-[120px] text-center">
          {description}
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudyClient({
  studyId,
  prevStudyId,
  nextStudyId,
}: {
  studyId: string;
  prevStudyId: string | null;
  nextStudyId: string | null;
}) {
  const study = caseStudies.find((s) => s.id === studyId)!;
  const prevStudy = prevStudyId ? (caseStudies.find((s) => s.id === prevStudyId) ?? null) : null;
  const nextStudy = nextStudyId ? (caseStudies.find((s) => s.id === nextStudyId) ?? null) : null;

  return (
    <div className="bg-[#07070f] text-white min-h-screen">
      <ScrollWatcher />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[68vh] flex flex-col justify-end pt-28 pb-20 px-4 lg:px-16 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[700px] h-[600px] bg-indigo-600/[0.07] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-6xl mx-auto relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/55 transition-colors duration-200 group"
            >
              <span className="w-7 h-7 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:border-white/18 group-hover:-translate-x-0.5 transition-all duration-200">
                <ArrowLeft className="h-3 w-3" />
              </span>
              All Case Studies
            </Link>
          </motion.div>

          {/* Industry + location */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/28 border border-white/[0.07] rounded-full px-3 py-1.5">
              {study.filterTag}
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/18 border border-white/[0.04] rounded-full px-3 py-1.5">
              {study.location}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl sm:text-5xl md:text-[60px] font-bold tracking-tight leading-[1.04] max-w-4xl mb-12"
          >
            {study.title}
          </motion.h1>

          {/* Hero stat + client info */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-14"
          >
            <div>
              <div className="text-[80px] md:text-[108px] font-bold text-white leading-none tracking-tighter">
                {study.results[0].stat}
              </div>
              <div className="text-white/30 text-sm mt-1">{study.results[0].description}</div>
            </div>

            <div className="hidden sm:block w-px h-20 bg-white/[0.07]" />

            <div className="flex flex-col gap-1.5">
              {study.image && (
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/[0.07] flex items-center justify-center p-1.5 mb-2">
                  <Image src={study.image} alt={study.client} width={40} height={40} className="object-contain w-full h-full" />
                </div>
              )}
              <span className="text-white/55 font-semibold">{study.client}</span>
              <span className="text-white/28 text-sm">{study.industry}</span>
              <span className="text-white/22 text-xs">{study.service}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/22 to-transparent" />

      {/* ── BEFORE ────────────────────────────────────────────────────────────── */}
      <section className="px-4 lg:px-16 py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: before headline + narrative */}
            <div>
              <motion.p {...reveal(0)} className="text-[10px] tracking-[0.22em] uppercase text-white/22 mb-5">
                Before
              </motion.p>
              <motion.h2
                {...reveal(0.06)}
                className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6"
              >
                {study.beforeHeadline}
              </motion.h2>
              <motion.p {...reveal(0.1)} className="text-white/45 leading-relaxed text-base">
                {study.beforeNarrative}
              </motion.p>
            </div>

            {/* Right: pain point cards */}
            <div className="flex flex-col gap-3">
              {study.painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  {...reveal(0.08 + i * 0.06)}
                  className="rounded-2xl bg-white/[0.025] border border-white/[0.06] p-6"
                >
                  {/* Red/warning indicator */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0" />
                    <h3 className="text-sm font-semibold text-white/70">{point.title}</h3>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thin section divider */}
      <div className="mx-4 lg:mx-16 h-px bg-white/[0.04]" />

      {/* ── AFTER ─────────────────────────────────────────────────────────────── */}
      <section className="px-4 lg:px-16 py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: solution bullets */}
            <div className="order-2 lg:order-1">
              <p className="text-[10px] tracking-[0.22em] uppercase text-white/22 mb-5">What We Built</p>
              <div className="flex flex-col gap-3">
                {study.solution.map((item, i) => (
                  <motion.div
                    key={i}
                    {...reveal(0.06 + i * 0.05)}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400/55 shrink-0" />
                    <p className="text-sm text-white/50 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: after headline + narrative */}
            <div className="order-1 lg:order-2">
              <motion.p {...reveal(0)} className="text-[10px] tracking-[0.22em] uppercase text-teal-400/50 mb-5">
                After
              </motion.p>
              <motion.h2
                {...reveal(0.06)}
                className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6"
              >
                {study.afterHeadline}
              </motion.h2>
              <motion.p {...reveal(0.1)} className="text-white/45 leading-relaxed text-base">
                {study.afterNarrative}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────────── */}
      {study.processSteps && study.processSteps.length > 0 && (
        <section className="px-4 lg:px-16 pb-24 md:pb-32">
          <div className="container max-w-6xl mx-auto">
            <div className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-8 md:p-12 relative overflow-hidden">
              {/* Inner glass top */}
              <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-b from-white/[0.04] to-transparent h-24 pointer-events-none" />

              <div className="relative z-10">
                <motion.div {...reveal(0)} className="mb-10">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-white/22 mb-3">How It Works</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Step by step
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {study.processSteps.map((step, i) => (
                    <motion.div
                      key={i}
                      {...reveal(0.06 + i * 0.07)}
                      className="flex flex-col gap-3"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-white/20">{step.number}</span>
                        {i < study.processSteps.length - 1 && (
                          <div className="hidden lg:block flex-1 h-px bg-white/[0.06]" />
                        )}
                      </div>
                      <h3 className="text-sm font-semibold text-white/65">{step.title}</h3>
                      <p className="text-xs text-white/35 leading-relaxed">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── RESULTS ───────────────────────────────────────────────────────────── */}
      <section className="px-4 lg:px-16 pb-24 md:pb-32">
        <div className="container max-w-6xl mx-auto">
          <motion.div {...reveal(0)} className="mb-10">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/22 mb-3">Measured outcomes</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              The Results{" "}
              <span className="text-white/22 font-normal text-lg">{study.timeframe}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {study.results.map((r, i) => (
              <MetricCard key={i} stat={r.stat} description={r.description} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ───────────────────────────────────────────────────────── */}
      <section className="px-4 lg:px-16 pb-24 md:pb-32">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            {...reveal(0)}
            className="relative rounded-[2rem] border border-white/[0.07] bg-white/[0.02] p-10 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-b from-white/[0.04] to-transparent h-28 pointer-events-none" />
            <div className="absolute -bottom-20 right-10 w-60 h-60 bg-indigo-600/[0.07] rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute left-0 top-10 bottom-10 w-[2px] rounded-full bg-gradient-to-b from-indigo-500/50 via-teal-500/35 to-transparent" />

            <div className="relative z-10 pl-8 md:pl-12">
              <div className="text-[120px] leading-none text-white/[0.035] font-bold select-none -mb-8 -ml-4">
                &ldquo;
              </div>
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-white/70 font-medium leading-relaxed tracking-tight mb-8">
                {study.testimonial}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/12 border border-indigo-500/18 flex items-center justify-center">
                  <study.icon className="h-5 w-5 text-indigo-400/55" />
                </div>
                <div>
                  {study.clientName && <p className="font-semibold text-white/60 text-sm">{study.clientName}</p>}
                  <p className="text-xs text-white/30">{study.clientTitle}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LIVE DEMO ─────────────────────────────────────────────────────────── */}
      {study.liveDemoSection && (
        <section className="px-4 lg:px-16 pb-24 md:pb-32">
          <div className="container max-w-6xl mx-auto">
            <motion.div
              {...reveal(0)}
              className="relative overflow-hidden rounded-[2rem] border border-indigo-500/20 bg-indigo-500/[0.04]"
            >
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/[0.1] blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-b from-white/[0.04] to-transparent h-28 pointer-events-none" />

              <div className="relative z-10 p-8 md:p-12">
                <div className="max-w-xl mb-8">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-indigo-400/60 mb-4">Live Demo</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                    Try the AI Voice Agent — right now.
                  </h2>
                  <p className="text-white/40 leading-relaxed text-sm">
                    Enter your name and phone number. Our AI will call you within 60 seconds. This is the exact experience your leads receive — live, on your phone.
                  </p>
                </div>

                <a
                  href="https://lishi627185.app.n8n.cloud/form/cb1df2de-556d-4e78-a31b-952b59cd75b2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-indigo-500/25 bg-white/[0.03] p-10 flex flex-col items-center gap-6 cursor-pointer hover:bg-indigo-500/[0.06] transition-colors duration-300"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-16 h-16 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center"
                    >
                      <PhoneCall className="h-7 w-7 text-indigo-400" />
                    </motion.div>

                    <div className="text-center">
                      <p className="text-white/75 font-semibold mb-1">Get My Demo Call Now</p>
                      <p className="text-white/30 text-sm">Opens in 30 seconds — enter your name and number, AI calls you immediately</p>
                    </div>

                    <div className="inline-flex items-center gap-2.5 rounded-full bg-indigo-500 text-white font-semibold px-7 py-3.5 text-sm hover:bg-indigo-400 transition-colors duration-200">
                      Try the AI Voice Agent
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </motion.div>
                </a>

                <p className="text-[11px] text-white/20 mt-4 text-center">
                  Your number is used only for this demo call and not stored or shared.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── PREV / NEXT ────────────────────────────────────────────────────────── */}
      {(prevStudy || nextStudy) && (
        <section className="px-4 lg:px-16 pb-24">
          <div className="container max-w-6xl mx-auto border-t border-white/[0.04] pt-12">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/22 mb-6">More Case Studies</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {prevStudy && (
                <Link href={prevStudy.pageUrl ?? `/case-studies/${prevStudy.id}`} className="group">
                  <div className="flex items-center gap-4 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/22 hover:bg-indigo-500/[0.04] transition-all duration-300">
                    <div className="w-9 h-9 rounded-full border border-white/[0.07] flex items-center justify-center shrink-0 group-hover:-translate-x-0.5 transition-transform duration-300">
                      <ArrowLeft className="h-4 w-4 text-white/35" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/22 mb-1">Previous</p>
                      <p className="text-sm font-medium text-white/50 group-hover:text-white/75 transition-colors line-clamp-1">
                        {prevStudy.client}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
              {nextStudy && (
                <Link href={nextStudy.pageUrl ?? `/case-studies/${nextStudy.id}`} className="group">
                  <div className="flex items-center justify-between gap-4 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/22 hover:bg-indigo-500/[0.04] transition-all duration-300">
                    <div>
                      <p className="text-[10px] text-white/22 mb-1">Next</p>
                      <p className="text-sm font-medium text-white/50 group-hover:text-white/75 transition-colors line-clamp-1">
                        {nextStudy.client}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-white/[0.07] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform duration-300">
                      <ArrowRight className="h-4 w-4 text-white/35" />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────────────────── */}
      <section className="px-4 lg:px-16 pb-40">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            {...reveal(0)}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-12 md:p-16 text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-indigo-600/[0.09] blur-3xl rounded-full pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-b from-white/[0.04] to-transparent h-28 pointer-events-none" />

            <div className="relative z-10">
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/22 mb-5">Get started</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Want results like these?
              </h2>
              <p className="text-white/32 max-w-md mx-auto mb-10 leading-relaxed">
                Book a free consultation. We map your workflow, find the gaps, and build the system.
              </p>

              <Link href={study.ctaLink}>
                <button className="inline-flex items-center gap-3 rounded-full bg-white text-[#07070f] font-semibold px-8 py-4 hover:bg-white/90 active:scale-[0.98] transition-all duration-200 group">
                  {study.ctaText}
                  <span className="w-7 h-7 rounded-full bg-black/8 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
