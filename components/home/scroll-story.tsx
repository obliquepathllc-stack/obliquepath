"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// ── VISUAL CARDS ──────────────────────────────────────────────────────────────

function FormCard() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 font-mono text-sm w-full">
      <div className="flex items-center gap-2 mb-5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-white/40 text-xs tracking-wide">New submission — 11:47 PM</span>
      </div>
      <div className="space-y-3">
        {[["Name", "Sarah K."], ["Email", "sarah@arcgroup.co"], ["Service", "Scheduling"], ["Message", "Need to automate booking..."]].map(([k, v]) => (
          <div key={k} className="flex gap-4">
            <span className="text-white/25 w-20 shrink-0 text-xs">{k}</span>
            <span className="text-white/75 text-xs">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CallCard() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 w-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </div>
        <div>
          <p className="text-white text-sm font-medium">Calling Sarah K.</p>
          <p className="text-white/35 text-xs font-mono">+1 (416) 555-0193</p>
        </div>
        <div className="ml-auto text-emerald-400 text-xs font-mono">00:47</div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between text-[10px] text-white/25 mb-1.5">
          <span>AI Agent</span><span>Qualifying</span>
        </div>
        <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-indigo-500 rounded-full" />
        </div>
      </div>
      <p className="text-white/35 text-xs font-mono leading-relaxed">
        &ldquo;And what&apos;s your timeline for getting started?&rdquo;
      </p>
    </div>
  );
}

function CRMCard() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 font-mono text-xs w-full">
      <div className="flex items-center justify-between mb-5">
        <span className="text-white/35 tracking-wide">CRM — Lead logged</span>
        <span className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>
      <div className="space-y-3">
        {[["Lead", "Sarah K."], ["Score", "87 / 100"], ["Status", "Hot"], ["Budget", "$2,400/mo"], ["Timeline", "This month"]].map(([k, v]) => (
          <div key={k} className="flex gap-4">
            <span className="text-white/25 w-20 shrink-0">{k}</span>
            <span className={v === "Hot" ? "text-emerald-400 font-medium" : v === "87 / 100" ? "text-indigo-400" : "text-white/75"}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TranscriptCard() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 w-full">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-white/35 text-xs font-mono tracking-wide">Transcript — Sarah K.</span>
      </div>
      <div className="space-y-2.5 text-xs font-mono mb-5">
        {[
          ["AI", "What&apos;s your current setup for scheduling?"],
          ["Sarah", "Honestly, spreadsheets. It&apos;s a disaster."],
          ["AI", "And budget-wise, are you thinking—"],
          ["Sarah", "Whatever it takes. We&apos;re losing jobs."],
        ].map(([speaker, line]) => (
          <p key={line}>
            <span className="text-white/30">{speaker}: </span>
            <span className="text-white/65" dangerouslySetInnerHTML={{ __html: `&ldquo;${line}&rdquo;` }} />
          </p>
        ))}
      </div>
      <div className="pt-4 border-t border-white/[0.06]">
        <p className="text-emerald-400 text-xs font-semibold">Ready to close. Call her first.</p>
      </div>
    </div>
  );
}

// ── STEPS DATA ────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: "01",
    eyebrow: "11:47 PM — Monday",
    title: "A lead fills out your form.",
    body: "Found you through your ad. Ready to buy. Right now, while you sleep, they are also filling out two other forms. First business to respond wins this deal.",
    Card: FormCard,
  },
  {
    num: "02",
    eyebrow: "11:48 PM — 60 seconds later",
    title: "The AI calls them.",
    body: "Not tomorrow morning. Not after the team checks their inbox. Within 60 seconds of the submission, the AI voice agent calls the number they left. They pick up.",
    Card: CallCard,
  },
  {
    num: "03",
    eyebrow: "11:52 PM — call complete",
    title: "Qualified. Scored. Logged.",
    body: "The AI runs through the right questions, determines fit, scores the lead, and writes every detail directly to your CRM. No human touched anything. Nothing got lost.",
    Card: CRMCard,
  },
  {
    num: "04",
    eyebrow: "7:02 AM — you wake up",
    title: "Your agent opens a warm lead.",
    body: "Full transcript in their inbox. Scored, qualified, context-ready. They make one call. They already know everything about Sarah before she picks up. They close.",
    Card: TranscriptCard,
  },
];

