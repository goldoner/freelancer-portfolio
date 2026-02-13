"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatedBackground } from "@/components/ui/animated-background";

const TypewriterEffectSmooth = dynamic(
  () => import("@/components/ui/typewriter-effect").then((m) => m.TypewriterEffectSmooth),
  {
    ssr: false,
    loading: () => (
      <span className="text-gray-900 dark:text-white font-bold">Full Stack Engineer.</span>
    ),
  }
);
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";

const roles = [
  { text: "Full" },
  { text: "Stack" },
  { text: "Engineer.", className: "text-purple-500" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden">

      <AnimatedBackground variant={0} />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 relative"
        >
          <div className="relative h-28 w-28 rounded-full overflow-hidden ring-2 ring-purple-500/40 ring-offset-2 ring-offset-white dark:ring-offset-black">
            <Image
              src="/Personal Icon.png"
              alt="Aleksandr Grek"
              fill
              sizes="112px"
              className="object-cover"
              priority
            />
          </div>
          <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-green-500 ring-2 ring-white dark:ring-black" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-700 dark:text-purple-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
          </span>
          Available for freelance projects · Vienna, Austria
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-2"
        >
          Aleksandr Grek
        </motion.h1>

        <div className="flex items-baseline justify-center text-2xl sm:text-3xl md:text-5xl font-bold mb-6 max-w-full overflow-hidden">
          <span className="text-gray-500 dark:text-zinc-400 mr-3">Senior</span>
          <TypewriterEffectSmooth
            words={roles}
            className="my-0"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          6+ years building scalable backend systems, microservices, and full-stack applications. Former{" "}
          <span className="text-gray-900 dark:text-white font-medium">Porsche Informatik</span> engineer,
          now helping DACH and international clients ship faster with{" "}
          <span className="text-purple-600 dark:text-purple-400 whitespace-nowrap">Java · Spring Boot · TypeScript</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:goldoner@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Mail size={18} />
            Hire Me
          </a>
          <a
            href="https://github.com/goldoner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 hover:border-gray-400 bg-gray-100 hover:bg-gray-200 dark:border-zinc-700 dark:hover:border-zinc-500 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-gray-900 dark:text-white font-semibold px-6 py-3 transition-all duration-200"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aleksandr-grek-79137b1a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 hover:border-gray-400 bg-gray-100 hover:bg-gray-200 dark:border-zinc-700 dark:hover:border-zinc-500 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-gray-900 dark:text-white font-semibold px-6 py-3 transition-all duration-200"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex flex-col items-center gap-2 text-gray-400 dark:text-zinc-600"
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
