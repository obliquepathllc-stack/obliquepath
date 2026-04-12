"use client";

import { PageLayout } from "@/components/page-layout";
import { motion } from "framer-motion";
import { Code, Workflow, Layers, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CustomWebSolutionsPage() {
  const solutions = [
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Tailored web applications built specifically for your business needs",
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description:
        "Forms and processes that trigger actions and save manual steps",
    },
    {
      icon: Layers,
      title: "Integration Systems",
      description:
        "Connect your existing tools and create a unified business ecosystem",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description:
        "Fast, responsive websites that provide excellent user experience",
    },
  ];

  return (
    <PageLayout title="Custom Web Solutions">
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-foreground/80 mb-8"
            >
              Need a website that works smarter, not harder? We create websites
              with automation built-in. From online forms that trigger
              workflows to dynamic portals that save your team hours every week.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-foreground/70">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-16 border-t border-border/30">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4"
            >
              Ready to Build Something That Works for You?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-foreground/70 mb-8"
            >
              Tell us what you need. We will scope it, build it, and deploy it fast.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/book-demo">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold w-full sm:w-auto">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="font-semibold w-full sm:w-auto">
                  See Our Work
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
