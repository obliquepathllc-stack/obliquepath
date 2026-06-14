"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
  Phone,
  Zap,
} from "lucide-react";

const problems = [
  {
    title: "Your team is doing the same work twice",
    body: "Data entered in one system gets re-entered in another. Leads fall through the cracks between tools. Nothing talks to anything.",
  },
  {
    title: "Humans are doing jobs machines should do",
    body: "Sending reminders, copying form responses, generating invoices, triaging support requests. None of it needs a person. All of it is taking their time.",
  },
  {
    title: "You grew, but your operations didn't",
    body: "The process that worked at 5 people breaks at 15. You're hiring to keep up instead of building systems that scale.",
  },
];

const solutions = [
  {
    icon: Phone,
    title: "AI Voice & Chat Agents",
    description:
      "Agents that answer calls, qualify leads, handle FAQs, book appointments, and escalate the right things — 24/7. No hold times. No missed calls after hours.",
    examples: ["Inbound call handling", "Lead qualification", "Appointment booking", "After-hours coverage"],
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Connect your tools and eliminate the manual steps in between. When a form is submitted, a trigger fires — not a person. When a shift is worked, an invoice drafts itself.",
    examples: ["Form → CRM → invoice pipelines", "Shift confirmation workflows", "Lead follow-up sequences", "Document generation"],
  },
  {
    icon: MessageSquare,
    title: "Intake & Triage Systems",
    description:
      "Stop triaging manually. AI classifies incoming requests, routes them to the right team or queue, and escalates anything time-sensitive before it gets missed.",
    examples: ["Support ticket classification", "Maintenance request triage", "New client intake flows", "Complaint routing"],
  },
  {
    icon: FileText,
    title: "Document & Invoice Automation",
    description:
      "Contracts, timesheets, invoices, compliance docs — all generated automatically from data already in your system. No copying. No formatting. No chasing.",
    examples: ["Invoice generation from logged hours", "Contract templates on approval", "Monthly statement creation", "Compliance reporting"],
  },
];

const results = [
  { stat: "14hrs", label: "saved per week", context: "Healthcare staffing agency" },
  { stat: "70%", label: "fewer no-shows", context: "Cleaning service, Windsor ON" },
  { stat: "80%", label: "inquiries handled by AI", context: "Property management company" },
  { stat: "60%", label: "less scheduling time", context: "Junk removal operation" },
];

const process = [
  {
    step: "01",
    title: "Map your operation",
    body: "We spend 30 minutes understanding your workflow — where time goes, where things break, what your team repeats every day.",
  },
  {
    step: "02",
    title: "Identify the highest-value automation",
    body: "Not everything should be automated. We find the one or two processes where automation pays off fastest and build those first.",
  },
  {
    step: "03",
    title: "Build and connect",
    body: "We build the automation system and connect it to your existing tools — your CRM, your scheduling software, your inbox, your phone system.",
  },
  {
    step: "04",
    title: "You run leaner",
    body: "Your team stops doing the repetitive work. The system handles it. You handle the part that actually needs a human.",
  },
];

const faqs = [
  {
    q: "Do I need to replace my existing software?",
    a: "Almost never. We build automation on top of what you already use. The goal is to connect and extend your tools, not replace them.",
  },
  {
    q: "How long does it take to build?",
    a: "Most automation systems go live in 2 to 6 weeks depending on complexity. We scope it precisely before we start so there are no surprises.",
  },
  {
    q: "Is this only for large businesses?",
    a: "No. Most of our clients have between 5 and 50 people. Small and mid-sized businesses often have the most to gain because they can't afford to throw headcount at the problem.",
  },
  {
    q: "What cities and regions do you serve?",
    a: "We work remotely with businesses across Windsor, London, Toronto, and Ontario broadly, as well as clients in Michigan, Illinois, and across North America. If your operation is digital enough to automate, location doesn't matter.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Healthcare staffing agencies, property management companies, cleaning services, trades businesses, recruiting firms, and any operation where coordinators spend hours on repetitive tasks.",
  },
];

