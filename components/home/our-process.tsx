"use client";

// OUR PROCESS — homepage section (HOW WE WORK)
// Four numbered steps: Discovery, Architecture, Build, Support
// Horizontal on desktop, vertical stack on mobile

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "We map your current operation, identify the highest-leverage problems, and define exactly what gets built, before anyone writes a line of code.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "We design the system, select the right stack, and get your sign-off on the full scope. You know what you're getting before we build it.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    description:
      "We build fast, iterate in the open, and deploy to production, typically within 4-6 weeks for automation builds, 4-5 months for custom platforms.",
  },
  {
    number: "04",
    title: "Support & Scale",
    description:
      "We don't disappear after launch. We monitor, optimize, and extend the system as your operation grows.",
  },
];

export function OurProcess() {
  return (
    <section className="py-20 px-4 lg:px-16 bg-card/30 border-t border-border/30">
      <div className="container max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-foreground/70 font-semibold mb-4"
        >
          How We Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-14 max-w-2xl"
        >
          From First Call to Live System. No Surprises.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              <span className="text-5xl font-black text-foreground/15 font-mono leading-none">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold mt-1">{step.title}</h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
