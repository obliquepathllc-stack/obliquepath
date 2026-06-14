// Centralized case study data
// Each study has enriched before/after narrative + process steps for the full individual page

import {
  Building,
  Truck,
  Clock,
  CheckCircle,
  BarChart,
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
  HeartPulse,
  PhoneCall,
  Users,
  Phone,
  MessageSquare,
  Scale,
  FileText,
  Zap,
  Bot,
} from "lucide-react";

export type ResultItem = {
  stat: string;
  description: string;
  icon: React.ElementType;
};

export type PainPoint = {
  title: string;
  description: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type CaseStudy = {
  id: string;
  filterTag: string;
  liveDemoSection?: boolean;
  title: string;                // headline used on listing card
  client: string;
  industry: string;
  location: string;
  service: string;
  // Before/after narrative, used on the full individual page
  beforeHeadline: string;       // e.g. "Every week was the same chaos."
  beforeNarrative: string;      // vivid paragraph describing the daily problem
  painPoints: PainPoint[];      // 3 specific pain symptoms
  afterHeadline: string;        // e.g. "Now it just runs."
  afterNarrative: string;       // paragraph describing life after automation
  solution: string[];           // bullet list of what was built
  processSteps: ProcessStep[];  // step-by-step how it works
  results: ResultItem[];
  timeframe: string;
  testimonial: string;
  clientName: string;
  clientTitle: string;
  ctaText: string;
  ctaLink: string;
  icon: React.ElementType;
  image: string | null;
  pageUrl?: string;             // if set, card links here instead of /case-studies/[id]
};

export const FILTERS = [
  "All",
  "Healthcare & Staffing",
  "Fintech",
  "Agriculture & Aquaculture",
  "E-Commerce",
  "Technology & Operations",
  "Cleaning Services",
  "Insurance & Finance",
  "Waste & Removal",
  "Real Estate",
  "AI Automation",
  "Legal Services",
];

export const caseStudies: CaseStudy[] = [
  // ── Healthcare Staffing ────────────────────────────────────────────────────
  {
    id: "healthcare-staffing",
    filterTag: "Healthcare & Staffing",
    title: "Healthcare staffing agencies cut timesheet processing by 80% and hit same-day invoicing.",
    client: "Healthcare Staffing Agencies",
    industry: "Healthcare & Home Care Staffing",
    location: "North America",
    service: "Staffing Automation Suite + Custom Platform",
    beforeHeadline: "Every week was the same grind.",
    beforeNarrative:
      "Coordinators spent the first two days of every week chasing timesheets by phone and email. Staff submitted hours late, or wrong. Someone manually checked every submission against the schedule. Invoices were built by hand, sent days after they should have been, and sometimes missed entirely. Clients complained. Cash flow suffered. And the people who should have been placing candidates were stuck in admin.",
    painPoints: [
      {
        title: "Timesheet Chaos",
        description:
          "Shifts get worked. Timesheets come in late, incomplete, or wrong. Someone manually checks every one. Invoices go out days late. Cash flow suffers.",
      },
      {
        title: "Scheduling Gaps",
        description:
          "Coordinators are on the phone all day covering shifts, confirming availability, and chasing confirmations. One missed message costs a placement.",
      },
      {
        title: "Invoicing Delays",
        description:
          "Pulling hours, applying rate cards, generating PDFs, sending to clients, it's a full-time job. Every delay in invoicing is a delay in getting paid.",
      },
    ],
    afterHeadline: "Now shifts get worked and invoices go out the same day.",
    afterNarrative:
      "Staff submit hours through a simple online form, no app install, no training. The system validates against scheduled hours automatically, flags anything that looks off, applies the correct rate card, and generates a formatted invoice. By end of day, the client has it. Coordinators see everything in a real-time dashboard. Nothing falls through. Nothing gets missed.",
    solution: [
      "Automated timesheet intake and validation against scheduled hours",
      "AI anomaly flagging, exceptions routed for human review only",
      "Rate card application and same-day invoice generation and delivery",
      "Geolocation clock-in/out for field staff, no hardware required",
      "Full audit trail for compliance and reporting",
      "Optional: full custom platform with CRM, HR module, and integrated invoicing",
    ],
    processSteps: [
      { number: "01", title: "Timesheet Intake", description: "Staff submit hours via a simple online form. No app install required." },
      { number: "02", title: "Validation & Flagging", description: "System checks submissions against scheduled hours, flags anomalies, and routes exceptions for review." },
      { number: "03", title: "Rate Application", description: "Approved hours are matched to client rate cards automatically. No manual lookups." },
      { number: "04", title: "Invoice Generation", description: "A formatted invoice is generated and delivered to the client, same day, every time." },
      { number: "05", title: "Audit Logging", description: "Every action is logged with a full timestamp trail for compliance and reporting." },
    ],
    results: [
      { stat: "80%", description: "reduction in manual timesheet processing time", icon: Clock },
      { stat: "Same day", description: "invoice turnaround (was 48+ hours)", icon: Timer },
      { stat: "0", description: "missed invoices after go-live", icon: CheckCircle },
      { stat: "<6 wks", description: "time to first live deployment", icon: TrendingUp },
    ],
    timeframe: "within 60 days",
    testimonial:
      "We used to lose two full days every week just chasing timesheets and building invoices. Now the system handles all of it. Our team is actually placing people instead of doing paperwork.",
    clientName: "",
    clientTitle: "Operations Director, Healthcare Staffing Agency",
    ctaText: "See the Full Solution",
    ctaLink: "/healthcare",
    icon: HeartPulse,
    image: null,
    pageUrl: "/healthcare",
  },

  // ── Harbor One Capital ─────────────────────────────────────────────────────
  {
    id: "harbor-one-capital",
    filterTag: "Insurance & Finance",
    title: "Harbor One Capital doubled policy conversions in 6 weeks with automated follow-ups.",
    client: "Harbor One Capital",
    industry: "Insurance Brokerage",
    location: "Ontario, Canada",
    service: "Lead Nurture Automation + CRM Integration",
    beforeHeadline: "Leads were coming in, and disappearing.",
    beforeNarrative:
      "Agents at Harbor One were juggling quotes, callbacks, renewals, and new inquiries all at once, manually. Promising leads weren't hearing back fast enough. Callbacks were missed. Renewals slipped through. The team was busy but the conversion rate told a different story: too many people in the pipeline, not enough closing.",
    painPoints: [
      {
        title: "Slow Follow-Up",
        description: "New leads waited hours, sometimes days, for a response. In insurance, that delay costs deals.",
      },
      {
        title: "Missed Callbacks",
        description: "Agents tracked callbacks in their heads and in scattered notes. Things fell off the list.",
      },
      {
        title: "No Pipeline Visibility",
        description: "There was no central view of where each lead stood. Renewals were happening (or not happening) in someone's inbox.",
      },
    ],
    afterHeadline: "Every lead gets a response within minutes. Every time.",
    afterNarrative:
      "The moment a lead comes in, the system responds. SMS, email, or both. It schedules reminders for quotes and renewals automatically. Every lead lands in a centralized CRM with status tracking. Agents see exactly where every prospect is. They don't chase anymore, they just sell.",
    solution: [
      "Instant automated follow-up via SMS and email on every inbound lead",
      "Automatic reminders for outstanding quotes and upcoming renewals",
      "Centralized CRM with full lead status tracking and history",
      "Agent activity routing, no lead sits unassigned",
    ],
    processSteps: [
      { number: "01", title: "Lead Comes In", description: "A new inquiry hits via website, phone, or referral." },
      { number: "02", title: "Instant Response", description: "Automated SMS and email goes out within 2 minutes, every time, even at midnight." },
      { number: "03", title: "CRM Entry", description: "Lead is logged automatically with source, status, and assigned agent." },
      { number: "04", title: "Reminder Sequences", description: "Follow-up reminders trigger based on no-response windows. Nothing falls off." },
      { number: "05", title: "Renewal Tracking", description: "Upcoming renewals are flagged and agents are prompted to re-engage before expiry." },
    ],
    results: [
      { stat: "2×", description: "more closed policies", icon: BarChart },
      { stat: "75%", description: "increase in lead response speed", icon: Clock },
      { stat: "0", description: "leads left without a follow-up", icon: CheckCircle },
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
    image: "/clients-web/harbour-one.jpg",
  },

  // ── Junk Cycle ─────────────────────────────────────────────────────────────
  {
    id: "junk-cycle",
    filterTag: "Waste & Removal",
    title: "Junk Cycle cut admin time by 60% with AI-powered scheduling.",
    client: "Junk Cycle",
    industry: "Junk Removal & Waste Services",
    location: "Winnipeg, Manitoba",
    service: "Booking Automation + Client Reminders",
    beforeHeadline: "Bookings were coming from everywhere. Nothing was organized.",
    beforeNarrative:
      "Customers were texting, calling, messaging on Instagram, and emailing, all at the same time. Someone had to manually respond to all of it, check availability, confirm a time, then remember to remind them the day before. Scheduling overlaps happened. Jobs got double-booked. Staff showed up to addresses that had already been serviced. And when jobs went quiet, meaning a no-show, someone found out at the job site.",
    painPoints: [
      {
        title: "Multi-Channel Chaos",
        description: "Booking requests came through five different platforms. No central view, no system, no way to see it all at once.",
      },
      {
        title: "No-Shows With No Warning",
        description: "Clients forgot. No reminders went out. Staff arrived on-site to empty addresses.",
      },
      {
        title: "Scheduling Overlaps",
        description: "Manual booking with no real-time calendar meant double-bookings happened regularly.",
      },
    ],
    afterHeadline: "Bookings come in. Reminders go out. The team shows up and works.",
    afterNarrative:
      "Customers book online, pick a time from real availability, and get an automated confirmation immediately. The night before a job, they get a reminder. The dispatch calendar updates in real time. When a job is done, a review request goes out automatically. The team went from managing their schedule to just working it.",
    solution: [
      "Online booking form with live calendar availability",
      "Automated SMS and email booking confirmations",
      "24-hour appointment reminders to reduce no-shows",
      "Shared team dispatch calendar with real-time sync",
      "Post-job review request automation",
    ],
    processSteps: [
      { number: "01", title: "Customer Books", description: "Customer selects a date and time from live availability on the website or link." },
      { number: "02", title: "Confirmation Sent", description: "Automated confirmation goes to the customer and the job appears on the dispatch calendar instantly." },
      { number: "03", title: "Reminder Fires", description: "24-hour automated reminder reduces no-shows without anyone having to send it manually." },
      { number: "04", title: "Job Completed", description: "Team completes the job. No admin needed, it was already coordinated." },
      { number: "05", title: "Review Requested", description: "Automated review request goes to the customer post-job. 5-star reviews started climbing." },
    ],
    results: [
      { stat: "60%", description: "less time spent on scheduling and follow-ups", icon: Clock },
      { stat: "↓", description: "fewer no-shows and missed pickups", icon: Calendar },
      { stat: "↑", description: "smoother job flow and team coordination", icon: Truck },
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
    image: "/clients-web/junck-cycle.jpg",
  },

  // ── First Point Cleaners ───────────────────────────────────────────────────
  {
    id: "first-point-cleaners",
    filterTag: "Cleaning Services",
    title: "First Point Cleaners eliminated 70% of no-shows with smart scheduling.",
    client: "First Point Cleaners",
    industry: "Cleaning Services",
    location: "Toronto, Ontario",
    service: "Scheduling Automation + Client Communication",
    beforeHeadline: "Admin was eating half the day.",
    beforeNarrative:
      "Clients forgot appointments constantly. When they did, it wasn't just a missed job, it was a wasted trip, a blocked time slot, and an admin scrambling to reschedule. Staff spent hours every week confirming bookings by phone, manually updating the schedule, and trying to fill last-minute gaps. The cleaning never stopped but the admin never stopped either.",
    painPoints: [
      {
        title: "Constant No-Shows",
        description: "Clients forgot appointments without reminders. Staff arrived to no answer. Jobs had to be rebooked from scratch.",
      },
      {
        title: "Manual Confirmation Calls",
        description: "Staff spent hours every week calling clients to confirm upcoming appointments. Time that could go to cleaning.",
      },
      {
        title: "Dispatch Disorganization",
        description: "Without a live calendar sync, teams weren't always dispatched efficiently. Travel time was wasted, slots were missed.",
      },
    ],
    afterHeadline: "The schedule manages itself.",
    afterNarrative:
      "Clients now book online, get an immediate confirmation, and receive a 24-hour reminder automatically. The team's shared calendar updates in real time. No-shows dropped 70% in the first month. Dispatch is cleaner. Admin time went from hours to minutes. The operations director said it felt like they hired someone just to manage logistics, except there was no new hire.",
    solution: [
      "Automated online booking system with live calendar sync",
      "Immediate booking confirmations via SMS and email",
      "24-hour automated appointment reminders",
      "Shared team dispatch calendar with real-time updates",
      "Rescheduling flow for clients who need to move appointments",
    ],
    processSteps: [
      { number: "01", title: "Online Booking", description: "Client books a cleaning through the website or booking link, available 24/7." },
      { number: "02", title: "Instant Confirmation", description: "Client receives confirmation immediately. Appointment appears on the team calendar." },
      { number: "03", title: "Automated Reminder", description: "24-hour SMS reminder goes out automatically. Clients who need to reschedule do so without calling." },
      { number: "04", title: "Dispatch Coordination", description: "Team sees the day's jobs in one shared calendar. No double-bookings. No confusion." },
      { number: "05", title: "Job Complete", description: "Cleaning is done. Follow-up and satisfaction check goes out automatically." },
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
    image: "/clients-logo/first-point-cleaners.jpg",
  },

  // ── Aerrand ────────────────────────────────────────────────────────────────
  {
    id: "aerrand",
    filterTag: "Technology & Operations",
    title: "Aerrand's onboarding now runs end-to-end without anyone touching it.",
    client: "Aerrand",
    industry: "Technology & Operations",
    location: "North America",
    service: "Onboarding Automation + Internal Workflow",
    beforeHeadline: "Every new user or staff member meant hours of manual work.",
    beforeNarrative:
      "Onboarding was a series of manual handoffs, emails from one person, a spreadsheet update from another, a message in Slack asking what came next. There was no single source of truth. Steps got missed. New users had inconsistent experiences depending on who was handling it that week. And the internal team spent more time managing the process than running the business.",
    painPoints: [
      {
        title: "Scattered Handoffs",
        description: "Onboarding happened across emails, spreadsheets, and Slack. No one had a clear view of where any new user was in the process.",
      },
      {
        title: "Inconsistent Experience",
        description: "The quality of onboarding depended entirely on who was handling it. Some users were set up perfectly. Others were forgotten.",
      },
      {
        title: "Internal Bottlenecks",
        description: "Internal workflows had no structure. Tasks piled up waiting for someone to manually trigger the next step.",
      },
    ],
    afterHeadline: "New users get onboarded perfectly. Every time. Automatically.",
    afterNarrative:
      "Now when a new user or staff member is added, the entire onboarding sequence triggers automatically. Welcome communications, access setup, task assignments, follow-up check-ins, all of it happens in order, on schedule, without anyone managing it. The internal team monitors from a dashboard. The process just runs.",
    solution: [
      "Automated end-to-end onboarding sequence for new users and staff",
      "Structured internal workflow system replacing manual handoffs",
      "Communication triggers and status tracking across the full operation",
      "Dashboard visibility so the team can monitor without managing",
      "Eliminated manual follow-up from the onboarding process entirely",
    ],
    processSteps: [
      { number: "01", title: "New User Added", description: "A new user or staff member is registered in the system." },
      { number: "02", title: "Welcome Sequence", description: "Automated welcome communications go out immediately, email, instructions, next steps." },
      { number: "03", title: "Access & Setup", description: "Required access and configurations are triggered automatically based on role." },
      { number: "04", title: "Task Routing", description: "Internal tasks are assigned and tracked. No manual handoffs between team members." },
      { number: "05", title: "Check-In & Confirmation", description: "Automated check-in at day 3 and day 7. Issues flagged. Nothing slips through." },
    ],
    results: [
      { stat: "70%", description: "reduction in onboarding time", icon: Clock },
      { stat: "0", description: "manual follow-ups required post-automation", icon: CheckCircle },
      { stat: "100%", description: "consistent experience for every new user", icon: CheckCircle },
      { stat: "↑", description: "team hours redirected to core operations", icon: TrendingUp },
    ],
    timeframe: "after go-live",
    testimonial:
      "Oblique Path mapped our entire onboarding process and automated it end to end. What used to take our team days now runs without anyone touching it.",
    clientName: "",
    clientTitle: "Operations Lead, Aerrand",
    ctaText: "Automate Your Workflows",
    ctaLink: "/book-demo?service=automation",
    icon: Layers,
    image: null,
  },

  // ── Growtt ─────────────────────────────────────────────────────────────────
  {
    id: "growtt",
    filterTag: "Fintech",
    title: "Growtt's newsletter and financial reporting now run fully automated.",
    client: "Growtt",
    industry: "Fintech",
    location: "North America",
    service: "Newsletter Automation + Financial Reporting Dashboard",
    beforeHeadline: "Every report and every newsletter was a project.",
    beforeNarrative:
      "The team was pulling data manually from multiple sources, formatting it, writing copy, building the layout, checking it, then sending it, every single week. Financial reports meant someone spending half a day compiling numbers into a spreadsheet, formatting a PDF, and distributing it. Every cycle was repeatable, predictable, and completely unnecessary to do by hand. But it had to happen, so it consumed people.",
    painPoints: [
      {
        title: "Manual Data Compilation",
        description: "Every report started with someone pulling numbers from multiple places by hand. Hours of work before any analysis happened.",
      },
      {
        title: "Inconsistent Delivery",
        description: "Reports and newsletters went out when someone had time to send them, not on a reliable schedule.",
      },
      {
        title: "Scaling Problem",
        description: "More content meant more manual work. The process couldn't grow without growing the team.",
      },
    ],
    afterHeadline: "The newsletter goes out. The reports are ready. Nobody sent them.",
    afterNarrative:
      "Content pipelines pull from live sources automatically. Reports aggregate in real time. On schedule, the newsletter generates and goes to subscribers. On schedule, financial reports are compiled and distributed. The team stopped producing content and started directing it. Hours freed every week, consistently, without any human in the loop.",
    solution: [
      "Automated newsletter generation pipeline pulling from live content sources",
      "Scheduled delivery, formatted and distributed on cadence without manual intervention",
      "Real-time financial reporting dashboard aggregating data automatically",
      "Eliminated human touchpoints in both workflows end to end",
      "Reporting and newsletter frequency now fully decoupled from team bandwidth",
    ],
    processSteps: [
      { number: "01", title: "Content Sourced", description: "Pipeline pulls from live content feeds, financial systems, and data sources automatically." },
      { number: "02", title: "Report Generated", description: "Financial data is aggregated, formatted, and assembled into the report template, no manual compilation." },
      { number: "03", title: "Newsletter Built", description: "Content is assembled, formatted, and reviewed-ready without anyone building it." },
      { number: "04", title: "Scheduled Delivery", description: "Newsletter and reports distribute on schedule, every cycle, without anyone pressing send." },
      { number: "05", title: "Analytics Captured", description: "Open rates, engagement, and financial metrics feed back into the dashboard automatically." },
    ],
    results: [
      { stat: "100%", description: "newsletter and report generation automated", icon: CheckCircle },
      { stat: "Hours", description: "saved weekly on manual content compilation", icon: Clock },
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
    image: "/clients-logo/growtt.png",
  },

  // ── AQUAPROX AI ────────────────────────────────────────────────────────────
  {
    id: "aquaprox-ai",
    filterTag: "Agriculture & Aquaculture",
    title: "AQUAPROX AI now predicts operational issues before they happen.",
    client: "AQUAPROX AI",
    industry: "Agriculture & Aquaculture",
    location: "North America",
    service: "Custom AI Dashboard. Predictive Analytics & Automated Monitoring",
    beforeHeadline: "Sensor data was everywhere. Insight was nowhere.",
    beforeNarrative:
      "The operation was producing data constantly, from sensors, from manual inputs, from monitoring equipment. But that data lived in disconnected places. No one had a unified view of what was happening across the operation in real time. Issues were caught reactively: something would fail or degrade, and then someone would trace it back. There was no system thinking ahead.",
    painPoints: [
      {
        title: "Data Without Context",
        description: "Sensor readings and manual inputs existed in separate systems. No one could see the full picture at once.",
      },
      {
        title: "Reactive Decision-Making",
        description: "Problems were caught after they happened. The team was always responding, never anticipating.",
      },
      {
        title: "No Actionable Intelligence",
        description: "Data was being collected but not interpreted. Numbers with no analysis don't help anyone make better decisions.",
      },
    ],
    afterHeadline: "The dashboard tells the operation what's coming, before it arrives.",
    afterNarrative:
      "Live sensor data and manual inputs feed into a single dashboard in real time. A predictive engine surfaces insights based on historical patterns and current readings, flagging anomalies, forecasting trends, and triggering alerts before issues escalate. The team doesn't react to problems anymore. They see them coming.",
    solution: [
      "Custom AI-powered dashboard designed and built for aquaculture operations",
      "Live sensor data integration combined with manual input for a full operational picture",
      "Predictive analysis engine surfacing insights from historical and real-time data",
      "Automated alert system triggering on anomalies, thresholds, and predictive flags",
      "Single interface for monitoring, analysis, and operational decision-making",
    ],
    processSteps: [
      { number: "01", title: "Data Ingestion", description: "Live sensor feeds and manual inputs flow into the central system in real time." },
      { number: "02", title: "Normalization", description: "Data is cleaned, structured, and unified, regardless of source format." },
      { number: "03", title: "Predictive Analysis", description: "The AI engine compares current readings against historical patterns to surface anomalies and forecasts." },
      { number: "04", title: "Alert Triggered", description: "When a threshold or predictive flag fires, the team is notified before the issue escalates." },
      { number: "05", title: "Dashboard Updated", description: "The central dashboard reflects real-time operational state, always current, always visible." },
    ],
    results: [
      { stat: "Live", description: "real-time visibility across all operational data", icon: BarChart },
      { stat: "Early", description: "predictive alerts before issues escalate", icon: CheckCircle },
      { stat: "↓", description: "reactive decision-making reduced significantly", icon: Clock },
      { stat: "↑", description: "operations team acting on data, not just collecting it", icon: TrendingUp },
    ],
    timeframe: "after deployment",
    testimonial:
      "Oblique Path built exactly what we needed: a system that takes sensor data, understands it, and tells us what's coming before it happens. The dashboard changed how we run our operation.",
    clientName: "",
    clientTitle: "Founder, AQUAPROX AI",
    ctaText: "Build Your Custom Dashboard",
    ctaLink: "/book-demo?service=custom-platform",
    icon: Droplets,
    image: "/clients-logo/aquaprox-africa.jpg",
  },

  // ── Anitrous ───────────────────────────────────────────────────────────────
  {
    id: "anitrous",
    filterTag: "E-Commerce",
    title: "Anitrous automated lead follow-up so no prospect falls through the cracks.",
    client: "Anitrous",
    industry: "E-Commerce",
    location: "Canada",
    service: "Lead Follow-Up Automation + CRM Integration",
    beforeHeadline: "Leads were coming in. They weren't converting.",
    beforeNarrative:
      "Inquiries were arriving through multiple channels, the website, social, email, but there was no system to handle them. Responses went out when someone had time to send them, which sometimes meant hours later. Some leads were followed up once and then forgotten. There was no CRM, no pipeline visibility, no way to know where a prospect stood unless someone remembered to check.",
    painPoints: [
      {
        title: "Slow Response Time",
        description: "Leads waited hours for a reply. By then, they'd already moved on, or gone to a competitor who responded faster.",
      },
      {
        title: "No Pipeline Visibility",
        description: "Without a CRM, the team had no clear view of where any prospect stood. Leads got forgotten between touchpoints.",
      },
      {
        title: "Inconsistent Follow-Up",
        description: "Follow-up happened manually, which meant it depended on who was available, how busy they were, and whether they remembered.",
      },
    ],
    afterHeadline: "Every lead gets a response in under 5 minutes. Every one.",
    afterNarrative:
      "The moment a new inquiry comes in, the automation fires. SMS, email, or both, depending on the channel. The lead lands in the CRM automatically with source, status, and history. Follow-up sequences run on schedule without anyone managing them. The sales team now spends time on closing, not chasing.",
    solution: [
      "Automated lead follow-up sequences triggered immediately on new inquiry",
      "Multi-channel response, email and SMS based on source",
      "CRM integration centralizing all leads with status, history, and assignment",
      "Pipeline visibility giving the team a clear view from first touch to close",
      "Escalation routing for high-intent signals",
    ],
    processSteps: [
      { number: "01", title: "Lead Arrives", description: "Inquiry comes in through website, social, or email." },
      { number: "02", title: "Instant Response", description: "Automated follow-up fires within 5 minutes, personalized to channel and inquiry type." },
      { number: "03", title: "CRM Entry", description: "Lead is logged automatically with source, timestamp, and initial status." },
      { number: "04", title: "Sequence Activated", description: "If no reply, follow-up sequence continues, timed, multi-touch, and non-intrusive." },
      { number: "05", title: "Pipeline Updated", description: "Every interaction updates the lead's status in the CRM. Team sees the full picture at all times." },
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
    image: null,
  },

  // ── Real Estate ────────────────────────────────────────────────────────────
  {
    id: "maher-aouli-realty",
    filterTag: "Real Estate",
    title: "Every lead responded to in 2 minutes. Every follow-up on schedule.",
    client: "Maher Aouli Realty",
    industry: "Real Estate & Property",
    location: "Windsor, ON",
    service: "AI Lead Nurture, Showing Automation & Listings Newsletter",
    beforeHeadline: "Leads were coming in. Most were going cold within 48 hours.",
    beforeNarrative:
      "Agents at Crestview were getting leads from their website, Realtor.ca, and referrals, but they were out showing properties when those inquiries came in. By the time anyone called back, the lead had already heard from a competing agent. No follow-up sequence existed beyond a first call attempt. CRM updates happened when someone remembered. The admin alone — scheduling, confirming, chasing — was consuming 3 to 4 hours per agent per day. A brokerage of five agents was operating like five solo operators with no shared system.",
    painPoints: [
      {
        title: "Lost to the first responder",
        description: "In real estate, response time is everything. Leads went cold in hours because agents were at showings when inquiries came in.",
      },
      {
        title: "No follow-up discipline",
        description: "Some leads got one call. Some got three. Nothing was systematic. Hot prospects from 3 months ago were simply forgotten.",
      },
      {
        title: "Admin consuming selling time",
        description: "Scheduling showings, sending confirmations, updating the CRM — agents were spending half their day on coordination instead of closing.",
      },
    ],
    afterHeadline: "A 5-agent brokerage now runs like a fully staffed operation.",
    afterNarrative:
      "Every lead, regardless of source, now gets a response within 2 minutes via SMS and email. A qualification sequence runs automatically, asking the right questions and scoring each lead before any agent touches it. Hot leads get flagged and routed with full context. A 60-day nurture sequence keeps warm leads engaged without any manual effort. Showings are booked through a self-serve scheduler linked directly to agent calendars. Past clients receive an automated newsletter whenever a new listing matches their saved area preferences — keeping Maher Aouli Realty top of mind without a single manual send. No CRM updates. No manual follow-ups. No chasing.",
    solution: [
      "Instant SMS and email response within 2 minutes of any inquiry, across all lead sources",
      "AI qualification chatbot on website — collects buyer timeline, budget, and property preferences",
      "CRM auto-populated from website, Realtor.ca, and referral form submissions",
      "60-day automated nurture sequence segmented by buyer vs. seller intent",
      "Self-serve showing scheduler linked to agent availability calendars",
      "Weekly pipeline digest delivered every Monday — no manual reporting",
      "Automated new listings newsletter sent to past clients filtered by their saved area preferences",
    ],
    processSteps: [
      { number: "01", title: "Lead Captured", description: "Inquiry comes in via website, Realtor.ca, or referral form — all routed into one system automatically." },
      { number: "02", title: "Instant Response", description: "Automated SMS and email sent within 2 minutes with a personalized intro and next-step prompt." },
      { number: "03", title: "AI Qualification", description: "Chatbot asks timeline, budget, and property type. Lead is scored and tagged before an agent sees it." },
      { number: "04", title: "Nurture Sequence", description: "60-day automated follow-up begins, segmented by buyer or seller intent. No manual effort required." },
      { number: "05", title: "Agent Routed", description: "Hot leads are flagged with full context. Agent calls with a warm prospect, not a cold one." },
      { number: "06", title: "Listings Newsletter", description: "Past clients automatically receive new listings matching their saved area preferences. No manual sending — the system monitors inventory and triggers the email." },
    ],
    results: [
      { stat: "3×", description: "lead-to-showing conversion rate", icon: TrendingUp },
      { stat: "2 min", description: "average first response time (was 4+ hours)", icon: Timer },
      { stat: "40%", description: "increase in closed deals within 90 days of launch", icon: BarChart },
      { stat: "22 hrs", description: "weekly admin time saved across the team", icon: Clock },
    ],
    timeframe: "5 weeks to go live",
    testimonial:
      "We were losing deals we didn't even know we had. A lead would come in at 2pm, I'd be at a showing, get back at 5pm and they'd already signed with someone else. Now every lead hears from us immediately, and the follow-up just keeps running on its own. Same 5 agents, completely different operation.",
    clientName: "Maher Aouli",
    clientTitle: "Broker, Maher Aouli Realty",
    ctaText: "Automate Your Lead Pipeline",
    ctaLink: "/book-demo?service=real-estate-automation",
    icon: Building,
    image: null,
  },

  // ── AI Voice Agent ─────────────────────────────────────────────────────────
  {
    id: "ai-voice-agent",
    filterTag: "AI Automation",
    liveDemoSection: true,
    title: "Every form fill gets a call back in 60 seconds. Qualified or not, the agent knows before they pick up the phone.",
    client: "Oblique Path",
    industry: "AI Voice Agent",
    location: "Windsor, ON",
    service: "Automated Lead Qualification — Live Demo Available",
    beforeHeadline: "Leads were filling out forms. Nobody was calling them back fast enough.",
    beforeNarrative:
      "Oblique Path built its AI voice agent to solve a problem every service business faces: leads go cold fast, and no team can respond to every form submission within minutes — especially after hours. The gap between form fill and first contact was costing deals. Businesses running paid ads were generating inquiries at all hours, but callbacks were happening the next morning at best. By then, the lead had already spoken to a competitor. And when agents did call, they had no context, so half the calls were wasted on people who didn't qualify.",
    painPoints: [
      {
        title: "Hours to first contact",
        description: "Leads go cold fast. Competitors who respond in minutes win the deal. A 2-hour callback might as well be no callback at all.",
      },
      {
        title: "Agents going in blind",
        description: "Every inbound call was a cold start. Agents had no context before picking up. Half the calls were with people who didn't qualify. That time never came back.",
      },
      {
        title: "No record of what was said",
        description: "Call notes were scattered, inconsistent, or missing. Handoffs between team members lost context. CRM updates happened when someone remembered — which wasn't often.",
      },
    ],
    afterHeadline: "The AI calls first. By the time an agent picks up the phone, the work is already done.",
    afterNarrative:
      "Now, when a lead submits a form at any hour, the Oblique Path AI voice agent calls within 60 seconds. It introduces itself, runs through a natural qualification conversation, collects the details that matter for your business, and scores the lead. All of that is logged directly to your CRM. Immediately after the call, the assigned agent receives a full transcript by email. Hot leads flagged for priority follow-up. Unqualified leads tagged and filed. Agents only speak to people who are ready. The system runs 24/7 with no human in the loop.",
    solution: [
      "AI voice agent calls every form submission within 60 seconds, day or night",
      "Conversational qualification tailored to your business — budget, timeline, fit criteria",
      "All responses logged to CRM automatically with lead score and category tag",
      "Full call transcript emailed to the assigned agent immediately after the call ends",
      "Hot leads flagged for priority follow-up; unqualified leads tagged and filed automatically",
      "Zero manual data entry — agents receive full context before they ever dial",
    ],
    processSteps: [
      { number: "01", title: "Form Submitted", description: "Lead fills out your inquiry form online via website, landing page, or ad campaign." },
      { number: "02", title: "AI Calls in 60s", description: "Voice agent calls the lead's phone within 60 seconds of submission, any time of day or night." },
      { number: "03", title: "Qualification Conversation", description: "AI runs through your qualification criteria in natural conversation — budget, timeline, fit, and any custom questions." },
      { number: "04", title: "CRM Logged", description: "All responses written to CRM automatically with lead score, category tag, and call timestamp." },
      { number: "05", title: "Transcript Sent", description: "Full call transcript emailed to the assigned agent the moment the call ends." },
      { number: "06", title: "Agent Follows Up", description: "Agent reads the transcript, already knows the prospect, and calls a warm qualified lead with full context." },
    ],
    results: [
      { stat: "60s", description: "from form fill to AI call, 24/7", icon: Timer },
      { stat: "3×", description: "more qualified leads reaching agents per week", icon: Users },
      { stat: "80%", description: "reduction in time spent on unqualified calls", icon: Phone },
      { stat: "24/7", description: "lead coverage including nights and weekends", icon: PhoneCall },
    ],
    timeframe: "4 weeks to go live",
    testimonial:
      "Our team used to dread inbound calls because half the time the person didn't even qualify. Now every call they take is someone who has already been screened. The AI does the hard part. We just close.",
    clientName: "",
    clientTitle: "Oblique Path AI Systems",
    ctaText: "Build Your Voice Agent",
    ctaLink: "/book-demo?service=ai-voice-agent",
    icon: PhoneCall,
    image: null,
  },

  // ── AI Chatbot ─────────────────────────────────────────────────────────────
  {
    id: "ai-chatbot",
    filterTag: "AI Automation",
    title: "A chatbot that qualifies visitors, captures leads, and books calls — 24/7, no human in the loop.",
    client: "Oblique Path",
    industry: "AI Lead Capture",
    location: "Windsor, ON",
    service: "AI Chat Widget — Live on obliquepath.dev",
    beforeHeadline: "Visitors were landing on the site. Most of them were leaving without a trace.",
    beforeNarrative:
      "Every business with a website has the same problem: people land, look around, and leave. If they have a question at 10pm, there is nobody to answer it. If they are not quite ready to book a call, there is no middle step — just a contact form they may or may not fill out. Oblique Path built its own AI chatbot to solve this exactly. The widget lives on the site, engages visitors within seconds, and moves them toward either booking a strategy call or leaving their contact details — whichever they are ready for.",
    painPoints: [
      {
        title: "Visitors leaving without converting",
        description: "Most website visitors are not ready to book a call on the first visit. Without a way to engage them in the moment, they leave and do not come back.",
      },
      {
        title: "No coverage after hours",
        description: "The best leads often come at night or on weekends when nobody is available. A static contact form does not qualify or engage — it just waits.",
      },
      {
        title: "No qualification before the call",
        description: "When someone does book, the team had no context going in. Every call started from zero. Time was spent on discovery that could have happened automatically.",
      },
    ],
    afterHeadline: "Every visitor gets engaged. Qualified leads arrive with context. The team only talks to people who are ready.",
    afterNarrative:
      "The Oblique Path AI chatbot opens within seconds of a visitor landing on the site. It asks what brought them in, works through a natural qualification conversation, and either guides them to book a strategy call or collects their name and email for follow-up. The team receives a notification with a summary of the conversation. By the time anyone picks up the phone, the visitor has already been qualified. The chatbot runs 24/7 with no supervision and is live on obliquepath.dev right now.",
    solution: [
      "AI chat widget embedded on the website — opens automatically and engages visitors",
      "Natural conversation flow: qualification, objection handling, and routing",
      "Captures name and email when the visitor is ready — no forced forms",
      "Detects buying signals and prompts the visitor to book a strategy call",
      "Team notification with conversation summary sent immediately on lead capture",
      "Runs 24/7 with no human in the loop — every visitor gets a response",
    ],
    processSteps: [
      { number: "01", title: "Visitor Lands", description: "Someone arrives on the website from an ad, search, or referral. The chat widget opens within a few seconds." },
      { number: "02", title: "AI Engages", description: "The bot asks what brought them in and starts a natural conversation about their business and what they are trying to solve." },
      { number: "03", title: "Qualification", description: "Through conversation, the AI determines whether the visitor is a fit — industry, problem, timeline, and intent." },
      { number: "04", title: "Lead Captured", description: "When the visitor shares their email, the AI logs the lead and sends the team a notification with a conversation summary." },
      { number: "05", title: "Booking Prompted", description: "Qualified visitors are guided toward booking a strategy call via a direct link embedded in the chat." },
      { number: "06", title: "Team Follows Up", description: "The team receives context before the call — who the visitor is, what they need, and what was discussed." },
    ],
    results: [
      { stat: "24/7", description: "lead capture with no human required", icon: Zap },
      { stat: "4 wks", description: "from brief to live on the website", icon: Timer },
      { stat: "0", description: "missed conversations after hours", icon: MessageSquare },
      { stat: "100%", description: "of leads arrive pre-qualified with context", icon: CheckCircle },
    ],
    timeframe: "4 weeks to go live",
    testimonial:
      "We built this on our own site first. Every lead that comes through the chatbot arrives with a conversation summary. We know exactly who they are before we pick up the phone.",
    clientName: "",
    clientTitle: "Oblique Path",
    ctaText: "Add a Chatbot to Your Site",
    ctaLink: "/book-demo?service=ai-chatbot",
    icon: Bot,
    image: null,
  },

  // ── Law Firm Intake ────────────────────────────────────────────────────────
  {
    id: "law-firm-intake",
    filterTag: "Legal Services",
    title: "Client intake routed automatically by practice area. Emergencies flagged instantly. Retainer signed before the first call.",
    client: "Law Firm",
    industry: "Legal Services",
    location: "North America",
    service: "Legal Intake Automation + Billing & Matter Management",
    beforeHeadline: "Every new client started with the same manual chaos.",
    beforeNarrative:
      "The intake process at most law firms runs on email, phone tag, and spreadsheets. A potential client submits a form or calls in. Someone on staff manually reviews it, figures out which practice area it belongs to, finds the right partner, and forwards it. If it is urgent, they hope someone notices in time. Retainer agreements are drafted by hand from intake notes — a process that takes hours and delays the first billable conversation. Billable hours are logged after the fact, often inaccurately, and reconciling them against invoices is a weekly headache. The result: slow intake, missed urgencies, and revenue that is harder to collect than it should be.",
    painPoints: [
      {
        title: "Manual routing and missed urgencies",
        description: "Staff were manually reading intake forms and deciding where to route them. Emergency matters — arrests, custody disputes, restraining orders — could sit in a queue for hours.",
      },
      {
        title: "Retainer process losing days",
        description: "Drafting retainer agreements by hand, chasing signatures by email, and waiting for documents to come back was delaying the start of every engagement.",
      },
      {
        title: "Billable hours not captured accurately",
        description: "Time was logged manually, often at the end of the day or week. Entries were vague, incomplete, or never linked to the right matter. Revenue was being left on the table.",
      },
    ],
    afterHeadline: "Intake is instant. Emergencies never wait. Retainers sign themselves. Hours track automatically.",
    afterNarrative:
      "Now, when a potential client submits an intake form online, the system reads the responses and routes it to the correct partner based on practice area — family law, corporate, criminal, personal injury, immigration. If the intake contains emergency signals, it fires an immediate alert to the on-call partner. The retainer agreement is generated automatically from the intake data, pre-filled with fee structure and matter details, and sent for e-signature within minutes. Staff log hours directly to matters through a simple interface, and every entry is automatically linked and tracked. A real-time dashboard shows every partner their billable hours, matter status, and outstanding invoices — updated live.",
    solution: [
      "Online intake form with practice area detection and intelligent routing to the correct partner",
      "Emergency flagging: custody, criminal, restraining order triggers fire instant partner alerts",
      "Retainer agreement auto-generated from intake data — fee structure, matter details, scope",
      "E-signature workflow sends retainer and tracks completion without manual follow-up",
      "Billable hours interface — staff log time directly to matter numbers, no manual reconciliation",
      "Real-time dashboard: active matters, billable hours by attorney, invoice status, collection rate",
    ],
    processSteps: [
      { number: "01", title: "Intake Form Submitted", description: "Potential client fills out the online intake form — practice area, matter description, urgency, and contact details." },
      { number: "02", title: "Auto-Routed to Partner", description: "System reads the intake and routes it to the correct partner by practice area. No staff involvement required." },
      { number: "03", title: "Emergency Escalation", description: "If the intake contains emergency signals — arrest, custody dispute, restraining order — an immediate alert fires to the on-call partner." },
      { number: "04", title: "Retainer Generated", description: "Retainer agreement is auto-generated from intake data, pre-filled with fee structure and matter scope." },
      { number: "05", title: "E-Signature Sent", description: "Agreement sent to client for e-signature automatically. System tracks completion and follows up if unsigned." },
      { number: "06", title: "Matter Opened, Hours Tracked", description: "Matter is created in the system. Staff log hours directly to the matter. Everything links automatically to billing." },
    ],
    results: [
      { stat: "90%", description: "reduction in manual intake processing time", icon: Timer },
      { stat: "0", description: "emergency matters missed or delayed", icon: Zap },
      { stat: "Same day", description: "retainer generation and e-signature dispatch", icon: FileText },
      { stat: "15+ hrs", description: "saved per attorney per week on admin", icon: Scale },
    ],
    timeframe: "6 weeks to go live",
    testimonial:
      "Intake used to take two days before we could even open a matter. Now the retainer is generated and sent before we have had our first call with the client. The emergency flagging alone has been worth it.",
    clientName: "",
    clientTitle: "Managing Partner, Law Firm",
    ctaText: "Automate Your Firm's Intake",
    ctaLink: "/book-demo?service=legal-intake",
    icon: Scale,
    image: null,
  },

  // ── HVAC Dispatch Automation ───────────────────────────────────────────────
  {
    id: "hvac-dispatch-automation",
    filterTag: "Technology & Operations",
    title: "An HVAC company automated dispatch, quotes, and seasonal scheduling. Same crew. Double the daily jobs.",
    client: "HVAC & Trades Service Company",
    industry: "Trades and Home Services",
    location: "Ontario, Canada",
    service: "Dispatch Automation + Quote-to-Invoice + Seasonal Scheduling",
    beforeHeadline: "Dispatch was a full-time job. In busy season, it was an impossible one.",
    beforeNarrative:
      "This HVAC company had eight technicians and one dispatcher managing a growing call volume. Every service call triggered a chain of manual steps: availability check, tech assignment, client confirmation, parts lookup, quote preparation, job completion logging, and invoice generation. In summer, with AC breakdowns coming in faster than they could be scheduled, the dispatcher was on the phone from 7am to 6pm just keeping up. Quotes sat unsent for days. Invoices went out late. The owner was doing three jobs at once and still dropping things.",
    painPoints: [
      {
        title: "Manual dispatch eating the dispatcher's day",
        description: "Every job required the dispatcher to manually check tech availability, make the assignment, call the client, confirm the slot, and log it all. At peak volume, this was physically unmanageable.",
      },
      {
        title: "Quotes delayed by hours or days",
        description: "After a service call, technicians called in job details verbally. The dispatcher typed them up, the owner reviewed and adjusted, and someone assembled the quote PDF. Clients were waiting.",
      },
      {
        title: "Seasonal capacity completely manual",
        description: "Maintenance contract reminders, seasonal tune-up scheduling, and filter replacement follow-ups all happened by hand, from a spreadsheet, when someone had time to look at it.",
      },
    ],
    afterHeadline: "Jobs dispatch themselves. Quotes leave the same day. Seasonal reminders run on autopilot.",
    afterNarrative:
      "When a service call comes in, the system checks technician availability and proximity, assigns the job, sends the client a confirmation with a two-hour arrival window, and notifies the tech on their phone. After the visit, the tech enters job details through a mobile form. A quote is generated from a standard rate library, reviewed with a single click, and sent to the client — all within 30 minutes of job completion. Seasonal maintenance reminders go out to every contract client on a preset schedule, with a one-tap booking link. The dispatcher now focuses entirely on escalations and complex jobs. Daily job volume doubled without adding headcount.",
    solution: [
      "Smart dispatch: availability check, proximity routing, and automatic job assignment",
      "Automated client confirmations with arrival window sent via SMS",
      "Technician mobile form: job details trigger quote generation from rate library",
      "One-click quote approval and automatic client delivery",
      "Seasonal maintenance scheduler: contract client reminders with self-booking link",
      "Job-to-invoice pipeline: approved quotes convert to invoices automatically",
    ],
    processSteps: [
      { number: "01", title: "Job Request In", description: "Customer calls or submits a service request online. System captures details and triggers dispatch." },
      { number: "02", title: "Auto-Dispatch", description: "Tech availability and proximity checked. Job assigned and confirmed. Client gets SMS confirmation with arrival window." },
      { number: "03", title: "Tech On Site", description: "Tech completes work and fills mobile form: time spent, parts used, job notes." },
      { number: "04", title: "Quote Generated", description: "System builds the quote from the job form and rate library. Owner reviews and approves in one click." },
      { number: "05", title: "Invoice and Collection", description: "Approved quote converts to invoice, sent to client automatically. Payment follow-up fires if unpaid after 7 days." },
      { number: "06", title: "Seasonal Reminders", description: "Contract clients receive maintenance reminders on preset schedule with self-booking link. No manual outreach needed." },
    ],
    results: [
      { stat: "2x", description: "daily job volume with same crew", icon: TrendingUp },
      { stat: "Same day", description: "quote delivery after job completion", icon: Timer },
      { stat: "85%", description: "reduction in dispatcher phone time", icon: Phone },
      { stat: "40%", description: "increase in maintenance contract renewals", icon: CheckCircle },
    ],
    timeframe: "8 weeks to full deployment",
    testimonial:
      "Last summer we would have needed to hire two more people to handle the volume we ran this year. We didn't hire anyone. The system just handled it.",
    clientName: "",
    clientTitle: "Owner, HVAC Service Company",
    ctaText: "Automate Your Service Operation",
    ctaLink: "/book-demo",
    icon: Zap,
    image: null,
  },

  // ── Recruiting Automation ─────────────────────────────────────────────────
  {
    id: "recruiting-automation",
    filterTag: "Technology & Operations",
    title: "A recruiting agency automated candidate outreach, client reporting, and follow-up. Placements up 35% in 90 days.",
    client: "Specialized Recruiting Agency",
    industry: "Recruiting and Talent Acquisition",
    location: "Toronto, ON",
    service: "Candidate Outreach Automation + CRM + Client Reporting",
    beforeHeadline: "The recruiters were spending more time on admin than on candidates.",
    beforeNarrative:
      "A specialized recruiting firm in Toronto was growing faster than its systems could support. Recruiters were manually reaching out to candidates via LinkedIn and email, logging responses by hand, chasing clients for job briefings, and spending Friday afternoons putting together weekly reports in Excel. Three of five working days were eaten by tasks that had nothing to do with actually finding or placing people. The pipeline was full but the conversion rate was declining because follow-up was slipping on both the candidate and client side.",
    painPoints: [
      {
        title: "Manual outreach and logging",
        description: "Recruiters were writing individual outreach messages, logging every response by hand, and tracking conversation status in a shared spreadsheet that was always out of date.",
      },
      {
        title: "Client reporting consuming Fridays",
        description: "Weekly status reports for clients required pulling data from four places, formatting it, and writing a summary. Three hours per client, every Friday, without fail.",
      },
      {
        title: "Follow-up falling through the cracks",
        description: "Candidates who did not respond to first outreach were supposed to get a second message at day 5. This happened manually, when someone remembered, which was not consistently.",
      },
    ],
    afterHeadline: "Outreach sequences run automatically. Reports generate themselves. Recruiters focus on conversations that matter.",
    afterNarrative:
      "Each recruiter now launches outreach campaigns from a template library. Messages go out on a defined schedule, with automatic follow-up at day 3 and day 7 if there is no response. Every response is logged to the CRM automatically. When a candidate moves to a new stage, a notification fires to the relevant client with a one-paragraph update. Weekly client reports are generated automatically from CRM data every Friday morning and delivered before anyone has opened their laptop. Recruiters spend their days talking to people, not managing spreadsheets.",
    solution: [
      "Multi-step outreach sequences with automatic follow-up at day 3 and day 7",
      "Response detection: replies update candidate status in CRM automatically",
      "Candidate pipeline with stage-based notifications to clients",
      "Automated weekly client reports generated from live CRM data",
      "Job briefing templates sent to clients when new roles are opened",
      "Placement pipeline dashboard with conversion rates by recruiter and role type",
    ],
    processSteps: [
      { number: "01", title: "Campaign Launch", description: "Recruiter selects role, candidate list, and outreach template. Campaign launches with one click." },
      { number: "02", title: "Outreach + Follow-Up", description: "Initial message goes out. Day 3 follow-up fires automatically for non-responders. Day 7 final touch if still no reply." },
      { number: "03", title: "Response Logged", description: "Any reply updates the candidate's CRM status automatically. Recruiter is notified and can take over the conversation." },
      { number: "04", title: "Client Updates", description: "When a candidate advances in the pipeline, an automated update goes to the client. No manual status emails." },
      { number: "05", title: "Weekly Report", description: "Every Friday at 7am, client reports are generated from CRM data and delivered by email. Zero manual effort." },
      { number: "06", title: "Placement Logged", description: "Confirmed placement triggers invoice generation and a 90-day check-in reminder for the guarantee window." },
    ],
    results: [
      { stat: "35%", description: "more placements in the first 90 days", icon: TrendingUp },
      { stat: "12hrs", description: "saved per recruiter per week on admin", icon: Clock },
      { stat: "3x", description: "more candidates reached per recruiter per month", icon: Users },
      { stat: "100%", description: "on-time client report delivery", icon: CheckCircle },
    ],
    timeframe: "5 weeks to go live",
    testimonial:
      "I was spending half my week on status updates and reports. Now I spend it on phone calls and placements. In three months we exceeded our annual target. I didn't realize how much the admin was costing us.",
    clientName: "",
    clientTitle: "Senior Recruiter, Specialized Recruiting Agency",
    ctaText: "Automate Your Recruiting Operation",
    ctaLink: "/book-demo",
    icon: Users,
    image: null,
  },

  // ── Property Management Automation ────────────────────────────────────────
  {
    id: "property-management-automation",
    filterTag: "Real Estate",
    title: "A property management company replaced manual leases, paper notices, and tenant calls with a fully automated operation. Admin hours down 65%.",
    client: "Residential Property Management Company",
    industry: "Residential Property Management",
    location: "Ontario, Canada",
    service: "Full Property Operations Automation — Leases, Payments, Eviction Notices, 24/7 Tenant AI",
    beforeHeadline: "Every tenant was a full-time job. Every month was a paper crisis.",
    beforeNarrative:
      "A property management company managing over 200 residential units was held together by three things: a shared email inbox, a spreadsheet that everyone edited, and a property manager answering her phone at 11pm. Leases were drafted manually in Word from templates that were two versions behind. Rent reminders went out when someone remembered to send them. Late notices were written individually, reviewed for accuracy, and served by hand. When a tenant crossed the 14-day line, drafting the formal notice required pulling the original lease, calculating the exact arrears, formatting the notice correctly, and serving it properly — or risk starting the process over at the tribunal. The tenant AI agent was a phone number that rang a person who was trying to sleep.",
    painPoints: [
      {
        title: "Lease generation was a manual drafting exercise",
        description: "Every new lease was assembled by hand from a Word template. Tenant name, unit number, rent amount, start date, special terms — all entered manually. Wrong entries meant wrong leases. Wrong leases meant liability.",
      },
      {
        title: "The rent collection process depended entirely on memory",
        description: "Reminders were sent manually the day before rent was due. Late notices were drafted when someone had time to draft them, which was not always the same day the tenant crossed the line. The gap between late rent and legal action was measured in weeks, not days.",
      },
      {
        title: "Eviction notices required legal precision nobody had time for",
        description: "N4 notices under the Residential Tenancies Act have specific content and timing requirements. A notice with the wrong arrears amount, served on the wrong date, restarts the process. The company was drafting these manually while managing 200 units. Errors happened.",
      },
      {
        title: "Tenants calling at all hours for things that did not need a human",
        description: "A significant portion of inbound tenant calls were about rent balances, maintenance status, lease terms, noise complaints, and building policies — questions a well-built system could answer instantly. They were all going to a person's mobile phone.",
      },
    ],
    afterHeadline: "Leases generate themselves. The rent cycle runs without anyone touching it. Tenants get answered at 3am. Notices go out on time, legally.",
    afterNarrative:
      "When a tenant is approved, the system pulls their details and auto-generates a compliant lease agreement from a locked, up-to-date template — rent amount, unit, dates, special clauses, and all relevant schedules included. The lease goes for e-signature automatically. Once signed, the deposit request fires and move-in instructions go out. The rent cycle runs from there: reminder at day minus 5, due date notification on day 1, formal arrears notice at day 5, and if payment still does not arrive, an N4 Notice to End Tenancy for Non-Payment of Rent is generated automatically with the correct arrears amount, served digitally, and logged with a timestamp for the Landlord and Tenant Board. A 24/7 AI agent answers tenant calls and messages at any hour — handling rent balance questions, maintenance status, noise complaints, building policies, and lease terms in a natural conversation. Actual emergencies get escalated to the on-call line immediately. The property manager now handles the 10% of situations that actually need a human.",
    solution: [
      "Automated lease generation: tenant and property data pulled at approval, lease drafted from locked template, sent for e-signature",
      "E-signature tracking with automated reminders at day 3 and day 7 — completion triggers deposit request and move-in sequence",
      "Rent cycle automation: reminder at day -5, due date notice, day-5 arrears notice, escalating tone through day 14",
      "N4 Notice to End Tenancy auto-generated at day 14 with legally correct arrears calculation, digital service, and LTB-ready timestamp log",
      "Eviction documentation package: all notice history, payment records, and lease documents compiled automatically for LTB filing",
      "24/7 AI tenant agent: answers rent balance, maintenance status, noise complaints, lease terms, and building policy questions at any hour — escalates emergencies immediately",
      "Maintenance request portal with AI urgency triage: emergencies escalated to on-call contractor within minutes, routine requests queued and assigned",
      "Owner reporting: monthly statement auto-generated per property with rent collected, arrears, maintenance costs, and vacancy status",
    ],
    processSteps: [
      { number: "01", title: "Tenant Approved — Lease Generated", description: "Approval triggers lease generation from the locked template. Tenant details, unit, rent, and terms populated automatically. Sent for e-signature immediately." },
      { number: "02", title: "Move-In Sequence", description: "Signed lease triggers deposit request. Payment confirmed, move-in instructions sent, inspection scheduled. All without manual action." },
      { number: "03", title: "Rent Cycle", description: "Day -5: courtesy reminder. Day 1: due date notice with payment link. Day 5: formal arrears notice. Tone escalates. Payment clears the sequence." },
      { number: "04", title: "N4 Notice Generated", description: "Day 14 without payment: N4 Notice to End Tenancy auto-generated with exact arrears, served digitally, timestamped and logged. LTB-compliant." },
      { number: "05", title: "Eviction Package Assembled", description: "If escalation proceeds, all documentation — notices, payment history, lease, correspondence — compiled automatically into the LTB filing package." },
      { number: "06", title: "24/7 Tenant AI", description: "Tenant calls or messages at any hour. AI agent handles rent balance, maintenance status, lease questions, complaints. Emergencies escalated to on-call within 60 seconds." },
    ],
    results: [
      { stat: "65%", description: "reduction in property manager admin hours per week", icon: Clock },
      { stat: "48hrs", description: "tenant onboarding time (was 2+ weeks)", icon: Timer },
      { stat: "100%", description: "on-time N4 notice service — zero LTB filing errors", icon: FileText },
      { stat: "80%", description: "of tenant inquiries handled by AI, no human involvement", icon: Bot },
    ],
    timeframe: "8 weeks to full deployment",
    testimonial:
      "I used to lose sleep over whether a notice went out on time or had the right arrears number. Now the system handles it and I just see the log. The AI agent alone saved me two hours a day. I didn't realize how much of my time was going to calls that didn't need me.",
    clientName: "",
    clientTitle: "Property Manager, Residential Portfolio",
    ctaText: "Automate Your Property Operations",
    ctaLink: "/book-demo",
    icon: Building,
    image: null,
  },
];
