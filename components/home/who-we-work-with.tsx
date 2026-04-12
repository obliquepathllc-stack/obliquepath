"use client";

// WHO WE WORK WITH — homepage section
// Three audience segments: Local/Regional, Mid-Market, Enterprise & Government

import { motion } from "framer-motion";

const segments = [
  {
    title: "Local & Regional Businesses",
    description:
      "Service businesses, agencies, and operators who need automation that actually runs: booking, follow-up, scheduling, and reporting on autopilot.",
  },
  {
    title: "Mid-Market & Growth Companies",
    description:
      "Scaling teams that have outgrown manual processes and need custom platforms, AI workflows, and system integrations built to handle real volume.",
  },
  {
    title: "Enterprise & Government",
    description:
      "Organizations with complex requirements: compliance, security, multi-system integration, and stakeholder reporting. They need a delivery partner, not a vendor.",
  },
];

export function WhoWeWorkWith() {
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
          Who We Work With
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl"
        >
          Built for Organizations That Can&apos;t Afford to Stand Still
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="border border-border/50 rounded-xl p-6 bg-card/50 flex flex-col gap-3"
            >
              <h3 className="text-lg font-semibold">{segment.title}</h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                {segment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
