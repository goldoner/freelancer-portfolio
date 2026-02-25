import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LanguageProvider } from "@/components/ui/language-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://aleksandr-grek.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Aleksandr Grek — Senior Backend & Full-Stack Engineer",
  description:
    "Freelance Senior Software Engineer based in Vienna, Austria. 6+ years in Java, Spring Boot, microservices, and Kubernetes. Former Porsche Informatik. Available for DACH and international projects.",
  keywords: [
    "freelance backend engineer Vienna",
    "Java Spring Boot freelancer Austria",
    "microservices architect DACH",
    "senior software engineer Vienna",
    "Kubernetes developer freelance",
    "full-stack engineer Austria",
    "Porsche Informatik engineer",
    "Spring Boot consultant",
    "freelance Java developer",
    "Aleksandr Grek",
  ],
  authors: [{ name: "Aleksandr Grek", url: BASE_URL }],
  creator: "Aleksandr Grek",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aleksandr Grek — Senior Backend & Full-Stack Engineer",
    description:
      "Freelance Senior Software Engineer. Java · Spring Boot · Kubernetes · TypeScript. Vienna, Austria.",
    type: "website",
    url: BASE_URL,
    siteName: "Aleksandr Grek",
    locale: "en_US",
    images: [
      {
        url: "/Personal Icon.png",
        width: 400,
        height: 400,
        alt: "Aleksandr Grek",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Aleksandr Grek — Senior Backend & Full-Stack Engineer",
    description:
      "Freelance Senior Software Engineer. Java · Spring Boot · Kubernetes · TypeScript. Vienna, Austria.",
    images: ["/Personal Icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aleksandr Grek",
  jobTitle: "Senior Backend & Full-Stack Software Engineer",
  description:
    "Freelance Senior Software Engineer based in Vienna, Austria. 6+ years in Java, Spring Boot, microservices, and Kubernetes. Former Porsche Informatik.",
  url: BASE_URL,
  email: "goldoner@gmail.com",
  sameAs: [
    "https://github.com/goldoner",
    "https://www.linkedin.com/in/aleksandr-grek-79137b1a8/",
    "https://t.me/goldoner",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vienna",
    addressCountry: "AT",
  },
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Microservices",
    "Kubernetes",
    "OpenShift",
    "Apache Kafka",
    "TypeScript",
    "Next.js",
    "Domain-Driven Design",
    "CI/CD",
    "PostgreSQL",
  ],
  knowsLanguage: ["en", "de", "ru"],
  worksFor: {
    "@type": "Organization",
    name: "Aleksandr Grek e.U.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vienna",
      addressCountry: "AT",
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-black">
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
