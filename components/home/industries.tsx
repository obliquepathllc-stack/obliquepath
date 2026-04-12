"use client";

// INDUSTRIES — homepage section
// Five industry pills + a note for unlisted industries

import { motion } from "framer-motion";

const industries = [
  "Healthcare & Staffing",
  "Government & Public Sector",
  "Professional Services",
  "Real Estate & Insurance",
  "Local & Regional Operations",
];

export function Industries() {
  return (
    <section className="py-20 px-4 lg:px-16">
      <div className="container max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-foreground/70 font-semibold mb-4"
        >
          Industries
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Where We Operate
        </motion.h2>

        {/* Industry pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {industries.map((industry, index) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              viewport={{ once: true }}
              className="border border-border/50 rounded-full px-4 py-2 text-base text-foreground/85 bg-card/50 font-medium"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base text-foreground/70 font-medium"
        >
          Don&apos;t see your industry? If you have a process problem, we&apos;ve
          likely solved a version of it.
        </motion.p>
      </div>
    </section>
  );
}
