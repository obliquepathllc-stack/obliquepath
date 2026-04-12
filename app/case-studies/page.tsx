"use client";

import { useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Building,
  Truck,
  Clock,
  CheckCircle,
  BarChart,
  MessageSquare,
  Calendar,
  Star,
  CalendarCheck,
  Smile,
  Sparkles,
  Timer,
  Layers,
  TrendingUp,
  Droplets,
  ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CTA } from "@/components/shared/cta-links";
import Link from "next/link";
import Image from "next/image";

// ─── FILTER CONFIG ────────────────────────────────────────────────────────────
const FILTERS = [
  "All",
  "Fintech",
  "Healthcare & Staffing",
  "Agriculture & Aquaculture",
  "E-Commerce",
  "Technology & Operations",
  "Cleaning Services",
  "Insurance & Finance",
  "Waste & Removal",
];

// ─── CASE STUDIES DATA ────────────────────────────────────────────────────────
// Add new case studies below the existing three. Each entry needs a filterTag
// matching one of the FILTERS values above.

const caseStudies = [
  // ── EXISTING: Harbor One Capital ──────────────────────────────────────────
  {
    id: "harbor-one-capital",
    filterTag: "Insurance & Finance",
    title:
      "Harbor One Capital: Automated Follow-Ups That Doubled Policy Conversions",
    client: "Harbor One Capital",
    industry: "Insurance Brokerage",
    location: "Ontario, Canada",
    service: "Obliq Path – Lead Nurture Automation + CRM Integration",
    challenge:
      "Harbor One Capital's agents were overwhelmed with managing quotes, callbacks, and follow-ups. Many potential clients weren't hearing back fast enough, leading to missed sales and poor engagement.",
    solution: [
      "Instantly followed up with every inbound lead via SMS and email",
      "Scheduled automatic reminders for quotes and renewals",
      "Added leads into a centralized CRM with status tracking",
      "Allowed agents to focus on selling, not chasing",
    ],
    results: [
      { stat: "2×", description: "more closed policies", icon: BarChart },
      { stat: "75%", description: "increase in lead response speed", icon: Clock },
      { stat: "0", description: "leads left hanging", icon: CheckCircle },
      { stat: "10+", description: "hours/week reclaimed by agents", icon: Clock },
    ],
    timeframe: "within 6 weeks",
    testimonial:
      "It's like we finally have a digital assistant that never forgets. Obliq Path made our entire process smoother. Our conversion rate speaks for itself.",
    clientName: "Samuel Leye-Ige",
    clientTitle: "Managing Director, Harbor One Capital",
    ctaText: "Automate Your Follow-Ups",
    ctaLink: "/book-demo?service=lead-nurture",
    icon: Building,
    color: "bg-primary/10 text-primary",
    image: "/clients-web/harbour-one.jpg" as string | null,
    colorBlock: "",
  },

  // ── EXISTING: Junk Cycle ──────────────────────────────────────────────────
  {
    id: "junk-cycle",
    filterTag: "Waste & Removal",
    title: "Junk Cycle: Cutting Admin Time by 60% with AI-Powered Scheduling",
    client: "Junk Cycle",
    industry: "Junk Removal & Waste Services",
    location: "Winnipeg, Manitoba",
    service: "Obliq Path – Booking Automation + Client Reminders",
    challenge:
      "Junk Cycle was dealing with a high volume of manual booking requests via phone, text, and social media. Missed messages and scheduling overlaps were leading to lost jobs and operational headaches.",
    solution: [
      "Created an online booking form with real-time availability",
      "Set up automated SMS/email confirmations and reminders",
      "Synced all jobs with a shared team calendar for dispatch coordination",
    ],
    results: [
      { stat: "60%", description: "less time spent on scheduling and follow-ups", icon: Clock },
      { stat: "↓", description: "fewer no-shows and missed pickups", icon: Calendar },
      { stat: "↑", description: "smoother job flow and better team coordination", icon: Truck },
      { stat: "★★★★★", description: "more 5-star Google reviews", icon: Star },
    ],
    timeframe: "after 30 days",
    testimonial:
      "Before Obliq Path, we were juggling messages across five platforms. Now, everything just runs. Bookings come in, reminders go out, and we show up. Simple and solid.",
    clientName: "Daniel Olayiwola",
    clientTitle: "Owner, Junk Cycle",
    ctaText: "Streamline Your Bookings",
    ctaLink: "/book-demo?service=booking-automation",
    icon: Truck,
    color: "bg-accent/10 text-accent-200",
    image: "/clients-web/junck-cycle.jpg" as string | null,
    colorBlock: "",
  },

  // ── UPDATED: First Point Cleaners (was Immaculatus Cleaning) ──────────────
  {
    id: "first-point-cleaners",
    filterTag: "Cleaning Services",
    title: "First Point Cleaners: 70% Fewer No-Shows with Smart Scheduling",
    client: "First Point Cleaners",
    industry: "Cleaning Services",
    location: "Toronto, Ontario",
    service: "Obliq Path – Scheduling Automation + Client Communication",
    challenge:
      "First Point Cleaners faced daily scheduling chaos. Clients often forgot appointments, and admin staff spent hours rescheduling or confirming bookings manually. This led to missed jobs and operational downtime.",
    solution: [
      "Implemented an automated online booking system with live calendar sync",
      "Set up SMS/email confirmations and 24-hour appointment reminders",
      "Integrated client bookings with team schedules for dispatch optimization",
    ],
    results: [
      { stat: "70%", description: "reduction in client no-shows", icon: CalendarCheck },
      { stat: "65%", description: "increase in scheduling efficiency", icon: Clock },
      { stat: "24h", description: "saved per week in admin time", icon: Timer },
      { stat: "42%", description: "boost in customer satisfaction", icon: Smile },
    ],
    timeframe: "in the first month",
    testimonial:
      "The scheduling automation transformed our business. We've reduced no-shows by 70% and our team can focus on delivering exceptional service instead of administrative tasks.",
    clientName: "Maria Rodriguez",
    clientTitle: "Operations Director, First Point Cleaners",
    ctaText: "Upgrade Your Scheduling",
    ctaLink: "/book-demo?service=scheduling-automation",
    icon: Sparkles,
    color: "bg-emerald-50 text-emerald-800",
    image: "/clients-web/immaculatus-cleaning.jpg" as string | null,
    colorBlock: "",
  },

  // ── NEW: Aerrand ──────────────────────────────────────────────────────────
  {
    id: "aerrand",
    filterTag: "Technology & Operations",
    title:
      "Aerrand: Onboarding Automation That Runs Without Anyone Touching It",
    client: "Aerrand",
    industry: "Technology & Operations",
    location: "North America",
    service: "Onboarding Automation + Internal Workflow",
    challenge:
      "Aerrand's team was managing new user and staff onboarding manually, scattered across emails, spreadsheets, and disconnected tools. Internal workflows had no structure, creating bottlenecks and inconsistent experiences.",
    solution: [
      "Automated end-to-end onboarding sequence for new users and staff",
      "Built structured internal workflow system replacing manual handoffs",
      "Integrated communication triggers and status tracking across the operation",
      "Eliminated manual follow-up from the onboarding process",
    ],
    results: [
      { stat: "70%", description: "reduction in onboarding time", icon: Clock },
      { stat: "0", description: "manual follow-ups required post-automation", icon: CheckCircle },
      { stat: "100%", description: "consistent experience for every new user and staff", icon: CheckCircle },
      { stat: "↑", description: "team hours redirected from admin to core operations", icon: TrendingUp },
    ],
    timeframe: "after go-live",
    testimonial:
      "Oblique Path mapped our entire onboarding process and automated it end to end. What used to take our team days now runs without anyone touching it.",
    clientName: "",
    clientTitle: "Operations Lead, Aerrand",
    ctaText: "Automate Your Workflows",
    ctaLink: "/book-demo?service=automation",
    icon: Layers,
    color: "bg-violet-500/10 text-violet-600",
    image: null as string | null,
    colorBlock: "bg-gradient-to-br from-violet-500/20 to-purple-600/20",
  },

  // ── NEW: Growtt ───────────────────────────────────────────────────────────
  {
    id: "growtt",
    filterTag: "Fintech",
    title:
      "Growtt: Newsletter and Financial Reporting Fully Automated End to End",
    client: "Growtt",
    industry: "Fintech",
    location: "North America",
    service: "Newsletter Automation + Financial Reporting Dashboard",
    challenge:
      "Growtt's team was producing newsletters and financial reports manually, compiling data, formatting content, and distributing to their audience by hand. The process was time-consuming, inconsistent, and impossible to scale without adding headcount.",
    solution: [
      "Automated newsletter generation pipeline pulling from live content sources and delivering formatted output on schedule",
      "Built a fully automated financial reporting dashboard aggregating data in real time, no manual compilation",
      "Eliminated human touchpoints in both workflows end to end",
      "Reports and newsletters now generate and distribute automatically on a set cadence",
    ],
    results: [
      { stat: "100%", description: "newsletter and report generation fully automated", icon: CheckCircle },
      { stat: "Hours", description: "saved weekly on manual content and data compilation", icon: Clock },
      { stat: "On time", description: "consistent on-schedule delivery every cycle", icon: Timer },
      { stat: "↑", description: "team bandwidth freed for strategy and growth", icon: TrendingUp },
    ],
    timeframe: "within 4 weeks",
    testimonial:
      "What used to take hours of manual work every week now just happens. The newsletter goes out, the reports are ready. Automatically. Oblique Path built something we didn't think was possible this fast.",
    clientName: "",
    clientTitle: "Team Lead, Growtt",
    ctaText: "Automate Your Reporting",
    ctaLink: "/book-demo?service=automation",
    icon: TrendingUp,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "/clients-logo/growtt.png" as string | null,
    colorBlock: "",
  },

  // ── NEW: AQUAPROX AI ──────────────────────────────────────────────────────
  {
    id: "aquaprox-ai",
    filterTag: "Agriculture & Aquaculture",
    title:
      "AQUAPROX AI: Custom AI Dashboard for Predictive Aquaculture Operations",
    client: "AQUAPROX AI",
    industry: "Agriculture & Aquaculture",
    location: "North America",
    service: "Custom AI Dashboard — Predictive Analytics & Automated Monitoring",
    challenge:
      "AQUAPROX AI needed a centralized intelligence layer for aquaculture operations, combining live sensor data, manual inputs, and predictive analytics in one place. Existing tools couldn't handle the data complexity or deliver actionable insights in real time.",
    solution: [
      "Designed and built a fully custom AI-powered dashboard for aquaculture operations",
      "Integrated live sensor data streams with manual input for a complete operational picture",
      "Built predictive analysis engine surfacing insights based on historical and real-time data",
      "Automated notification and alert system triggering on anomalies, thresholds, and predictive flags",
      "Single interface for monitoring, analysis, and decision-making",
    ],
    results: [
      { stat: "Live", description: "real-time visibility across all operational data in one dashboard", icon: BarChart },
      { stat: "Early", description: "predictive alerts catching issues before they escalate", icon: CheckCircle },
      { stat: "↓", description: "significant reduction in reactive decision-making", icon: Clock },
      { stat: "↑", description: "operations team equipped to act on data, not just collect it", icon: TrendingUp },
    ],
    timeframe: "after deployment",
    testimonial:
      "Oblique Path built exactly what we needed: a system that takes sensor data, understands it, and tells us what's coming before it happens. The dashboard changed how we run our operation.",
    clientName: "",
    clientTitle: "Founder, AQUAPROX AI",
    ctaText: "Build Your Custom Dashboard",
    ctaLink: "/book-demo?service=custom-platform",
    icon: Droplets,
    color: "bg-blue-500/10 text-blue-600",
    image: "/clients-logo/aquaprox-africa.jpg" as string | null,
    colorBlock: "",
  },

  // ── NEW: Anitrous ─────────────────────────────────────────────────────────
  {
    id: "anitrous",
    filterTag: "E-Commerce",
    title:
      "Anitrous: Lead Follow-Up Automated So No Prospect Falls Through the Cracks",
    client: "Anitrous",
    industry: "E-Commerce",
    location: "Canada",
    service: "Lead Follow-Up Automation + CRM Integration",
    challenge:
      "Anitrous was losing potential customers to slow follow-up. Leads came in through multiple channels but had no structured response system, no CRM, no automation, no visibility into where prospects stood in the pipeline.",
    solution: [
      "Built automated lead follow-up sequences triggered immediately on new inquiry",
      "Integrated a CRM to centralize all leads with status tracking and history",
      "Set up multi-channel follow-up across email and SMS",
      "Created pipeline visibility so the team always knew where every prospect stood",
    ],
    results: [
      { stat: "<5 min", description: "automated response time (was hours)", icon: Clock },
      { stat: "Full", description: "lead pipeline visibility from first touch to close", icon: BarChart },
      { stat: "0", description: "leads falling through the cracks", icon: CheckCircle },
      { stat: "↑", description: "sales team focused on closing, not chasing", icon: TrendingUp },
    ],
    timeframe: "within 30 days",
    testimonial:
      "We were losing leads just because we couldn't follow up fast enough. Now every inquiry gets an immediate response and lands in our CRM automatically. It runs itself.",
    clientName: "",
    clientTitle: "Owner, Anitrous",
    ctaText: "Automate Your Lead Follow-Up",
    ctaLink: "/book-demo?service=lead-automation",
    icon: ShoppingBag,
    color: "bg-orange-500/10 text-orange-600",
    image: null as string | null,
    colorBlock: "bg-gradient-to-br from-orange-500/20 to-amber-600/20",
  },
];

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((s) => s.filterTag === activeFilter);

  return (
    <PageLayout
      title="Case Studies"
      subtitle="Real results from real businesses using our automation solutions"
    >
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg text-foreground/80">
              See how businesses like yours have transformed their operations
              and achieved remarkable results with Obliquepath&apos;s AI
              automation solutions.
            </p>
          </motion.div>

          {/* Industry filter tabs — scrollable on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-2 overflow-x-auto pb-3 mb-16 -mx-1 px-1"
            style={{ scrollbarWidth: "none" }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200",
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/50 text-foreground/70 border-border/50 hover:border-primary/40 hover:text-foreground"
                )}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Case Studies list */}
          <div className="space-y-32">
            {filtered.map((study, index) => (
              <motion.div
                key={study.id}
                id={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-6xl mx-auto"
              >
                {/* Header: meta + image/color block */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`w-16 h-16 rounded-2xl ${study.color} flex items-center justify-center mb-6`}
                    >
                      <study.icon className="h-8 w-8" />
                    </div>

                    {/* Industry tag */}
                    <span className="inline-block text-xs tracking-widest uppercase text-foreground/50 font-medium border border-border/50 rounded-full px-3 py-1 mb-4">
                      {study.filterTag}
                    </span>

                    <h2 className="text-3xl font-bold mb-6">{study.title}</h2>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Client</p>
                        <p className="font-medium">{study.client}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Industry</p>
                        <p className="font-medium">{study.industry}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Location</p>
                        <p className="font-medium">{study.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Service Used</p>
                        <p className="font-medium">{study.service}</p>
                      </div>
                    </div>
                  </div>

                  {/* Image or color block placeholder */}
                  <div
                    className={`relative rounded-xl overflow-hidden ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
                      {study.image ? (
                        <Image
                          src={study.image}
                          alt={study.client}
                          fill
                          className="object-contain w-full grayscale"
                        />
                      ) : (
                        <div
                          className={`absolute inset-0 ${study.colorBlock} flex items-center justify-center`}
                        >
                          <span className="text-2xl font-bold text-foreground/50 text-center px-4">
                            {study.client}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Challenge and Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                  <Card className="border border-border/50">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-primary" />
                        </div>
                        The Challenge
                      </h3>
                      <p className="text-foreground/80">{study.challenge}</p>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/50">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-accent" />
                        </div>
                        The Solution
                      </h3>
                      <ul className="space-y-2">
                        {study.solution.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-accent mt-1 shrink-0" />
                            <span className="text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Results */}
                <div className="mt-16">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <BarChart className="h-4 w-4 text-primary" />
                    </div>
                    The Results{" "}
                    <span className="text-foreground/60 font-normal">
                      ({study.timeframe})
                    </span>
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {study.results.map((result, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border/50 rounded-lg p-4 text-center"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <result.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-2xl font-bold mb-1">
                          {result.stat}
                        </div>
                        <div className="text-sm text-foreground/70">
                          {result.description}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-16 bg-card border border-border/50 rounded-xl p-6 md:p-8 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-xl" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent/5 rounded-tr-xl" />

                  <div className="relative">
                    <svg
                      className="absolute -top-6 -left-6 h-12 w-12 text-primary/10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.9999 9.00001C12.9999 9.00001 13.9999 9.50001 14.5999 10.2C15.1999 10.9 15.4999 11.9 15.4999 12.9C15.4999 14.4 14.5999 15.7 13.2999 16.3L13.7999 18H11.9999L11.6999 16.5C11.0999 16.4 10.4999 16.2 9.99992 15.8L10.4999 14.2C10.9999 14.5 11.4999 14.7 11.9999 14.7C12.8999 14.7 13.5999 13.9 13.5999 13C13.5999 12.1 12.8999 11.3 11.9999 11.3C11.0999 11.3 10.3999 12.1 10.3999 13H8.49992C8.49992 11.9 8.89992 10.9 9.59992 10.2C10.1999 9.50001 11.0999 9.00001 11.9999 9.00001ZM5.99992 9.00001C6.99992 9.00001 7.99992 9.50001 8.59992 10.2C9.19992 10.9 9.49992 11.9 9.49992 12.9C9.49992 14.4 8.59992 15.7 7.29992 16.3L7.79992 18H5.99992L5.69992 16.5C5.09992 16.4 4.49992 16.2 3.99992 15.8L4.49992 14.2C4.99992 14.5 5.49992 14.7 5.99992 14.7C6.89992 14.7 7.59992 13.9 7.59992 13C7.59992 12.1 6.89992 11.3 5.99992 11.3C5.09992 11.3 4.39992 12.1 4.39992 13H2.49992C2.49992 11.9 2.89992 10.9 3.59992 10.2C4.19992 9.50001 4.99992 9.00001 5.99992 9.00001Z" />
                    </svg>

                    <blockquote className="text-xl md:text-2xl font-medium text-foreground/90 mb-6">
                      &quot;{study.testimonial}&quot;
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <study.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        {study.clientName && (
                          <p className="font-bold">{study.clientName}</p>
                        )}
                        <p className="text-foreground/60">{study.clientTitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                  <Link href={study.ctaLink}>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      {study.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                {/* Divider (except for last item) */}
                {index < filtered.length - 1 && (
                  <div className="mt-16 border-t border-border/30 w-1/2 mx-auto" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Industry Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-24 border-t border-border/30 pt-16"
          >
            <p className="text-xs tracking-widest uppercase text-foreground/50 mb-4">
              Industry Solutions
            </p>
            <h2 className="text-2xl font-bold mb-8">
              Built for Specific Operations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              <Link href="/healthcare">
                <div className="border border-border/50 rounded-xl p-6 bg-card/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 flex flex-col gap-3 group">
                  <h3 className="text-base font-semibold">
                    Healthcare Staffing Automation
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    Timesheet intake, invoicing, scheduling, and compliance,
                    automated end-to-end for healthcare staffing agencies.
                  </p>
                  <span className="text-sm text-primary flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                    See the full solution{" "}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-24 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-foreground/70 mb-8">
              Book a free consultation to discuss how we can help your business
              automate processes and boost efficiency.
            </p>

            <CTA
              align="center"
              primaryText="Book a Free Consultation"
              primaryLink="/book-demo"
              secondaryText="View Pricing"
              secondaryLink="/pricing"
            />
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
