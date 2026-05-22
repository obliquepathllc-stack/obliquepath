"use client";

import { motion } from "framer-motion";

const segments = [
  {
    number: "01",
    pain: "Buried in phone calls, missed follow-ups, and manual scheduling.",
    title: "Local & Regional Service Businesses",
    description:
      "Cleaning companies, junk removal, staffing agencies, insurance brokers. If your team is spending hours a week on bookings, reminders, and chasing leads by hand, that's the problem we exist to solve. We build the systems that handle it automatically.",
    outcome: "15–20 hrs of admin removed per week",
    tags: ["Booking Automation", "Lead Follow-Up", "Scheduling", "Client Reminders"],
  },
  {
    number: "02",
    pain: "Your tools don't fit. Spreadsheets aren't scaling. Generic software is a workaround.",
    title: "Mid-Market Teams Ready to Scale",
    description:
      "Growing companies that have outgrown their current setup. You need a platform built around how your operation actually works, not adapted from a template. Custom dashboards, custom logic, your data — not someone else's SaaS.",
    outcome: "Custom platform live in 4–5 months",
    tags: ["Custom Platforms", "Workflow Automation", "CRM Integration", "Reporting Dashboards"],
  },
  {
    number: "03",
    pain: "Complex environments, compliance requirements, vendors who disappear after launch.",
    title: "Enterprise & Government",
    description:
      "Multi-location operations and compliance-heavy industries need a delivery partner, not another vendor. We own the build, the deployment, and the outcome. You have a single accountable team from scoping through to live.",
    outcome: "End-to-end delivery, fully accountable",
    tags: ["Compliance Systems", "Multi-System Integration", "Audit Trails", "Custom Development"],
  },
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 as number },
  transition: { duration: 0.55, delay, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
});

const slideIn = (delay = 0) => ({
  initial: { opacity: 0, x: -48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.1 as number },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export function WhoWeWorkWith() {
  return (
    <section className="px-4 lg:px-16 py-24 md:py-32">
      <div className="container max-w-6xl mx-auto">
        <motion.div {...reveal()} className="mb-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">
            Who We Work With
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] leading-tight max-w-2xl">
            If any of this sounds familiar, we should talk.
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {segments.map((segment, i) => (
            <motion.div
              key={segment.number}
              {...slideIn(i * 0.1)}
              className="grid grid-cols-1 md:grid-cols-[72px_1fr] gap-4 md:gap-10 py-10 border-t border-border last:border-b"
            >
              <div className="pt-1">
                <span className="text-xs font-mono text-muted-foreground/35">{segment.number}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-6 lg:gap-12 items-start">
                <div>
                  {/* Pain point — the thing they immediately recognize */}
                  <p className="text-sm text-muted-foreground/60 italic mb-3 leading-snug">
                    &ldquo;{segment.pain}&rdquo;
                  </p>

                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{segment.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{segment.description}</p>

                  {/* Outcome chip */}
                  <span className="inline-flex items-center text-[11px] font-semibold text-primary border border-primary/25 bg-primary/[0.07] rounded-full px-3 py-1.5">
                    {segment.outcome}
                  </span>
                </div>

                <div className="flex flex-wrap lg:flex-col gap-2 lg:items-end">
                  {segment.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-medium text-muted-foreground border border-border rounded-full px-3 py-1 bg-card">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
