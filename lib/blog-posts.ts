export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "casestudy"; client: string; slug: string; stat: string; statLabel: string; teaser: string };

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageCredit: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-automation-windsor-toronto",
    title: "Your Business Is Leaking Money Every Night at 5:01 PM",
    date: "2025-05-10",
    category: "AI Automation",
    readTime: "6 min read",
    excerpt: "There is a precise moment when your lead generation falls apart. It's approximately five minutes after someone fills out your contact form — and it happens every single day.",
    image: "https://images.pexels.com/photos/8278873/pexels-photo-8278873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageCredit: "AI25.Studio via Pexels",
    content: [
      {
        type: "p",
        text: "It's 11:47pm. Somebody just filled out your quote form. They want exactly what you offer, they have their wallet open, and they're ready to move. Right now — while you are (hopefully) asleep — they are also looking at your competitor's website, your other competitor's website, and whoever shows up third on Google. The first business to respond wins the deal. Unless, of course, one of those businesses has a system that called at 11:48pm.",
      },
      { type: "h2", text: "A Tale of Two Businesses (And One Very Awake Robot)" },
      {
        type: "p",
        text: "Business A and Business B are both running ads in Windsor. Both get 40 form submissions a month. Business A's team comes in at 9am, works through the inbox, and starts calling leads around 11. Business B has an automated response that fires within 90 seconds of every submission — a personalized text, a confirmation email, and a booking link. By the time Business A's team lifts the phone, Business B has already booked 60% of those same leads. Business A thinks their ads aren't working. Business A is wrong.",
      },
      { type: "h2", text: "The 5-Minute Rule (That's Actually a 30-Second Rule)" },
      {
        type: "p",
        text: "A study from Harvard Business Review found that your odds of reaching a lead drop by 10x after just five minutes. After an hour, lead conversion drops by 391%. After the weekend, you're essentially cold-calling a stranger. The research is not subtle about this. The window is brutally short, and most businesses are not even in the game.",
      },
      {
        type: "p",
        text: "The irony is that the fix isn't complicated. It's just a system that does the boring part — the immediate response, the follow-up, the reminder — so your team can focus on the part that actually requires a human being.",
      },
      {
        type: "casestudy",
        client: "Harbor One Capital",
        slug: "harbor-one-capital",
        stat: "2×",
        statLabel: "more closed policies",
        teaser: "An insurance brokerage automated their entire lead follow-up sequence. Agents stopped chasing and started closing.",
      },
      { type: "h2", text: "What Happens When the Robot Picks Up First" },
      {
        type: "p",
        text: "We built a system for a mortgage brokerage that was hemorrhaging leads every weekend. An AI voice agent now calls every form submission within 60 seconds — including Friday night, Saturday morning, and Sunday at noon. It introduces itself, asks qualifying questions, logs everything to the CRM, and sends the agent a full transcript before they wake up. Monday morning, the agent has 40 pre-qualified leads with notes. Not a pile of cold contacts and vague anxiety.",
      },
      {
        type: "casestudy",
        client: "Oblique Path — AI Voice Agent",
        slug: "ai-voice-agent",
        stat: "60s",
        statLabel: "from form fill to AI call",
        teaser: "Our AI voice agent qualifies leads instantly, 24/7. Try the live demo — enter your number and get called in 60 seconds.",
      },
      { type: "h2", text: "You Don't Need to Hire a Night Shift" },
      {
        type: "p",
        text: "You just need a system that acts like a very attentive, never-tired, never-distracted version of your best salesperson. The leads don't know it's automated. They know they got a response immediately. That responsiveness alone sets you apart from most of your competition, because most of your competition is still relying on a human to check their inbox at 9am.",
      },
      {
        type: "callout",
        text: "Want to see what this looks like for your specific business? We'll map out exactly what to automate and how — 30 minutes, no pitch.",
      },
    ],
  },

  {
    slug: "manual-followup-cost-michigan-chicago",
    title: "We Audited a Week of 'Normal Work' at a 6-Person Business. It Was Painful.",
    date: "2025-04-28",
    category: "Automation Strategy",
    readTime: "7 min read",
    excerpt: "We asked a small service business to track every task their team did for one week. The result: a 47-item list, 14 daily tasks, and 9 things that should have been automated years ago.",
    image: "https://images.pexels.com/photos/8468818/pexels-photo-8468818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageCredit: "cottonbro studio via Pexels",
    content: [
      {
        type: "p",
        text: "We asked a small service business — six employees, doing well, growing steadily — to track every task their team touched for one week. Not just the big stuff. Everything. Every email, every phone call, every 'let me just update the spreadsheet real quick.' The result was a 47-item list. Fourteen of those tasks happened every single day. Nine of them were being performed by humans for reasons that, when examined closely, turned out to be 'because that's how we've always done it.'",
      },
      {
        type: "p",
        text: "We're not here to make anyone feel bad. Admin work doesn't sneak up on you all at once — it accumulates slowly, like a pile of mail that somehow becomes furniture. You add one tool to solve one problem, then another tool for the next, and before you know it you have five platforms that technically work and actually don't.",
      },
      { type: "h2", text: "The Daily Grind Breakdown" },
      {
        type: "ul",
        items: [
          "Copy-pasting new leads from email into a spreadsheet (every morning, 20 minutes)",
          "Manually texting appointment reminders to clients (every afternoon, 15 minutes)",
          "Updating the CRM after every phone call (throughout the day, no one's quite sure how long)",
          "Typing up invoices from handwritten job notes (end of day, 25-40 minutes)",
          "Downloading a report from one platform and uploading it to another (weekly, 45 minutes)",
          "Sending 'just checking in' follow-up emails to leads who hadn't replied (twice a week, judgement call on which ones get them)",
          "Reconciling the booking calendar against the actual schedule spreadsheet (daily, because they somehow drift apart)",
        ],
      },
      { type: "h2", text: "The Price of Normal" },
      {
        type: "p",
        text: "Each task takes 3 to 45 minutes. Spread across six people, five days a week, it added up to roughly 14 hours of work that didn't require a brain — just fingers and patience. That's approximately one full-time employee's worth of hours, every week, on tasks that a properly configured automation could handle without breaking a sweat. Or, more accurately, without having a sweat gland.",
      },
      {
        type: "casestudy",
        client: "First Point Cleaners",
        slug: "first-point-cleaners",
        stat: "70%",
        statLabel: "reduction in no-shows",
        teaser: "Automated reminders replaced manual texting. No-shows dropped. Admin time dropped. Nobody missed the manual texting.",
      },
      { type: "h2", text: "The One Question That Changes the Conversation" },
      {
        type: "p",
        text: "When we work with a new client, we ask one question before writing a line of anything: 'Is a human making a decision here, or is a human just pressing a button?' If the answer is 'pressing a button,' that task is an automation candidate. You'd be surprised — or maybe you wouldn't — how many buttons your team presses in a given week.",
      },
      {
        type: "p",
        text: "The businesses that get the most out of automation aren't the ones with the most complex operations. They're the ones that got honest about what 'normal work' actually looks like — and then stopped accepting it.",
      },
      {
        type: "callout",
        text: "Want your own workflow audit? We do these for free. 30 minutes, and you'll leave knowing exactly what to automate first.",
      },
    ],
  },

  {
    slug: "scheduling-automation-waste-removal",
    title: "The Five-App Circus: A Love Story Between Your Business and Tools That Hate Each Other",
    date: "2025-04-12",
    category: "Case Study",
    readTime: "5 min read",
    excerpt: "Act I: The business owner installs a scheduling app. It's great. Then they realize it doesn't talk to their invoicing software. Enter App #2. You can probably guess where this is going.",
    image: "https://images.pexels.com/photos/6913349/pexels-photo-6913349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageCredit: "Tima Miroshnichenko via Pexels",
    content: [
      {
        type: "p",
        text: "Act I: The business installs a scheduling app. It's genuinely great — customers can book online, no more phone tag. Everyone is happy. Then someone realizes the scheduling app doesn't talk to the invoicing software. The owner finds a fix: they'll just check both every morning and copy the relevant info over. It only takes ten minutes.",
      },
      {
        type: "p",
        text: "Act II: The invoicing software is also good. It doesn't sync with the CRM, but that's fine — there's a workaround. There's always a workaround. Enter App #3. The workaround involves a CSV export and one employee who has the muscle memory for the import process. Nobody else has tried. Nobody else has needed to. Yet.",
      },
      {
        type: "p",
        text: "Act III: That employee leaves. The muscle memory leaves with them. Nothing breaks, technically, but nobody's completely sure the data is accurate anymore. The owner starts cross-referencing the apps manually on Friday afternoons. That is now their life.",
      },
      { type: "h2", text: "This Is Not a Story About Bad Software" },
      {
        type: "p",
        text: "Calendly is fine. QuickBooks is fine. Jobber is fine. Every app in this stack was probably a reasonable decision at the time. The problem isn't the tools — it's that tools designed independently don't behave like a system. They behave like individual tools, because that's what they are. You end up stitching them together with habit, manual steps, and the collective memory of your team. The moment any part of that chain breaks, everything becomes a guess.",
      },
      {
        type: "casestudy",
        client: "Junk Cycle",
        slug: "junk-cycle",
        stat: "60%",
        statLabel: "less time on scheduling",
        teaser: "Five platforms, 22 manual steps per job, constant errors. One automated flow replaced all of it — dispatchers now handle twice the volume.",
      },
      { type: "h2", text: "The Moment It Clicked" },
      {
        type: "p",
        text: "The owner of Junk Cycle said something during our first call that I still think about: 'Every job requires five things to happen, and I have to remember all five every time.' That's not a scheduling problem. That's a systems problem. When we mapped the full flow — booking, dispatch, confirmation, reminder, post-job follow-up — it was 22 steps. Fourteen of them were manual. Some of them depended on one specific person being around and not distracted.",
      },
      {
        type: "p",
        text: "After consolidating: booking triggers confirmation, confirmation triggers dispatch note, dispatch note triggers day-before reminder, job completion triggers follow-up. The whole chain runs on its own. The dispatcher now handles roughly double the volume with the same team.",
      },
      { type: "h2", text: "What One Connected System Feels Like" },
      {
        type: "p",
        text: "When everything is integrated, something strange happens to the people running the business: they stop thinking about operations. Not because the operations don't exist — they do — but because the right things happen automatically and the team's attention shifts to the exceptions, the growth, the decisions that actually need a person. That's what a system is supposed to do.",
      },
      {
        type: "casestudy",
        client: "Aerrand",
        slug: "aerrand",
        stat: "70%",
        statLabel: "faster onboarding",
        teaser: "End-to-end onboarding automation replaced a chain of manual handoffs. Zero dropped steps since go-live.",
      },
      {
        type: "callout",
        text: "If your business runs on three or more tools that require manual steps between them, there's a very good chance we can consolidate it. Book a call and show us your current setup.",
      },
    ],
  },

  {
    slug: "ai-automation-small-business-guide",
    title: "No, Your AI Won't Become Skynet. But It Will Answer Your Leads at 2am.",
    date: "2025-05-01",
    category: "Guide",
    readTime: "8 min read",
    excerpt: "When people hear 'AI automation,' they picture robots, chatbots that answer nothing correctly, or the opening scene of a sci-fi movie. Let's talk about what it actually is.",
    image: "https://images.pexels.com/photos/3760604/pexels-photo-3760604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageCredit: "Andrea Piacquadio via Pexels",
    content: [
      {
        type: "p",
        text: "When someone says 'AI automation for your business,' a few things might come to mind. A robot. A chatbot that responds to 'What are your hours?' with 'I'm sorry, I didn't understand that.' A TED Talk you half-watched on a flight. Or, if you've seen too many movies, the opening act before Skynet takes over.",
      },
      {
        type: "p",
        text: "None of that is what we're talking about. We're talking about something far more boring and considerably more useful. Forms that reply to themselves. Calendars that fill without phone calls. Invoices that generate without being typed. Leads that get followed up with before your team wakes up. The whole premise is almost embarrassingly mundane: repetitive things should not require a human to repeat them.",
      },
      { type: "h2", text: "The Three Objections We Hear Every Week" },
      {
        type: "ul",
        items: [
          "'My business is too small for this.' We work with 3-person companies. Size is not the barrier — chaos is.",
          "'It'll break and I won't know how to fix it.' You will know when it breaks, because we monitor it and you'll get an alert. Also, it breaks way less than the human equivalent.",
          "'My team will resist it.' Your team will enthusiastically support anything that removes the tasks they hate. Nobody misses manual data entry.",
        ],
      },
      { type: "h2", text: "What 'AI' Actually Means in This Context" },
      {
        type: "p",
        text: "In most small business automation, 'AI' means systems that can respond intelligently, adapt based on context, and make simple decisions without human input. An AI voice agent that calls your leads can determine from the conversation whether someone's qualified, log the outcome, score the lead, and notify your team accordingly. It's not making strategic decisions. It's not getting creative. It's doing the repetitive part — extremely reliably, at any hour, without needing a coffee break.",
      },
      {
        type: "casestudy",
        client: "Oblique Path — AI Voice Agent",
        slug: "ai-voice-agent",
        stat: "60s",
        statLabel: "from form fill to AI call",
        teaser: "Our AI voice agent calls leads the moment they submit a form — qualifies them, logs it all, sends a transcript. Try the live demo yourself.",
      },
      { type: "h2", text: "Where to Start (And Where Not To)" },
      {
        type: "p",
        text: "The worst starting point is 'we want to automate everything.' The best starting point is one specific thing that makes someone on your team sigh every time they do it. The task that happens daily, takes 15 minutes, and requires nothing more than copying information from one place to another. Start there. Prove it works. Then expand.",
      },
      {
        type: "p",
        text: "The businesses that get the most out of automation aren't the ones with the largest budgets or the most complex operations. They're the ones that got specific about what was costing them time and made one decision to stop tolerating it.",
      },
      {
        type: "casestudy",
        client: "Harbor One Capital",
        slug: "harbor-one-capital",
        stat: "2×",
        statLabel: "more closed policies",
        teaser: "Automated lead follow-up meant agents spent zero time chasing and 100% of their time closing. Policies doubled without adding headcount.",
      },
      { type: "h2", text: "What You Actually Get" },
      {
        type: "p",
        text: "Not a dashboard full of graphs nobody checks. Not a chatbot that says 'I'm sorry, I didn't understand that' to half your customers. What you get is operational: something runs that used to require a person, and your team genuinely stops thinking about it. That's the measure. Not the technology. The quiet.",
      },
      {
        type: "callout",
        text: "Book a free 30-minute call. We'll tell you what's actually worth automating for your business — and what isn't.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
