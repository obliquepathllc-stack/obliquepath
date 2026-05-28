import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/shared/navbar";
import { StickyCtaBar } from "@/components/shared/sticky-cta";
import { ScrollAmbient } from "@/components/scroll-ambient";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
    title: "Oblique Path | AI Automation for Growing Businesses",
    description:
        "Oblique Path builds automation systems and custom software for businesses ready to stop doing things manually. From AI workflows to full-stack platforms, deployed in weeks.",
    keywords: [
        "AI automation",
        "business automation",
        "custom AI solutions",
        "workflow automation",
        "chatbots for business",
        "AI tools for SMBs",
    ],
    authors: [{ name: "ObliquePath", url: "https://obliquepath.dev" }],
    creator: "ObliquePath",
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
    icons: {
        icon: "/icon.png",
    },
    openGraph: {
        title: "Oblique Path | AI Automation for Growing Businesses",
        description:
            "Unlock your business potential with AI-driven automation: booking systems, lead workflows, voice agents, and custom platforms. Trusted by businesses across industries.",
        url: "https://obliquepath.dev",
        siteName: "ObliquePath",
        type: "website",
        images: [
            {
                url: "https://obliquepath.dev/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Oblique Path — AI Automation for Growing Businesses",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Oblique Path | AI Automation for Growing Businesses",
        description:
            "Custom AI tools and chatbots to automate business workflows. Boost productivity, cut costs, and scale faster.",
        images: ["https://obliquepath.dev/opengraph-image"],
    },
    metadataBase: new URL("https://obliquepath.dev"),
    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${jakartaSans.variable} ${dmSans.variable} ${firaCode.variable}`}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "Oblique Path",
                                "legalName": "Oblique Path LLC",
                                "url": "https://obliquepath.dev",
                                "logo": "https://obliquepath.dev/icon.png",
                                "description": "AI automation systems and custom software for businesses done running manually.",
                                "foundingLocation": "Windsor, Ontario, Canada",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Windsor",
                                    "addressRegion": "ON",
                                    "addressCountry": "CA"
                                },
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "email": "info@obliquepath.dev",
                                    "contactType": "customer service",
                                    "availableLanguage": "English"
                                },
                                "areaServed": ["Windsor", "Toronto", "Detroit", "Chicago", "San Francisco"],
                                "knowsAbout": ["AI Automation", "Business Process Automation", "Custom Software Development", "Mobile App Development", "AI Voice Agents"]
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Oblique Path",
                                "url": "https://obliquepath.dev",
                                "potentialAction": {
                                    "@type": "SearchAction",
                                    "target": "https://obliquepath.dev/case-studies",
                                    "query-input": "required name=search_term_string"
                                }
                            }
                        ])
                    }}
                />
            </head>
            <body className="overflow-x-hidden">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                >
                    <ScrollAmbient />
                    <Navbar />
                    <StickyCtaBar />
                    {children}
                    <Footer />
                    <Toaster />
                </ThemeProvider>
                <Analytics />
                {/* GA4 — SETUP: replace G-XXXXXXXXXX with your Measurement ID
                    Found at: analytics.google.com > Admin > Data Streams > your stream */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
                <Script id="ga4-init" strategy="afterInteractive">{`
                    window.dataLayer=window.dataLayer||[];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js',new Date());
                    gtag('config','G-XXXXXXXXXX');
                `}</Script>
                {/* Meta Pixel — SETUP: replace XXXXXXXXXXXXXXXXXX with your Pixel ID
                    Found at: business.facebook.com > Events Manager > your pixel */}
                <Script id="meta-pixel" strategy="afterInteractive">{`
                    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init','XXXXXXXXXXXXXXXXXX');
                    fbq('track','PageView');
                `}</Script>
            </body>
        </html>
    );
}
