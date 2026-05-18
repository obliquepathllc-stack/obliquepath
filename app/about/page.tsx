"use client";

// About page — NO icon boxes, NO CheckCircle bullets. Editorial typography-first.

import { PageLayout } from "@/components/page-layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.15 as number },
  transition: { duration: 0.65, delay, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
});

const impactStats = [
  { value: "85%", label: "Avg. time saved on admin tasks" },
  { value: "3×", label: "Customer response rate improvement" },
  { value: "40%", label: "Avg. cost reduction on manual work" },
  { value: "24/7", label: "Automated service coverage" },
];

const values = [
  {
    title: "Accessibility",
    description: "Automation that's accessible to businesses of all sizes. Not just tech giants with large engineering budgets.",
  },
  {
    title: "Practicality",
    description: "Solutions focused on real-world results and tangible improvements. Not demos that look good but never ship.",
  },
  {
    title: "Accountability",
    description: "We're responsible for the build, the deployment, and the outcome. We don't disappear when it gets shipped.",
  },
];

const benefits = [
  "Custom solutions built around your specific operation. Not adapted from a template.",
  "Automation that delivers measurable ROI, not theoretical improvements",
  "Ongoing support and continuous optimization after deployment",
  "User-friendly tools your team will actually adopt and use",
  "Scalable systems that grow as your operation grows",
];

export default function AboutPage() {
  return (
    <PageLayout title="About Oblique Path">

      {/* Mission — editorial split */}
      <section className="px-4 lg:px-16 py-16 md:py-28">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div {...reveal()}>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-6">Our Mission</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.02em] leading-[0.95] mb-8">
                AI automation should be accessible, practical, and affordable.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
                Oblique Path helps small and mid-sized businesses automate the work that&apos;s killing their team&apos;s time. We build systems that actually ship, processes that actually run, and platforms that actually grow with you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand the gap between where businesses are and where AI can take them. Our job is to close it. With working software, not presentations.
              </p>
            </motion.div>

            {/* Impact stats — no card boxes, just numbers on a grid */}
            <motion.div {...reveal(0.1)} className="grid grid-cols-2 gap-px bg-border">
              {impactStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...reveal(0.08 + i * 0.05)}
                  className="bg-background p-8 flex flex-col gap-2"
                >
                  <div className="text-5xl md:text-6xl font-black gradient-text leading-none tracking-tighter">{stat.value}</div>
                  <p className="text-sm text-muted-foreground leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values — horizontal divider list */}
      <section className="px-4 lg:px-16 py-16 md:py-24 border-y border-border bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <motion.div {...reveal()} className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">What we stand for</h2>
          </motion.div>

          <div className="flex flex-col">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...reveal(0.08 + i * 0.06)}
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 py-8 border-t border-border last:border-b"
              >
                <h3 className="text-xl font-bold tracking-tight text-foreground">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us — left list, right CTA card */}
      <section className="px-4 lg:px-16 py-16 md:py-28">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.div {...reveal()} className="mb-10">
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-5">Why Oblique Path</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Built differently from the start</h2>
              </motion.div>
              <div className="flex flex-col">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    {...reveal(0.06 + i * 0.05)}
                    className="py-4 border-t border-border last:border-b flex items-start gap-4"
                  >
                    <span className="text-xs font-mono text-muted-foreground/35 shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground/75 leading-relaxed text-sm">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div {...reveal(0.12)} className="rounded-2xl border border-border bg-card p-10 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)]">
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-5">Ready to start?</p>
              <h3 className="text-3xl font-black tracking-tight mb-4">Let&apos;s talk about what you&apos;re building.</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                30 minutes. No pitch. We&apos;ll tell you what to build, how long it takes, and what it costs.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/book-demo">
                  <button className="rounded-full bg-foreground text-background font-semibold px-7 py-3.5 flex items-center gap-2 hover:opacity-80 active:scale-[0.97] transition-all duration-200 group w-full justify-center">
                    Book a Strategy Call
                    <ArrowUpRight size={15} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="rounded-full border border-border text-foreground/60 font-medium px-7 py-3.5 hover:border-foreground/30 hover:text-foreground transition-all duration-200 w-full">
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
