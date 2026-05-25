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
    excerpt: "There is a precise moment every day when your lead generation quietly falls apart. It happens while you sleep, and the competitor down the road built a system for it.",
    image: "https://images.pexels.com/photos/8278873/pexels-photo-8278873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageCredit: "AI25.Studio via Pexels",
    content: [
      {
        type: "p",
        text: "It is 11:47pm. Someone just filled out your quote form. They found you through the ad you have been running for three months. They read your pricing page. They clicked through to the testimonials. They are ready. Right now, while you sleep, they are also filling out forms on two other websites. The first business to respond wins this. Not the best business. The fastest one.",
      },
      {
        type: "p",
        text: "We looked at the numbers for a roofing company in Detroit. Forty-two inbound leads a month, average job value around six thousand dollars. Their average response time was four hours and twelve minutes. A competitor two miles away was averaging under eight minutes. The roofing company thought they had a lead quality problem. They did not. They had a Tuesday afternoon problem, a Friday at 4pm problem, a Monday morning pile of ignored notifications problem.",
      },
      { type: "h2", text: "The Five-Minute Window Is Actually a Ninety-Second Window" },
      {
        type: "p",
        text: "Harvard Business Review ran a study on lead response time that nobody reads but everyone should. The odds of reaching a lead drop by ten times after the first five minutes. After one hour you are down 391%. After a day you are not a follow-up, you are a cold call from a stranger. The math does not care that you were in a meeting, or that it was a Sunday, or that you had a perfectly reasonable explanation. The lead simply moved on.",
      },
      {
        type: "p",
        text: "The people who have understood this longest are in insurance. Walk into any high-volume brokerage and ask how they handle inbound leads. They have a system. They always have. Because the economics are too obvious to ignore: respond first, close more. That is the whole formula.",
      },
      {
        type: "casestudy",
        client: "First Point Cleaners",
        slug: "first-point-cleaners",
        stat: "70%",
        statLabel: "reduction in no-shows",
        teaser: "Automated reminders replaced manual texting. No-shows dropped. Admin time dropped. Nobody on the team missed doing it by hand.",
      },
      { type: "h2", text: "The Robot That Works Nights, Weekends, and the Long Weekend" },
      {
        type: "p",
        text: "We built an AI voice agent that calls every form submission within sixty seconds. It does not care if it is Sunday. It does not care if it is 3am. It introduces itself, runs through a short qualification conversation, logs everything to the CRM, and sends the assigned agent a transcript before they wake up. Monday morning is not a pile of cold leads to wade through. It is a warm list of people who have already been spoken to, already answered the key questions, already been told someone will follow up. That follow-up is you. The hard part is already done before you pour the coffee.",
      },
      {
        type: "casestudy",
        client: "Oblique Path: AI Voice Agent",
        slug: "ai-voice-agent",
        stat: "60s",
        statLabel: "from form fill to AI call",
        teaser: "Our AI voice agent qualifies leads instantly, 24/7. Enter your number and get called in 60 seconds.",
      },
      { type: "h2", text: "Speed Is Not a Sales Strategy. It Is a Business Model." },
      {
        type: "p",
        text: "Your competitors are mostly doing the same thing you are: relying on humans to respond during business hours and hoping the lead waits around. Most do not. The ones that do are usually comparing more quotes than you would like to know about. The ones that get an immediate, intelligent response feel taken care of before the relationship has even started. That feeling closes deals.",
      },
      {
        type: "callout",
        text: "Curious what your response time data actually looks like? Bring your current setup to a call. We will show you exactly where leads are falling out and what it would cost to fix it.",
      },
    ],
  },

  {
    slug: "manual-followup-cost-michigan-chicago",
    title: "We Audited a Week of Normal Work at a 6-Person Business. It Was Painful.",
    date: "2025-04-28",
    category: "Automation Strategy",
    readTime: "7 min read",
    excerpt: "We asked a small service business to track every task their team touched for one week. Not project work. Everything. The result was 47 tasks, 14 happening daily, and 9 that existed for no reason other than nobody had questioned them.",
    image: "https://images.pexels.com/photos/8468818/pexels-photo-8468818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageCredit: "cottonbro studio via Pexels",
    content: [
      {
        type: "p",
        text: "The business was a field services company. Six employees, about a hundred and twenty jobs a month, growing steadily. Not struggling. Actually doing well. We asked them to do something uncomfortable: write down every task they touched for one week. Not just the big stuff. Every email, every notification, every 'let me just check one thing real quick' that turned into twenty minutes. They came back with 47 items. Fourteen happened every single day. Nine of them, when we sat down and asked why they existed, produced answers that amounted to: 'Because that is how we have always done it.'",
      },
      {
        type: "p",
        text: "Admin does not arrive all at once. It shows up one piece at a time, each piece perfectly reasonable on its own. You add a tool to solve a problem. The tool solves that problem but creates a small gap with another tool, so you fill the gap manually. The manual step becomes a habit. The habit becomes a job function. Two years later someone on your team spends four hours a week on a thing that makes no sense, and everyone accepts it because questioning it would require acknowledging how long it has been going on.",
      },
      { type: "h2", text: "What Was Actually on the List" },
      {
        type: "ul",
        items: [
          "Copy new leads from email into the CRM spreadsheet every morning. 20 minutes. Has been happening for 14 months. Nobody has questioned it.",
          "Send appointment reminder texts to clients by hand every afternoon. 15 minutes. Their scheduling tool has an automated reminder feature that was turned off at setup and never turned back on.",
          "Download the weekly report from the booking platform, paste the numbers into a separate spreadsheet for the owner to review. 45 minutes every Friday. The owner looks at it for about 90 seconds.",
          "Type up invoices from handwritten job notes at end of day. 25 to 40 minutes. The notes use abbreviations that three of the six employees invented independently and nobody has reconciled.",
          "Call clients to confirm bookings that were already confirmed by email. Just to make sure they got it. This happens for roughly 30% of jobs and has never once revealed a missed email.",
          "Update job status in the master spreadsheet after logging it in the job management app. Same information, two places, entered twice, every single time.",
          "Manual cross-check of the booking calendar versus the actual schedule. Because they drifted once. They drifted because of a manual entry error. In the manual cross-check.",
        ],
      },
      { type: "h2", text: "The Number That Changes the Conversation" },
      {
        type: "p",
        text: "Across six people and five working days, those 47 tasks added up to about 16 hours of work that required no judgment, no expertise, and no real human involvement. Just presence and repetition. Sixteen hours a week is two full working days across the team, on things that a properly configured automation would handle without anyone's involvement. They were not paying for incompetence. They were paying for a system that had never been built.",
      },
      {
        type: "casestudy",
        client: "First Point Cleaners",
        slug: "first-point-cleaners",
        stat: "70%",
        statLabel: "reduction in no-shows",
        teaser: "Automated reminders replaced manual texting across every booking. No-shows dropped significantly. Admin time dropped even more.",
      },
      { type: "h2", text: "The One Question We Ask Before Anything Else" },
      {
        type: "p",
        text: "Before we look at tools or costs or timelines, we ask one thing: is a human making a decision here, or is a human just pressing a button? Button presses are automation candidates. Every one of them. You would be surprised how much of a normal workday is just buttons. And you would be surprised how much better the day feels once those buttons are gone.",
      },
      {
        type: "p",
        text: "What made this audit interesting was that nobody on the team was surprised by what we found. They all knew these tasks were wasteful. They had just never had someone sit down and add it up. Once you see the number written out, something shifts. It stops being 'this is just how it works' and starts being 'we have been paying for this every week for two years.'",
      },
      {
        type: "callout",
        text: "We do this audit for free. Show us your week, your tools, your current daily reality. Thirty minutes and you will leave knowing exactly what to fix first and roughly what it is costing you not to.",
      },
    ],
  },

  {
    slug: "scheduling-automation-waste-removal",
    title: "The Five-App Circus: A Love Story Between Your Business and Tools That Hate Each Other",
    date: "2025-04-12",
    category: "Case Study",
    readTime: "5 min read",
    excerpt: "Act I: The business installs a scheduling app. It is great. Then they realize it does not talk to the invoicing software. Enter App Two. You can see where this goes.",
    image: "https://images.pexels.com/photos/6913349/pexels-photo-6913349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageCredit: "Tima Miroshnichenko via Pexels",
    content: [
      {
        type: "p",
        text: "Scene: somewhere in the Midwest, a business owner is explaining their tech stack to a new hire. The explanation takes twenty-four minutes and includes the phrase 'you just have to remember to do it in this order.' Nobody has written this down. It lives in two people's heads. One of those people is leaving in six weeks.",
      },
      { type: "h2", text: "Act I: The Reasonable Decision" },
      {
        type: "p",
        text: "They needed a scheduling tool. Calendly worked. Customers could book without calling. The phone stopped ringing for appointments. It was a genuine win. The problem arrived three weeks later when someone noticed that bookings in Calendly did not appear in QuickBooks. So someone started copying them over manually every morning. It took ten minutes. That was two years ago. The ten minutes has happened every working day since.",
      },
      { type: "h2", text: "Act II: The Workaround That Became Infrastructure" },
      {
        type: "p",
        text: "QuickBooks needed to sync with the CRM. It did not. There was a workaround: a CSV export every Monday morning, cleaned up in Excel, imported into the CRM before noon. One employee figured out the import settings. She wrote them down once, on a Post-it that is almost certainly gone. The process has continued flawlessly, in the sense that it has continued.",
      },
      { type: "h2", text: "Act III: The Day Everything Got Weird" },
      {
        type: "p",
        text: "That employee went on parental leave. The Post-it was gone. It took two weeks to reconstruct the import process. During those two weeks the CRM data was, let us say, impressionistic. Some of that chaos is still in the records from March 2023 if you know where to look.",
      },
      { type: "h2", text: "Act IV: The Owner's Friday Afternoon" },
      {
        type: "p",
        text: "The owner now spends Friday afternoons manually cross-referencing the tools. Not because this is the best use of their time. Because at some point the tools stopped being trustworthy on their own and someone has to check. That someone is the person who should be doing literally anything else.",
      },
      { type: "h2", text: "This Is Not a Story About Bad Software" },
      {
        type: "p",
        text: "Calendly is good. QuickBooks is good. Every app in this stack was a reasonable decision when it was added. The problem is that tools designed independently do not form a system just because you use them together. They form a stack. Stacks need maintenance. Stacks need people who know where the gaps are. And stacks break quietly, in ways you do not notice until you are doing an inventory and something does not add up.",
      },
      {
        type: "casestudy",
        client: "Junk Cycle",
        slug: "junk-cycle",
        stat: "60%",
        statLabel: "less time on scheduling",
        teaser: "Five platforms, 22 manual steps per job, and errors that nobody could trace. One integrated flow replaced all of it. Dispatchers now handle twice the volume.",
      },
      { type: "h2", text: "What Actually Happened After Consolidation" },
      {
        type: "p",
        text: "When we mapped Junk Cycle's full operation, from booking to dispatch to confirmation to day-before reminder to post-job follow-up, it was 22 discrete steps. Fourteen were manual. After consolidation: a booking triggers the confirmation, which triggers the dispatch note, which triggers the day-before reminder, which triggers the follow-up. The whole chain runs automatically. The dispatcher now handles roughly double the volume with the same team. She described the new setup as 'weirdly boring,' which is the highest compliment you can give an operations system.",
      },
      { type: "h2", text: "What It Feels Like When It Actually Works" },
      {
        type: "p",
        text: "There is a specific thing that happens when a business moves from a stack to a system: the owner stops spending mental energy on operations. Not because the operations disappeared. They are happening more reliably than before. But they are happening without anyone having to remember to do them. That freed-up attention goes somewhere. Usually toward the thing that actually grew the business in the first place.",
      },
      {
        type: "casestudy",
        client: "Aerrand",
        slug: "aerrand",
        stat: "70%",
        statLabel: "faster onboarding",
        teaser: "End-to-end onboarding automation replaced a chain of manual handoffs. Zero dropped steps since go-live. The team barely noticed it changed.",
      },
      {
        type: "callout",
        text: "If your current setup has more than two manual steps between any two tools, there is a very good chance we can close those gaps. Show us the process and we will find them.",
      },
    ],
  },

  {
    slug: "ai-automation-small-business-guide",
    title: "No, Your AI Won't Become Skynet. But It Will Answer Your Leads at 2am.",
    date: "2025-05-01",
    category: "Guide",
    readTime: "8 min read",
    excerpt: "When people hear 'AI automation' they picture a robot, a useless chatbot, or the opening scene of a science fiction movie. Here is what it actually is and why it is almost disappointingly practical.",
    image: "https://images.pexels.com/photos/3760604/pexels-photo-3760604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageCredit: "Andrea Piacquadio via Pexels",
    content: [
      {
        type: "p",
        text: "The phrase 'AI automation' lands differently depending on who you are. If you have watched your team copy-paste data between spreadsheets for three years, it sounds like a lifeline. If you read a lot of tech news, it triggers memories of Gartner hype cycles and the word 'transformative' attached to software that did not do much. If you have seen too many movies, you are picturing the part just before something goes wrong on a planetary scale. All of these reactions are understandable. None of them are what we are actually talking about.",
      },
      {
        type: "p",
        text: "What we are talking about is boringly, almost disappointingly practical. A form that replies to itself. A calendar that fills without anyone picking up the phone. An invoice that generates from a completed job. A lead that gets called back before your team finishes their morning coffee. The technology behind it can get interesting if you want to go deep on it. But the outcome is simple: something tedious stopped requiring a person, and that person went and did something more useful instead.",
      },
      { type: "h2", text: "Three Objections We Hear Every Single Week" },
      {
        type: "ul",
        items: [
          "'Our business is too small for this.' We work with companies that have three employees and one person doing everything. Size is not the barrier. The barrier is usually having repetitive enough processes to automate, and small businesses have those in abundance.",
          "'What happens when it breaks?' It will alert you, we will fix it, and it will break less often than the human doing the same thing manually, who also has a cold, two back-to-back meetings, and a phone that keeps going off. Reliability is genuinely one of the main reasons to automate.",
          "'My team will push back.' We have never once seen this. People push back on software that makes their job harder. Nobody fights to keep the task they hate. Nobody goes home thinking warmly about manually updating the CRM.",
        ],
      },
      { type: "h2", text: "What AI Actually Does in a Real Business" },
      {
        type: "p",
        text: "Most of what we call AI automation in a small business context is a system that can read input, make a simple decision based on rules or context, and take an action. An AI voice agent calls a new lead, listens to the conversation, determines whether they qualify based on criteria you defined, logs the outcome with notes, scores the lead, and sends your team a transcript. It is not thinking creatively. It is not improvising. It is doing one specific thing, extraordinarily reliably, at any hour, without getting tired or distracted or quietly checking its phone.",
      },
      {
        type: "casestudy",
        client: "Oblique Path: AI Voice Agent",
        slug: "ai-voice-agent",
        stat: "60s",
        statLabel: "from form fill to AI call",
        teaser: "Our voice agent calls leads the moment they submit a form, qualifies them in conversation, logs it all, and sends a transcript. Try the live demo yourself.",
      },
      { type: "h2", text: "Start With the Task That Makes Someone Sigh" },
      {
        type: "p",
        text: "The best first automation is never the most ambitious one. It is the task that happens every day, takes between ten and thirty minutes, and requires nothing more than moving information from one place to another. Find that task. Automate it. Watch what it costs, what it saves, and how the team reacts when that thing disappears from the to-do list. Then decide how far you want to go from there.",
      },
      {
        type: "p",
        text: "We have seen this start with one small automation and expand into a fully rebuilt operation. We have also seen it stop at two things that just needed to stop being manual. Both outcomes are completely valid. The goal is not to automate as much as possible. The goal is to get the right hours back and point them somewhere worth pointing.",
      },
      {
        type: "casestudy",
        client: "Junk Cycle",
        slug: "junk-cycle",
        stat: "60%",
        statLabel: "less time on scheduling",
        teaser: "Five platforms and 22 manual steps collapsed into one automated flow. The dispatcher now handles twice the volume with the same team.",
      },
      { type: "h2", text: "The Thing Nobody Mentions Until After It Happens" },
      {
        type: "p",
        text: "A few months after go-live, most of the businesses we work with say some version of the same thing: they do not think about that part of the operation anymore. Not because it stopped happening. It is happening more reliably than before. But it is happening without requiring anyone's attention. That attention went somewhere. Usually toward the parts of the business that actually need a human, which, it turns out, is most of the interesting work.",
      },
      {
        type: "callout",
        text: "Tell us the most repetitive thing your team does right now. We will tell you whether it is automatable, what it would take, and whether it is worth doing. Thirty minutes.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
