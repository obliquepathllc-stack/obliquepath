"use client";

// Final CTA — full-width editorial closing section

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

export function FinalCTA() {
  return (
    <section className="px-4 lg:px-16 py-24 md:py-40">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-12 md:p-16 shadow-[0_8px_48px_-12px_rgba(0,0,0,0.1)]"
        >
          {/* Ambient orbs */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/[0.12] rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accent-500/[0.09] rounded-full blur-[70px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-6">
              Get Started
            </p>
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.025em] leading-[0.93] mb-5">
              Ready to replace the manual work?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Tell us what&apos;s broken. We&apos;ll scope it, price it, and build it.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/book-demo">
                <button className="rounded-full bg-foreground text-background font-semibold px-8 py-4 flex items-center gap-2.5 hover:opacity-90 hover:shadow-[0_8px_40px_-6px_oklch(0.62_0.18_280_/_0.45)] active:scale-[0.98] transition-all duration-300 group w-full sm:w-auto justify-center">
                  Book a Strategy Call
                  <ArrowUpRight size={15} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="rounded-full border border-border text-foreground/70 font-medium px-8 py-4 hover:border-primary/40 hover:text-foreground transition-all duration-200 w-full sm:w-auto">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
