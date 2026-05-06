export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-automation-windsor-toronto",
    title: "How Windsor and Toronto Service Businesses Are Eliminating Manual Work",
    date: "2025-04-02",
    category: "AI Automation",
    readTime: "6 min read",
    excerpt:
      "Most service businesses in Windsor and Toronto are still running on email threads, spreadsheets, and manual follow-ups. Here's what changes when you automate the right things.",
    content: [
      {
        type: "p",
        text: "Running a service business in Windsor or Toronto means your calendar is full—but so is your inbox. Quote requests waiting for responses. Jobs confirmed over text but never logged anywhere. Follow-ups that fell through because someone forgot. This is the operational overhead that eats into margin without showing up on any report.",
      },
      { type: "h2", text: "The Admin Tax Nobody Talks About" },
      {
        type: "p",
        text: "Most service businesses spend 10–15 hours a week on tasks that aren't billable: confirming appointments, chasing unpaid invoices, copying data between platforms, and manually sending updates to clients. In competitive markets like Toronto, where clients expect fast responses and smooth experiences, that lag is felt immediately.",
      },
      {
        type: "p",
        text: "The problem compounds as you grow. More customers means more manual work, not just more revenue. At some point, the overhead stops you from scaling—not a lack of demand.",
      },
      { type: "h2", text: "Three Things Windsor and Toronto Businesses Automate First" },
      {
        type: "ul",
        items: [
          "Booking and scheduling — Replace phone and email booking with an online system that handles confirmations, reminders, and rescheduling automatically.",
          "Lead follow-up — When someone fills out a form or sends an inquiry, an automated sequence ensures they get a response in minutes, not hours.",
          "Invoice and payment reminders — Triggered automatically based on job completion or due date, with no manual chasing required.",
        ],
      },
      { type: "h2", text: "What This Looks Like in Practice" },
      {
        type: "p",
        text: "One of our clients—a service company in the Windsor area—was managing bookings across five different tools. Their team was copy-pasting between a scheduling app, a spreadsheet, WhatsApp, email, and a payment platform. Every job required five manual steps.",
      },
      {
        type: "p",
        text: "After consolidating onto a single automated system, they recovered roughly 60% of the time their team spent on scheduling coordination. The work didn't get simpler, but the overhead disappeared.",
      },
      { type: "h2", text: "Getting Started Doesn't Require a Tech Team" },
      {
        type: "p",
        text: "The barrier to automation is lower than most business owners expect. You don't need in-house developers. A good automation partner identifies your bottlenecks, builds the system, and trains your team—typically in a matter of weeks, not months.",
      },
      {
        type: "callout",
        text: "If you're running a service business in Windsor, Toronto, or anywhere in Ontario and want to understand what's worth automating first, we're happy to walk through it with you.",
      },
    ],
  },
  {
    slug: "manual-followup-cost-michigan-chicago",
    title: "The Hidden Cost of Manual Follow-Ups: What We See Across Michigan and Chicago",
    date: "2025-03-20",
    category: "Automation Strategy",
    readTime: "5 min read",
    excerpt:
      "The most common thing we hear from business owners in Michigan and Chicago isn't 'we need AI.' It's 'we're losing deals we should be winning.'",
    content: [
      {
        type: "p",
        text: "The most common thing we hear from business owners in Michigan and Chicago isn't 'we need AI.' It's 'we're losing deals we should be winning.' Leads that went cold after an initial inquiry. Quotes that never got followed up on. Clients who chose a competitor not because of price, but because they got a callback first.",
      },
      { type: "h2", text: "Response Time Is the Entire Game" },
      {
        type: "p",
        text: "Studies consistently show that the odds of qualifying a lead drop dramatically after the first five minutes. Most small businesses in Detroit, Grand Rapids, and Chicago respond within hours—or not at all on weekends. Automated follow-up sequences change this entirely. A lead fills out your form at 11pm on a Saturday and gets a response before midnight. Your competitor responds Monday morning.",
      },
      { type: "h2", text: "What Manual Follow-Up Actually Costs" },
      {
        type: "p",
        text: "Beyond the obvious—lost deals—there's the invisible cost: the mental overhead of tracking every conversation, the anxiety of not knowing who's been followed up with, and the staff time spent on work that a simple automation could handle.",
      },
      {
        type: "p",
        text: "For a business closing 5–10 deals a month, even recovering one lost deal per month from better follow-up typically justifies the entire cost of implementation within the first quarter.",
      },
      { type: "h2", text: "What Automated Follow-Up Looks Like" },
      {
        type: "ul",
        items: [
          "Lead comes in from a form, ad, or referral",
          "Immediate automated acknowledgment sent within seconds",
          "Follow-up sequence triggers if there is no response in 24 hours",
          "Lead routed to the right team member with full context",
          "CRM updated automatically—no manual data entry",
        ],
      },
      {
        type: "p",
        text: "Nothing falls through the cracks. Your team only spends time on conversations that are actually moving forward.",
      },
      { type: "h2", text: "Who This Works Best For in Michigan and Illinois" },
      {
        type: "p",
        text: "The businesses that execute this best tend to be in insurance, home services, professional services, and B2B sales—industries where the sales cycle has multiple touchpoints and the cost of a lost deal is high. If you're in any of these sectors across Michigan or Illinois, automated follow-up is almost certainly worth implementing.",
      },
      {
        type: "callout",
        text: "We've helped insurance brokers, home service companies, and B2B businesses across the Midwest automate their lead follow-up. If you want to see what that looks like for your business, book a 30-minute strategy call.",
      },
    ],
  },
  {
    slug: "scheduling-automation-waste-removal",
    title: "From Chaos to System: How a Waste Removal Company Cut Scheduling Time by 60%",
    date: "2025-03-05",
    category: "Case Study",
    readTime: "4 min read",
    excerpt:
      "Before working with us, Junk Cycle was running bookings across five different tools. After go-live: 60% less scheduling time, zero double-bookings, and twice the volume with the same team.",
    content: [
      {
        type: "p",
        text: "Before working with us, Junk Cycle was running their bookings across five different tools. Their dispatcher was copy-pasting between a scheduling app, a spreadsheet, WhatsApp, email, and a payment platform. Every job required five manual steps. Mistakes happened. Jobs got double-booked. Customers had to chase for confirmations.",
      },
      { type: "h2", text: "The Problem With Patching Tools Together" },
      {
        type: "p",
        text: "Most small businesses don't set out to have a complicated tech stack. It grows organically—you add a tool to solve one problem, then another for the next one, and suddenly you have five platforms that don't talk to each other. Your team spends half its time managing the tools instead of doing the work.",
      },
      {
        type: "p",
        text: "This is the pattern we see most often across service businesses. The inefficiency isn't obvious until you map the actual steps a job takes from booking to completion.",
      },
      { type: "h2", text: "What We Built" },
      {
        type: "p",
        text: "We consolidated everything into a single flow: online booking → automatic confirmation → dispatch notification → post-job follow-up → review request. No manual steps required after the initial booking.",
      },
      {
        type: "ul",
        items: [
          "Customer books online, selects date and service",
          "Confirmation sent automatically via email and SMS",
          "Dispatcher notified with full job details",
          "Day-before reminder sent to customer",
          "Post-job follow-up and review request sent automatically",
        ],
      },
      { type: "h2", text: "The Result" },
      {
        type: "p",
        text: "60% reduction in time spent on scheduling coordination. Zero double-bookings since go-live. Response time dropped from hours to minutes. The dispatcher now handles roughly twice the volume with the same team.",
      },
      { type: "h2", text: "The Lesson" },
      {
        type: "p",
        text: "The goal of automation isn't to replace your team—it's to give them back their time. When the administrative overhead disappears, the same people can serve more customers, handle more volume, and focus on the parts of the job that actually require human judgment.",
      },
      {
        type: "callout",
        text: "If your business is managing jobs, bookings, or dispatching across multiple tools, there's a good chance we can help you consolidate and automate. Book a call to walk through your current setup.",
      },
    ],
  },
  {
    slug: "ai-automation-small-business-guide",
    title: "What AI Automation Actually Looks Like for a 10-Person Business",
    date: "2025-02-18",
    category: "Guide",
    readTime: "7 min read",
    excerpt:
      "AI automation isn't just for enterprise. Here's an honest look at what it means for a growing business—what to automate first, what it costs, and what it doesn't look like.",
    content: [
      {
        type: "p",
        text: "When people hear 'AI automation,' they often imagine something built for enterprise—expensive, complex, and out of reach for a business with 5 to 15 people. That's not what we build. The businesses we work with are small and mid-sized, operating in real industries across Canada and the US, and looking for systems that work without needing a dedicated IT department to maintain them.",
      },
      { type: "h2", text: "Start With the Bottleneck, Not the Technology" },
      {
        type: "p",
        text: "The mistake most businesses make when thinking about automation is starting with the tool. 'Should we use Zapier? Something custom?' The right starting point is the bottleneck: what's costing you the most time, the most errors, or the most missed opportunities? The tool comes second.",
      },
      {
        type: "p",
        text: "For most businesses we talk to—whether in Windsor, Toronto, Chicago, or San Francisco—the bottleneck is almost always the same: too many manual handoffs, no automated follow-up, and a scheduling or onboarding process that depends entirely on one person's memory.",
      },
      { type: "h2", text: "What's Typically Worth Automating First" },
      {
        type: "ul",
        items: [
          "Lead intake and follow-up — respond to every inquiry instantly, no matter the time of day",
          "Appointment booking and reminders — eliminate phone-tag and no-shows",
          "Client onboarding sequences — deliver a consistent experience without manual effort",
          "Invoice and payment collection — trigger reminders based on job status, not someone's calendar",
          "Internal reporting — pull data from multiple sources automatically, on a schedule",
        ],
      },
      { type: "h2", text: "What It Takes to Get Started" },
      {
        type: "p",
        text: "A reasonable automation project for a small business takes 2–4 weeks from kickoff to go-live. You'll need to spend a few hours with whoever is building it, explaining your current workflows. The rest is on them. Ongoing maintenance is minimal once it's running—most automations run without intervention for months.",
      },
      { type: "h2", text: "What It Doesn't Look Like" },
      {
        type: "p",
        text: "It's not a chatbot that answers FAQs on your website (though that's a thing too). It's not a dashboard full of graphs that nobody checks. At its core, good business automation is operational: something runs that used to require a person, and your team doesn't think about it anymore.",
      },
      { type: "h2", text: "The Right Time to Start" },
      {
        type: "p",
        text: "The best time to automate is before you feel the pain acutely. By the time manual work is causing you to lose deals or miss follow-ups, you've already left money on the table. The businesses that benefit most start automating when things are going well—so they can handle more volume without adding headcount.",
      },
      {
        type: "callout",
        text: "If you're a business in Windsor, Toronto, Michigan, Chicago, or San Francisco and you're curious whether automation makes sense for your operation, the fastest way to find out is a 30-minute call. We've done this enough times to tell you quickly whether it's worth pursuing.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
