"use client";

// FINAL CTA — homepage closing section
// Headline + subheadline + two buttons: Book a Strategy Call / Contact Us

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 px-4 lg:px-16 border-t border-border/30">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Replace the Manual Work?
          </h2>
          <p className="text-foreground/60 text-base md:text-lg mb-8">
            Tell us what&apos;s broken. We&apos;ll tell you what it takes to fix
            it — and we&apos;ll build it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
