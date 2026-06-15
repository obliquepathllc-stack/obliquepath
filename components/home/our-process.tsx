"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description: "We map your current operation, identify the highest-leverage problems, and define exactly what gets built. Before anyone writes a line of code.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description: "We design the system, select the right stack, and get your sign-off on the full scope. You know exactly what you're getting before we build it.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    description: "We build fast, iterate in the open, and deploy to production. Typically 4–6 weeks for automation builds, 4–5 months for custom platforms.",
  },
  {
    number: "04",
    title: "Support & Scale",
    description: "We don't disappear after launch. We monitor, optimize, and extend the system as your operation grows.",
  },
];

export function OurProcess() {
  return (
    <section className="px-4 lg:px-16 py-24 md:py-32">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">How We Work</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] leading-tight max-w-xl">
            From first call to live system. No surprises.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col gap-4 pr-0 lg:pr-8 pb-10 lg:pb-0 pl-6 lg:pl-0 lg:pt-6"
            >
              {/* Desktop: animated top connecting line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
                className="hidden lg:block absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary/50 via-primary/25 to-transparent"
              />

              {/* Mobile: animated left connecting line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "top" }}
                className="lg:hidden absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/25 to-transparent"
              />

              {/* Step dot — pops in after line draws */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.12 + 0.35, type: "spring", stiffness: 400, damping: 20 }}
                className="absolute -left-[5px] top-0 lg:left-0 lg:-top-[5px] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_2px_oklch(0.62_0.18_280_/_0.4)]"
              />

              <span className="text-xs font-mono text-muted-foreground/40 mt-1">{step.number}</span>
              <h3 className="text-base font-bold tracking-tight text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
