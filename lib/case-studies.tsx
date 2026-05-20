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
    id: "crestview-realty",
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
];
