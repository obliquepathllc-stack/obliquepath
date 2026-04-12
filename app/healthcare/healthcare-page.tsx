"use client";

// /healthcare — Healthcare Staffing Automation page
// Does NOT use PageLayout — hero is fully custom (matches homepage pattern)
// Sections:
//   1. HERO
//   2. THE PROBLEM
//   3. TWO PATHS (Automation Suite / Custom Platform)
//   4. HOW IT WORKS (automation flow)
//   5. RESULTS (metrics)
//   6. WHO THIS IS FOR
//   7. PLATFORM (anchor: #platform)
//   8. FINAL CTA

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TechBackground } from "@/components/tech-background";
import { FloatingElements } from "@/components/floating-elements";
import { MouseSpotlight } from "@/components/mouse-spotlight";
import { ScrollWatcher } from "@/components/scroll-watcher";
import { variants } from "@/lib/motion-variants";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  ShieldCheck,
  Calculator,
  FileCheck,
  ScrollText,
  MapPin,
  LayoutDashboard,
  Users,
  Receipt,
  ListChecks,
} from "lucide-react";

// ─── Section label helper ─────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-widest uppercase text-foreground/50 mb-4">
      {children}
    </p>
  );
}

// ─── 1. HERO ──────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-bold leading-tight tracking-tight"
          >
            Your Staffing Agency Is Running on Manual Work.{" "}
            <span className="gradient-text">That Ends Here.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-foreground/60 max-w-3xl"
          >
            We build automation systems and custom platforms that handle
            timesheet intake, scheduling, invoicing, and compliance reporting —
            so your team stops chasing paper and starts placing people.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
              >
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            {/* Scrolls to #platform section on this page */}
            <a href="#platform">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View the Platform
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-foreground/50"
          >
            Built for independent agencies and multi-location staffing
            operations across North America.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. THE PROBLEM ───────────────────────────────────────────────────────────
const painPoints = [
  {
    title: "Timesheet Chaos",
    description:
      "Shifts get worked. Timesheets come in late, incomplete, or wrong. Someone manually checks every one. Invoices go out days late. Cash flow suffers.",
  },
  {
    title: "Scheduling Gaps",
    description:
      "Coordinators are on the phone and in their inbox all day covering shifts, confirming availability, and chasing confirmations. One missed message costs a placement.",
  },
  {
    title: "Invoicing Delays",
    description:
      "Pulling hours, applying rates, generating PDFs, sending to clients — it's a full-time job. And every delay in invoicing is a delay in getting paid.",
  },
];

