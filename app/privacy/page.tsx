import { PageLayout } from "@/components/page-layout";

export const metadata = {
  title: "Privacy Policy | Oblique Path",
  description: "How Oblique Path collects, uses, and protects your information.",
};

const sections = [
  {
    title: "Who We Are",
    content: `Oblique Path LLC is an AI automation and custom software company headquartered in Windsor, Ontario, Canada. We build automation systems and custom platforms for businesses. This Privacy Policy explains how we collect, use, and protect information when you visit obliquepath.dev or interact with our services.

If you have questions about this policy, contact us at info@obliquepath.dev.`,
  },
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us, including:

- Contact form submissions (name, email, company, message)
- Book a demo requests (name, email, company, phone, project details)
- Job application submissions (name, email, resume, cover letter)
- Chat widget conversations (messages you send, and email if you provide it)

We also collect standard technical information automatically when you visit our site, including IP address, browser type, pages visited, and referring URLs. This is collected through Vercel (our hosting provider) and standard web analytics.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:

- Respond to your inquiries and demo requests
- Qualify and follow up on potential client engagements
- Communicate about projects and services
- Notify our team of new leads or applications
- Improve our website and services

We do not sell, rent, or share your personal information with third parties for their marketing purposes.`,
  },
  {
    title: "Third-Party Services",
    content: `We use the following third-party services to operate our website and business:

- Vercel — website hosting and infrastructure (vercel.com)
- Resend — transactional email delivery for form submissions and notifications (resend.com)
- Anthropic — AI model powering our website chat widget (anthropic.com)

Each of these providers has their own privacy policy governing how they handle data. Information submitted through our chat widget is processed by Anthropic's API and is subject to their usage policies.`,
  },
  {
    title: "Cookies & Tracking",
    content: `Our website uses minimal cookies necessary for basic site functionality. We do not use advertising cookies or cross-site tracking.

Vercel may set cookies for performance and security purposes. We do not use Google Analytics or other third-party tracking scripts that profile your behaviour across sites.`,
  },
  {
    title: "Data Retention",
    content: `We retain contact and inquiry information for as long as necessary to respond to your request and manage the business relationship. If you become a client, we retain project-related communications for the duration of the engagement and a reasonable period afterward.

You may request deletion of your personal data at any time by contacting us at info@obliquepath.dev.`,
  },
  {
    title: "Your Rights",
    content: `Depending on where you are located, you may have the right to:

- Access the personal information we hold about you
- Request correction of inaccurate information
- Request deletion of your information
- Withdraw consent where processing is based on consent
- Lodge a complaint with a supervisory authority

Canadian residents have rights under PIPEDA and applicable provincial privacy legislation. Residents of the European Economic Area have rights under GDPR. To exercise any of these rights, contact us at info@obliquepath.dev.`,
  },
  {
    title: "Security",
    content: `We take reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or loss. Our website is served over HTTPS. Access to personal data within our team is limited to those who need it to respond to your inquiry or manage our relationship.

No method of transmission over the internet is 100% secure. If you have concerns about a specific data security matter, contact us directly.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. When we do, we will update the effective date at the bottom of this page. We encourage you to review this policy periodically.`,
  },
  {
    title: "Contact",
    content: `For any questions, requests, or concerns about this Privacy Policy or how we handle your data:

Oblique Path LLC
Windsor, Ontario, Canada
info@obliquepath.dev
obliquepath.dev`,
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information."
    >
      <section className="px-4 lg:px-16 py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">

          <p className="text-xs text-muted-foreground/50 mb-16 pb-8 border-b border-border">
            Effective date: May 2026
          </p>

          <div className="flex flex-col gap-14">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-[15px]">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
