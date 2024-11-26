import { JsonLd } from "@/components/json-ld";
import { MeshGradient } from "@/components/mesh-gradient";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/language-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://laclass.dev";

export const metadata: Metadata = {
  title: "Landry Bella | Full-Stack Web Developer",
  description:
    "Full-Stack Senior TypeScript, React & Next.js developer with 5+ years of experience building modern web applications. Expertise in TypeScript, React, Next.js, and full-stack development.",
  keywords: [
    // Core Roles
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "Full Stack Developer",
    "Frontend Engineer",
    "Senior Software Engineer",

    // Technical Expertise
    "React.js Expert",
    "JavaScript Developer",
    "Node.js Developer",
    "GraphQL Developer",
    "REST API Developer",
    "Database Engineer",

    // Specialized Skills
    "Web Performance Expert",
    "UI/UX Developer",
    "Responsive Design Specialist",
    "Modern Web Development",
    "Progressive Web Apps",
    "JAMstack Developer",

    // Industry Terms
    "Web Development",
    "Software Engineering",
    "Frontend Development",
    "Full Stack Development",
    "Enterprise Software Development",

    // Location/Remote
    "Remote Developer",
    "International Developer",
    "Global Software Engineer",
  ],
  authors: [{ name: "Landry Bella" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Landry Bella | Full-Stack Web Developer",
    description:
      "Full-Stack Senior TypeScript, React & Next.js developer with 5+ years of experience building modern web applications.",
    siteName: "Landry Bella Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Landry Bella - Full-Stack Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landry Bella | Full-Stack Next.js Developer",
    description:
      "Full-Stack Senior TypeScript, React & Next.js developer with 5+ years of experience building modern web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get browser language
  const isFrench = typeof window !== 'undefined' && window.navigator.language.toLowerCase().startsWith('fr');
  const lang = isFrench ? 'fr' : 'en';

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <MeshGradient />
            <Navigation />
            <main>{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