const TOTAL = STEPS.length;
const FADE = 0.07;

// ── ANIMATED STEP ─────────────────────────────────────────────────────────────

function AnimatedStep({
  step,
  index,
  progress,
}: {
  step: (typeof STEPS)[0];
  index: number;
  progress: MotionValue<number>;
}) {
  const isLast = index === TOTAL - 1;
  const segStart = index / TOTAL;
  const segEnd = (index + 1) / TOTAL;

  const opacity = useTransform(
    progress,
    isLast
      ? [segStart, segStart + FADE, 0.98, 1]
      : [segStart, segStart + FADE, segEnd - FADE, segEnd],
    isLast ? [0, 1, 1, 0.6] : [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [segStart, segStart + FADE],
    [40, 0]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
    >
      {/* Left — text content */}
      <div className="flex-1 max-w-lg">
        <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-medium mb-4">
          {step.eyebrow}
        </p>
        <div className="text-[72px] md:text-[108px] font-black text-white/[0.04] leading-none tracking-tighter select-none -ml-1 mb-2">
          {step.num}
        </div>
        <h3 className="text-3xl md:text-[40px] font-bold text-white tracking-tight leading-[1.1] mb-5">
          {step.title}
        </h3>
        <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
          {step.body}
        </p>
      </div>

      {/* Right — visual card */}
      <div className="w-full max-w-[360px] shrink-0">
        <step.Card />
      </div>
    </motion.div>
  );
}

// ── PROGRESS DOTS ─────────────────────────────────────────────────────────────

function ProgressDots({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="flex items-center gap-3">
      {STEPS.map((_, i) => {
        const segStart = i / TOTAL;
        const segEnd = (i + 1) / TOTAL;
        const dotOpacity = useTransform(
          progress,
          [segStart, segStart + FADE, segEnd - FADE, segEnd],
          i === TOTAL - 1 ? [0.25, 1, 1, 1] : [0.25, 1, 1, 0.25]
        );
        const dotScale = useTransform(
          progress,
          [segStart, segStart + FADE, segEnd - FADE, segEnd],
          i === TOTAL - 1 ? [1, 1.5, 1.5, 1.5] : [1, 1.5, 1.5, 1]
        );
        return (
          <motion.div
            key={i}
            style={{ opacity: dotOpacity, scale: dotScale }}
            className="w-1.5 h-1.5 rounded-full bg-white origin-center"
          />
        );
      })}
    </div>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${TOTAL * 110 + 40}vh` }}
    >
      <div className="sticky top-0 h-screen bg-[#07070f] overflow-hidden flex flex-col">

        {/* Top: section header */}
        <div className="shrink-0 px-4 lg:px-16 pt-20 pb-6">
          <div className="container max-w-6xl mx-auto">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/25 font-medium mb-3">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
              This is what automation looks like.
            </h2>
          </div>
        </div>

        {/* Middle: animated steps */}
        <div className="relative flex-1 px-4 lg:px-16">
          <div className="container max-w-6xl mx-auto h-full relative">
            {STEPS.map((step, i) => (
              <AnimatedStep
                key={step.num}
                step={step}
                index={i}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Bottom: progress indicator */}
        <div className="shrink-0 px-4 lg:px-16 pb-10">
          <div className="container max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
              <ProgressDots progress={scrollYProgress} />
              <div className="flex-1 h-px bg-white/[0.07] relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-white/30"
                  style={{ width: lineWidth }}
                />
              </div>
              <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">scroll</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
