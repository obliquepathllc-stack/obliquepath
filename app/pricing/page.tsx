"use client";

import { PageLayout } from "@/components/page-layout";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.15 as number },
  transition: { duration: 0.65, delay, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
});

const faqItems = [
  {
    question: "How do you determine the exact price for a project?",
    answer: "After an initial call where we map your operation and define scope, we provide a fixed quote. Price depends on complexity, number of integrations, and whether you need an automation suite or a full custom platform.",
  },
  {
    question: "Can I upgrade or change the scope after we start?",
    answer: "Yes. If your needs change mid-build, we'll scope the additions, quote them separately, and integrate them into the existing system. Nothing gets added without your approval first.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No hidden fees. Setup, onboarding, and training are included in all engagements. What we quote is what you pay.",
  },
  {
    question: "Do you offer discounts for non-profits or educational institutions?",
    answer: "Yes. We offer special pricing for non-profits, educational institutions, and early-stage startups. Get in touch with our team to discuss.",
  },
  {
    question: "What happens if I need more than what we initially scoped?",
    answer: "We scope extensions separately and quote them as additions to your existing engagement. Your core system keeps running while additions are built and integrated.",
  },
  {
    question: "How long does implementation typically take?",
    answer: "Simple automation builds typically go live in 4–6 weeks. Custom platforms run 4–5 months. We provide a specific timeline during scoping, before you commit.",
  },
];

const engagementTypes = [
  {
    title: "Automation Suite",
    tag: "Fastest Path to ROI",
    description: "We connect your existing tools and automate the flow between them. No new software to learn. Live in weeks.",
    includes: ["Booking, follow-up, or scheduling automation", "CRM or calendar integration", "SMS/email communication flows", "Setup, onboarding, and 30-day support"],
    timeline: "4–6 weeks to go live",
    pricing: "Fixed setup fee + low monthly retainer",
  },
  {
    title: "Custom Platform",
    tag: "Built to Scale",
    description: "A full operating system for your operation. Built around your workflow, your rates, and your clients.",
    includes: ["Custom dashboard and data management", "Role-based access and multi-user support", "Integrations with your existing tools", "Full automation layer built in from day one"],
    timeline: "4–5 months to go live",
    pricing: "Scoped per engagement. Contact us for a quote.",
  },
];

export default function PricingPage() {
  return (
    <PageLayout
      title="Pricing"
      subtitle="We scope every build before quoting. No surprises, no hidden fees."
    >

      {/* Engagement types */}
      <section className="px-4 lg:px-16 py-16 md:py-24">
        <div className="container max-w-6xl mx-auto">
          <motion.div {...reveal()} className="mb-12">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Two Ways to Work With Us</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Start where you are. Scale when you&apos;re ready.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {engagementTypes.map((type, i) => (
              <motion.div
                key={type.title}
                {...reveal(0.08 + i * 0.08)}
                className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-[0_2px_16px_-6px_rgba(0,0,0,0.07)] flex flex-col gap-6"
              >
                <div>
                  <span className="text-[10px] tracking-[0.18em] uppercase font-medium text-primary border border-primary/20 bg-primary/5 rounded-full px-3 py-1">
                    {type.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-medium mb-3">What&apos;s included</p>
                  <ul className="space-y-2">
                    {type.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border pt-5 mt-auto flex flex-col gap-1">
                  <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Timeline:</span> {type.timeline}</p>
                  <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Pricing:</span> {type.pricing}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal(0.2)} className="mt-6 text-center">
            <Link href="/book-demo">
              <button className="rounded-full bg-primary text-primary-foreground font-semibold px-8 py-3.5 inline-flex items-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all duration-200 group">
                Get a Free Quote
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 lg:px-16 py-16 md:py-24 bg-secondary/40 border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <motion.div {...reveal()} className="mb-12">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Common questions</h2>
          </motion.div>

          <motion.div {...reveal(0.08)} className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 lg:px-16 py-16 md:py-28">
        <div className="container max-w-6xl mx-auto">
          <motion.div {...reveal()} className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Book a free consultation. We&apos;ll map your operation, scope the build, and give you a clear answer on cost and timeline. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/book-demo">
                <button className="rounded-full bg-primary text-primary-foreground font-semibold px-7 py-3.5 flex items-center gap-2.5 hover:opacity-90 active:scale-[0.97] transition-all duration-200 group">
                  Book a Free Consultation
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="rounded-full border border-border text-foreground/70 font-medium px-7 py-3.5 hover:border-primary/40 hover:text-foreground transition-all duration-200">
                  Contact Sales
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </PageLayout>
  );
}
