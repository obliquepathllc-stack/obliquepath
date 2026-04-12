"use client";

// METRICS BAR — homepage results section
// Four stats in a horizontal bar with large number + label

import { motion } from "framer-motion";

const metrics = [
  {
    value: "70%",
    label: "Reduction in no-shows for service businesses",
  },
  {
    value: "2×",
    label: "Increase in closed deals through automated follow-up",
  },
  {
    value: "24hrs",
    label: "Saved weekly per client on average",
  },
  {
    value: "<6 wks",
    label: "Typical time to first live deployment",
  },
];

export function MetricsBar() {
  return (
    <section className="py-16 px-4 lg:px-16 bg-card/30 border-y border-border/30">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex flex-col gap-1"
            >
              <span className="text-4xl md:text-5xl font-bold gradient-text leading-none">
                {metric.value}
              </span>
              <span className="text-sm text-foreground/60 leading-snug mt-2">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 text-xs text-foreground/40"
        >
          Based on outcomes across active client engagements
        </motion.p>
      </div>
    </section>
  );
}
