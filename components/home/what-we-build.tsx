"use client";

// WHAT WE BUILD — homepage section
// Three core capability blocks with icon + title + description

import { motion } from "framer-motion";
import { BrainCircuit, LayoutDashboard, PhoneCall } from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI & Automation Systems",
    description:
      "Intelligent workflows that handle intake, validation, routing, approvals, and reporting, without a human in the loop. From healthcare staffing to lead nurturing, we automate the work that kills your team's time.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Platforms & Web Applications",
    description:
      "Secure, scalable platforms built for your specific operation. Portals, dashboards, management systems, and client-facing tools, engineered for performance and built to grow.",
  },
  {
    icon: PhoneCall,
    title: "Voice Agents & AI Integration",
    description:
      "Conversational AI agents that handle inbound calls, qualify leads, book appointments, and escalate intelligently, deployed across phone, web, and messaging channels.",
  },
];

export function WhatWeBuild() {
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
          What We Build
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Three Core Capabilities.{" "}
            <span className="gradient-text">Infinite Configurations.</span>
          </h2>
          <p className="text-foreground/75 text-lg max-w-xl font-medium">
            We don&apos;t offer packages. We scope what you actually need and
            build it to last.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <cap.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{cap.title}</h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