function ProblemSection() {
  return (
    <section className="py-20 px-4 lg:px-16 bg-card/30 border-y border-border/30">
      <div className="container max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl"
        >
          Every Hour Your Team Spends on Admin Is an Hour Not Billing.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="border border-border/50 rounded-xl p-6 bg-background/50 flex flex-col gap-3"
            >
              <h3 className="text-base font-semibold">{point.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. TWO PATHS ─────────────────────────────────────────────────────────────
function TwoPathsSection() {
  return (
    <section className="py-20 px-4 lg:px-16">
      <div className="container max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionLabel>How We Work With You</SectionLabel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Start With Automation.{" "}
            <span className="gradient-text">Scale to a Full Platform.</span>
          </h2>
          <p className="text-foreground/60 text-base max-w-2xl">
            We offer two engagement models depending on where your agency is
            today. Both are built on the same infrastructure. Both deliver the
            same outcome: less manual work, faster invoicing, better visibility.
          </p>
        </motion.div>

        {/* The two cards — most important visual on this page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Card A — Automation Suite */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="border border-border/50 rounded-xl p-8 bg-card/50 flex flex-col gap-5"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs tracking-widest uppercase text-primary font-semibold border border-primary/30 bg-primary/5 rounded-full px-3 py-1">
                Fastest Path to ROI
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Done-For-You Automation
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                We connect your existing tools — intake forms, spreadsheets,
                email, invoicing software — and automate the flow between them.
                No new software to learn. Live in weeks, not months.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-foreground/40 mb-1">
                What&apos;s automated
              </p>
              {[
                "Timesheet intake and validation",
                "Rate card application and anomaly flagging",
                "Invoice generation and delivery",
                "Approval workflows and audit logging",
                "Client and staff notifications",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border/30 pt-4 flex flex-col gap-1">
              <p className="text-sm text-foreground/60">
                <span className="font-medium text-foreground">Timeline:</span>{" "}
                Typically live in 4–6 weeks
              </p>
              <p className="text-sm text-foreground/60">
                <span className="font-medium text-foreground">Pricing:</span>{" "}
                Fixed setup fee + low monthly retainer
              </p>
            </div>

            <Link href="/book-demo" className="mt-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full"
              >
                Get the Automation Suite
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Card B — Custom Platform */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border border-border/50 rounded-xl p-8 bg-primary/5 flex flex-col gap-5"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs tracking-widest uppercase text-foreground/60 font-semibold border border-border/50 bg-background/50 rounded-full px-3 py-1">
                Built for Scale
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                A Platform Built Around Your Operation
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                For agencies ready to replace spreadsheets and disconnected
                tools with a single system — we design and build a custom
                platform tailored to your workflow, your rates, and your
                clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-foreground/40 mb-1">
                What&apos;s included
              </p>
              {[
                "Geolocation clock-in/out for field staff",
                "Manager dashboard with real-time visibility",
                "Integrated CRM for clients and candidates",
                "Built-in invoice engine",
                "HR and compliance module",
                "Full audit trail",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border/30 pt-4 flex flex-col gap-1">
              <p className="text-sm text-foreground/60">
                <span className="font-medium text-foreground">Timeline:</span>{" "}
                Typically delivered in 4–5 months
              </p>
              <p className="text-sm text-foreground/60">
                <span className="font-medium text-foreground">Pricing:</span>{" "}
                Scoped per engagement — contact for a custom quote
              </p>
            </div>

            <Link href="/book-demo" className="mt-auto">
              <Button size="lg" variant="outline" className="w-full">
                Explore the Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. HOW IT WORKS ──────────────────────────────────────────────────────────
const flowSteps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Timesheet Intake",
    description:
      "Staff submit hours via a simple online form. No app install required.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Validation & Flagging",
    description:
      "AI checks submissions against scheduled hours, flags anomalies, and routes exceptions for review.",
  },
  {
    icon: Calculator,
    number: "03",
    title: "Rate Application",
    description:
      "Approved hours are matched to client rate cards automatically. No manual lookups.",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Invoice Generation",
    description:
      "A formatted invoice is generated and delivered to the client — same day, every time.",
  },
  {
    icon: ScrollText,
    number: "05",
    title: "Audit Logging",
    description:
      "Every action is logged with a full timestamp trail for compliance and reporting.",
  },
];

function HowItWorksSection() {
  return (
    <section className="py-20 px-4 lg:px-16 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionLabel>Under the Hood</SectionLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-14 max-w-2xl"
        >
          From Shift Worked to Invoice Sent — Automatically.
        </motion.h2>

        {/* Flow — horizontal on desktop with arrows, vertical stack on mobile */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {flowSteps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-row lg:flex-col items-start lg:items-stretch flex-1"
            >
              {/* Step card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex-1 border border-border/50 rounded-xl p-5 bg-card/50 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <step.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-foreground/30">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-sm font-semibold">{step.title}</h3>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow connector — visible on desktop only, hidden after last step */}
              {index < flowSteps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center px-2 shrink-0 self-center">
                  <ArrowRight className="h-4 w-4 text-foreground/20" />
                </div>
              )}

              {/* Vertical connector — visible on mobile only, hidden after last step */}
              {index < flowSteps.length - 1 && (
                <div className="lg:hidden flex items-center ml-5 my-1">
                  <div className="w-px h-6 bg-border/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. RESULTS ───────────────────────────────────────────────────────────────
const resultMetrics = [
  { value: "80%", label: "Reduction in manual timesheet processing time" },
  { value: "Same day", label: "Invoice turnaround (was 48+ hours)" },
  { value: "0", label: "Missed invoices after go-live" },
  { value: "<6 wks", label: "Time to first live deployment" },
];

function ResultsSection() {
  return (
    <section className="py-16 px-4 lg:px-16 bg-card/30 border-y border-border/30">
      <div className="container max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionLabel>Outcomes</SectionLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          What Agencies See in the First 60 Days
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {resultMetrics.map((metric, index) => (
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
          Based on active client engagements
        </motion.p>
      </div>
    </section>
  );
}

// ─── 6. WHO THIS IS FOR ───────────────────────────────────────────────────────
const checklistItems = [
  "You run a healthcare or home care staffing agency",
  "Your team processes timesheets manually every week",
  "Invoicing takes more than one business day",
  "You're managing rates and shifts across spreadsheets",
  "You're ready to stop duct-taping tools together",
];

function WhoThisIsForSection() {
  return (
    <section className="py-20 px-4 lg:px-16">
      <div className="container max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionLabel>Is This You</SectionLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          This Is Built For You If...
        </motion.h2>

        <div className="flex flex-col gap-4 max-w-2xl">
          {checklistItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-base text-foreground/80">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-sm text-foreground/50 max-w-2xl"
        >
          If you&apos;re placing staff and losing hours to admin — we built this
          for you.
        </motion.p>
      </div>
    </section>
  );
}

// ─── 7. PLATFORM (anchor: #platform) ─────────────────────────────────────────
const platformFeatures = [
  {
    icon: MapPin,
    title: "Geolocation Clock-In/Out",
    description:
      "Field staff clock in and out from their phone. GPS-verified. No hardware required.",
  },
  {
    icon: LayoutDashboard,
    title: "Manager Dashboard",
    description:
      "Real-time visibility into active shifts, pending timesheets, and outstanding invoices — in one place.",
  },
  {
    icon: Users,
    title: "Client & Candidate CRM",
    description:
      "Track placements, contracts, rates, and communication history for every client and candidate.",
  },
  {
    icon: Receipt,
    title: "Invoice Engine",
    description:
      "Generate, send, and track invoices from inside the platform. No third-party invoicing tool needed.",
  },
  {
    icon: ShieldCheck,
    title: "HR & Compliance Module",
    description:
      "Store credentials, certifications, and employment records. Get alerted before anything expires.",
  },
  {
    icon: ListChecks,
    title: "Full Audit Trail",
    description:
      "Every action logged. Every approval tracked. Built for compliance from day one.",
  },
];

function PlatformSection() {
  return (
    <section
      id="platform"
      className="py-20 px-4 lg:px-16 bg-card/30 border-t border-border/30"
    >
      <div className="container max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionLabel>The Platform</SectionLabel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 max-w-2xl">
            When You&apos;re Ready to Go Beyond Automation
          </h2>
          <p className="text-foreground/60 text-base max-w-2xl">
            The custom platform is a full operating system for your agency —
            built on the same automation foundation, extended with the tools
            your coordinators, managers, and clients actually need.
          </p>
        </motion.div>

        {/* 2×3 feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              viewport={{ once: true }}
              className="border border-border/50 rounded-xl p-6 bg-background/50 flex flex-col gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Platform scoping note + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-border/30 pt-10"
        >
          <p className="text-base text-foreground/60 max-w-md">
            The platform is scoped per engagement. No two agencies are identical
            — neither is the build.
          </p>
          <Link href="/book-demo" className="shrink-0">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
            >
              Talk to Us About the Platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 8. FINAL CTA ─────────────────────────────────────────────────────────────
function FinalCTASection() {
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
            Ready to Cut the Admin in Half?
          </h2>
          <p className="text-foreground/60 text-base md:text-lg mb-8">
            Tell us how your agency runs today. We&apos;ll show you exactly what
            we&apos;d automate — and what it costs.
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

// ─── ROOT COMPONENT ───────────────────────────────────────────────────────────
export function HealthcarePage() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBgVariant = (): "grid" | "particles" | "circuits" => {
    if (scrollY < 300) return "grid";
    if (scrollY < 1000) return "particles";
    return "circuits";
  };

  return (
    <>
      {/* Tech-inspired animated backgrounds — matches all other pages */}
      {mounted && (
        <div className="fixed inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={getBgVariant()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <TechBackground
                variant={getBgVariant()}
                density={isMobile ? "low" : "medium"}
                interactive={!isMobile}
              />
            </motion.div>
          </AnimatePresence>

          <FloatingElements count={isMobile ? 3 : 5} variant="mixed" opacity={0.3} />
          <MouseSpotlight disabled={isMobile} />
          <ScrollWatcher progressPosition="top" scrollToTopThreshold={300} />
        </div>
      )}
      <ScrollWatcher progressPosition="top" />

      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "tween", duration: 0.5 }}
      >
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. THE PROBLEM */}
        <ProblemSection />

        {/* 3. TWO PATHS */}
        <TwoPathsSection />

        {/* 4. HOW IT WORKS */}
        <HowItWorksSection />

        {/* 5. RESULTS */}
        <ResultsSection />

        {/* 6. WHO THIS IS FOR */}
        <WhoThisIsForSection />

        {/* 7. PLATFORM */}
        <PlatformSection />

        {/* 8. FINAL CTA */}
        <FinalCTASection />
      </motion.div>
    </>
  );
}
