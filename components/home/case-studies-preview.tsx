"use client";

// SELECTED WORK — homepage case studies preview
// Three cards: client name, industry tag, headline result, short description
// Each links to /case-studies

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    client: "Harbor One Capital",
    tag: "Insurance Brokerage",
    result: "2× more closed policies",
    description:
      "Automated lead follow-up, quote reminders, and CRM integration eliminated manual chasing. Agents focused on selling.",
  },
  {
    client: "Aerrand",
    tag: "Technology & Operations",
    result: "70% faster onboarding",
    description:
      "End-to-end onboarding automation replaced manual emails and spreadsheets. Zero manual follow-ups required after go-live.",
  },
  {
    client: "Junk Cycle",
    tag: "Waste & Removal Services",
    result: "60% less time on scheduling",
    description:
      "Online booking, automated confirmations, and dispatch coordination replaced five-platform chaos with one clean system.",
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="py-20 px-4 lg:px-16 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-foreground/70 font-semibold mb-4"
        >
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Real Builds. Real Outcomes.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={cs.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="border border-border/50 rounded-xl p-6 bg-card/50 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <h3 className="text-lg font-semibold">{cs.client}</h3>
                <span className="text-xs text-foreground/60 bg-primary/5 border border-border/50 rounded-full px-2.5 py-1 shrink-0 font-medium">
                  {cs.tag}
                </span>
              </div>
              <p className="text-primary font-bold text-lg">{cs.result}</p>
              <p className="text-base text-foreground/80 leading-relaxed">
                {cs.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-base text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
