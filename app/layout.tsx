import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/shared/navbar";
import { ScrollAmbient } from "@/components/scroll-ambient";
import { Analytics } from "@vercel/analytics/react";
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
    },
    twitter: {
        card: "summary_large_image",
        title: "Oblique Path | AI Automation for Growing Businesses",
        description:
            "Custom AI tools and chatbots to automate business workflows. Boost productivity, cut costs, and scale faster.",
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
            <body className="overflow-x-hidden">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                >
                    <ScrollAmbient />
                    <Navbar />
                    {children}
                    <Footer />
                    <Toaster />
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
