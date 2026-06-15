"use client";

import { motion } from "framer-motion";

const industries = [
  "Healthcare & Staffing",
  "Government & Public Sector",
  "Professional Services",
  "Real Estate & Insurance",
  "Local & Regional Operations",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.25 },
  },
};

const pill = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function Industries() {
  return (
    <section className="py-20 px-4 lg:px-16">
      <div className="container max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-xs tracking-[0.2em] uppercase text-foreground/70 font-semibold mb-4"
        >
          Industries
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Where We Operate
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {industries.map((industry) => (
            <motion.span
              key={industry}
              variants={pill}
              className="border border-border/50 rounded-full px-4 py-2 text-base text-foreground/85 bg-card/50 font-medium hover:border-primary/30 hover:bg-primary/[0.05] transition-colors duration-300 cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
