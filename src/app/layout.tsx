import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aleksandr Grek — Senior Backend & Full-Stack Engineer",
  description:
    "Freelance Senior Software Engineer based in Vienna. 6+ years in Java, Spring Boot, microservices, Kubernetes. Former Porsche Informatik. Available for DACH and international projects.",
  keywords: [
    "freelance backend engineer",
    "Java Spring Boot freelancer",
    "microservices architect",
    "Vienna software engineer",
    "DACH freelancer",
    "Kubernetes developer",
    "full-stack engineer Austria",
  ],
  authors: [{ name: "Aleksandr Grek", url: "https://github.com/goldoner" }],
  openGraph: {
    title: "Aleksandr Grek — Senior Backend & Full-Stack Engineer",
    description:
      "Freelance Senior Software Engineer. Java · Spring Boot · Kubernetes · TypeScript. Vienna, Austria.",
    type: "website",
    locale: "en_US",
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
      <body className="min-h-full flex flex-col bg-white dark:bg-black">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
