"use client";

// Services page — NO icon boxes. Numbers and typography only.

import { PageLayout } from "@/components/page-layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.12 as number },
  transition: { duration: 0.65, delay, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
});

const serviceCategories = [
  {
    number: "01",
    id: "ai-automation",
    title: "AI Automation",
    description: "Intelligent automation systems that handle repetitive tasks and streamline your business processes. No human in the loop.",
    services: ["AI Chatbots & Voice Agents", "Process Automation & Routing", "Data Analysis & Reporting", "Lead Nurture Sequences"],
  },
  {
    number: "02",
    id: "custom-web-solutions",
    title: "Custom Web Solutions",
    description: "Websites and web applications with automation built in from day one. Saving your team hours every week.",
    services: ["Custom Web Development", "Automated Forms & Workflows", "Client Self-Service Portals", "Management Dashboards"],
  },
  {
    number: "03",
    id: "process-optimization",
    title: "Process Optimization",
    description: "Analysis and improvement of your current workflows using AI, automation, and systems integration.",
    services: ["Workflow Analysis & Mapping", "Multi-System Integration", "Automation Strategy & Roadmap", "Performance Monitoring"],
  },
  {
    number: "04",
    id: "tech-support",
    title: "Tech Support & Maintenance",
    description: "Ongoing support and maintenance for all automation systems. Reliable, current, and always improving.",
    services: ["System Maintenance & Updates", "Performance Monitoring", "Responsive Technical Support", "Continuous Optimization"],
  },
  {
    number: "05",
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps built for your specific operation. iOS and Android, with automation and backend integrations built in from day one.",
    services: ["iOS & Android Development", "Cross-Platform (React Native)", "App-Backend Integration", "Push Notifications & Automation"],
  },
];

const specialized = [
  { title: "AI B2B Lead Generation", description: "Automated systems that identify, qualify, and nurture B2B prospects at scale. AI-personalized outreach that books meetings without a sales team managing every touchpoint." },
  { title: "Scheduling Systems", description: "Automated appointment booking and management. Confirmations, reminders, and dispatch coordination built in." },
  { title: "Inventory Management", description: "Smart inventory systems that predict needs and automate ordering before you run low." },
  { title: "Document Processing", description: "AI-powered document analysis, data extraction, and automated routing to the right people." },
  { title: "Customer Service Automation", description: "Smart systems that route, triage, and respond to customer inquiries around the clock." },
];

export default function ServicesPage() {
  return (
    <PageLayout
      title="Our Services"
      subtitle="AI automation and custom software built for how your business actually operates."
    >
      {/* Core services */}
      <section className="px-4 lg:px-16 py-16 md:py-24">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col">
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                {...reveal(0.05 + i * 0.06)}
                className="grid grid-cols-1 lg:grid-cols-[80px_1fr_200px] gap-6 lg:gap-12 py-12 border-t border-border last:border-b items-start"
              >
                <span className="text-xs font-mono text-muted-foreground/35 pt-1">{cat.number}</span>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-3">{cat.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-5 max-w-xl">{cat.description}</p>
                  <div className="flex flex-col gap-1.5">
                    {cat.services.map((s) => (
                      <span key={s} className="text-sm text-foreground/60 flex items-center gap-2">
                        <span className="text-foreground/25 shrink-0">–</span>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={["mobile-app-development", "ai-b2b-lead-generation"].includes(cat.id) ? "/contact" : `/${cat.id}`}
                  className="group pt-1 flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-200"
                >
                  {["mobile-app-development", "ai-b2b-lead-generation"].includes(cat.id) ? "Get in touch" : "Learn more"}
                  <ArrowUpRight size={14} weight="bold" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized */}
      <section className="px-4 lg:px-16 py-16 md:py-24 bg-secondary/40 border-y border-border">
        <div className="container max-w-6xl mx-auto">
          <motion.div {...reveal()} className="mb-12">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Specialized Solutions</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Industry-specific capabilities</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {specialized.map((s, i) => (
              <motion.div key={s.title} {...reveal(0.06 + i * 0.06)} className="border-t border-border pt-6">
                <h3 className="font-bold tracking-tight mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 lg:px-16 py-20 md:py-28">
        <div className="container max-w-6xl mx-auto">
          <motion.div {...reveal()}>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Not sure what you need?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Tell us what&apos;s breaking down. We&apos;ll map it, scope it, and tell you exactly what to build. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/book-demo">
                <button className="rounded-full bg-foreground text-background font-semibold px-7 py-3.5 flex items-center gap-2 hover:opacity-80 active:scale-[0.97] transition-all duration-200 group">
                  Book a Free Consultation
                  <ArrowUpRight size={15} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="rounded-full border border-border text-foreground/60 font-medium px-7 py-3.5 hover:border-foreground/30 hover:text-foreground transition-all duration-200">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