export function AIAutomationContent() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="pt-36 pb-20 px-4 lg:px-16 bg-gradient-to-b from-primary/[0.04] to-transparent">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-widest uppercase text-foreground/50 mb-5">AI Automation — Windsor, Ontario & Beyond</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Stop Running Your Business<br className="hidden md:block" />
              <span className="gradient-text"> on Manual Work</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/65 max-w-3xl mb-8 leading-relaxed">
              We build AI automation systems that handle your repetitive operations — intake, scheduling, invoicing, follow-up, customer service — so your team can do the work that actually needs them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full hover:bg-primary/90 transition-colors"
              >
                Book a Free Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-6 py-3.5 rounded-full hover:bg-accent transition-colors"
              >
                See What We've Built
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results bar */}
      <section className="py-12 px-4 lg:px-16 border-y border-border/40">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl font-black gradient-text leading-none tracking-tighter mb-1">{r.stat}</div>
                <div className="text-sm text-foreground/70 font-medium">{r.label}</div>
                <div className="text-[11px] text-muted-foreground mt-1">{r.context}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 lg:px-16">
        <div className="container max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-foreground/50 mb-4">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl leading-snug">
            Most small and mid-sized businesses are running on processes that don&apos;t scale.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border/50 rounded-2xl p-6"
              >
                <h3 className="font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-foreground/65 text-[15px] leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 lg:px-16 bg-card/40">
        <div className="container max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-foreground/50 mb-4">What We Build</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 max-w-2xl leading-snug">
            AI automation systems built for your operation
          </h2>
          <p className="text-foreground/60 mb-12 max-w-2xl">
            We don&apos;t sell software. We build custom automation that fits your specific workflow — in Windsor, Toronto, Michigan, or wherever your business runs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border/50 rounded-2xl p-7"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-foreground/65 text-[15px] leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2">
                  {s.examples.map((ex, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/60">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 lg:px-16">
        <div className="container max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-foreground/50 mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl leading-snug">
            From first call to running system in weeks, not months
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5"
              >
                <div className="text-4xl font-black gradient-text leading-none tracking-tighter shrink-0 w-10 pt-1">{p.step}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-foreground/65 text-[15px] leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 px-4 lg:px-16 bg-primary/[0.03] border-y border-primary/10">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-foreground/50 mb-4">Who This Is For</p>
              <h2 className="text-3xl font-bold mb-6 leading-snug">
                Built for businesses running on tight margins and coordinators who are maxed out
              </h2>
              <p className="text-foreground/65 leading-relaxed mb-6">
                Our clients are healthcare staffing agencies, property management companies, trades businesses, recruiting firms, cleaning operations, and any small to mid-sized business in Windsor, London, Toronto, Ontario, Michigan, or Illinois where the team is doing too much manually.
              </p>
              <p className="text-foreground/65 leading-relaxed">
                If your coordinators are spending hours on tasks that follow a predictable pattern — that&apos;s the work we automate. Most clients recover the project cost in under 90 days.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Healthcare staffing agencies",
                "Property management companies",
                "Cleaning and home services",
                "Trades and dispatch businesses",
                "Recruiting and placement firms",
                "Any operation where coordinators are maxed out",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-card border border-border/50 rounded-xl">
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case studies link */}
      <section className="py-16 px-4 lg:px-16">
        <div className="container max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-foreground/50 mb-4">Proof It Works</p>
          <h2 className="text-3xl font-bold mb-4 max-w-2xl leading-snug">
            Real automation systems. Real numbers.
          </h2>
          <p className="text-foreground/65 mb-8 max-w-xl">
            We don&apos;t share vague before/after stories. Each case study breaks down what we built, how it works, and exactly what changed.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full hover:bg-primary/90 transition-colors"
          >
            View All Case Studies
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 lg:px-16 bg-card/40">
        <div className="container max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-foreground/50 mb-4">Common Questions</p>
          <h2 className="text-3xl font-bold mb-10">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border-b border-border/50 pb-6"
              >
                <h3 className="font-bold text-base mb-2">{faq.q}</h3>
                <p className="text-foreground/65 text-[15px] leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 lg:px-16 text-center">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight leading-snug">
            Find out which process to automate first
          </h2>
          <p className="text-foreground/65 mb-8 leading-relaxed">
            30 minutes. We map your operation, identify the highest-value automation, and give you a real cost and timeline. No pitch. You decide if it makes sense.
          </p>
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-colors text-base"
          >
            Book Your Free Discovery Call
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-xs text-muted-foreground mt-4">Serving Windsor, London, Toronto, Ontario, Michigan, and beyond.</p>
        </div>
      </section>

    </main>
  );
}
