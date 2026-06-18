import { PageLayout } from "@/components/page-layout";

export const metadata = {
  title: "Terms of Service | Oblique Path",
  description: "The terms governing use of obliquepath.dev and engagement with Oblique Path's automation and software services.",
};

const sections = [
  {
    title: "Agreement to Terms",
    content: `These Terms of Service govern your use of obliquepath.dev and any services described on it. By using this website or engaging Oblique Path LLC for a project, you agree to these terms.

If you have questions, contact us at info@obliquepath.dev.`,
  },
  {
    title: "Services",
    content: `Oblique Path LLC builds AI automation systems, custom software, and process optimization solutions for businesses. Specific scope, deliverables, pricing, and timelines for any engagement are defined in a separate written proposal or contract agreed to directly with the client. Nothing on this website constitutes a binding offer — it is informational and illustrative of past work.`,
  },
  {
    title: "Use of This Website",
    content: `You may use this website for lawful purposes only. You agree not to:

- Attempt to gain unauthorized access to any part of the site or its underlying systems
- Use automated tools to scrape or extract content without permission
- Submit false or misleading information through our forms or chat widget
- Use the site in any way that could damage, disable, or impair its functioning`,
  },
  {
    title: "Intellectual Property",
    content: `All content on this website — including text, design, case study write-ups, and branding — is the property of Oblique Path LLC unless otherwise noted. You may not reproduce, distribute, or create derivative works from this content without written permission.

Case studies describe real work performed for clients. Client names are omitted or anonymized at the client's request; described outcomes reflect actual project results unless noted otherwise.`,
  },
  {
    title: "Client Engagements",
    content: `Any project undertaken with Oblique Path LLC — automation builds, custom software, consulting — is governed by a separate signed agreement between Oblique Path and the client. That agreement, not this page, controls scope, payment terms, intellectual property ownership of delivered work, confidentiality, and liability for that engagement.`,
  },
  {
    title: "No Warranty",
    content: `This website and its content are provided "as is" without warranties of any kind, express or implied. We do not guarantee the website will be uninterrupted, secure, or error-free. Results described in case studies are specific to those engagements and are not a guarantee of similar results for any other business.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by law, Oblique Path LLC is not liable for any indirect, incidental, or consequential damages arising from your use of this website. This does not limit liability under a separate signed client agreement, which governs project-specific terms.`,
  },
  {
    title: "Third-Party Links and Services",
    content: `This site may link to third-party websites or rely on third-party services (such as Vercel for hosting, Resend for email delivery, and Anthropic for the chat widget). We are not responsible for the content or practices of third-party sites. See our Privacy Policy for more detail on third-party data processing.`,
  },
  {
    title: "Changes to These Terms",
    content: `We may update these Terms of Service from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.`,
  },
  {
    title: "Governing Law",
    content: `These terms are governed by the laws of the Province of Ontario, Canada, without regard to conflict of law principles.`,
  },
  {
    title: "Contact",
    content: `For any questions about these Terms of Service:

Oblique Path LLC
Windsor, Ontario, Canada
info@obliquepath.dev
obliquepath.dev`,
  },
];

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="The terms governing use of this site and engagement with Oblique Path."
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
