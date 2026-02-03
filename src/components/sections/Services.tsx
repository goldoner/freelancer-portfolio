"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MouseSpotlight } from "@/components/ui/spotlight";
import { AnimatedBackground } from "@/components/ui/animated-background";

const services = [
  {
    icon: "⚙️",
    title: "Backend Development",
    desc: "Production-grade Java & Spring Boot services — from greenfield microservices to hardened monoliths, built for scale and maintainability.",
  },
  {
    icon: "🏗️",
    title: "Microservices Architecture",
    desc: "Design and implementation of event-driven, distributed systems using Kafka, RabbitMQ, and REST — with Domain-Driven Design as the compass.",
  },
  {
    icon: "🔄",
    title: "Legacy System Migration",
    desc: "Systematic modernisation of aging codebases — strangler fig patterns, incremental refactoring, zero-downtime migrations.",
  },
  {
    icon: "🔗",
    title: "REST API Development",
    desc: "Clean, versioned, documented APIs with Spring Security, OAuth2, and JWT. Integration-friendly from day one.",
  },
  {
    icon: "🚀",
    title: "CI/CD & DevOps",
    desc: "End-to-end pipeline setup with GitLab CI/CD, Docker, Kubernetes, and OpenShift. From commit to production, automated.",
  },
  {
    icon: "🗄️",
    title: "Database Design & Optimisation",
    desc: "PostgreSQL schema design, query tuning, Redis caching strategies, and Elasticsearch integration for search-heavy workloads.",
  },
  {
    icon: "🖥️",
    title: "Full-Stack Development",
    desc: "Angular + Java full-stack delivery. TypeScript, Next.js, and modern frontend practices when the project demands it.",
  },
  {
    icon: "☁️",
    title: "Cloud Deployment",
    desc: "Kubernetes, OpenShift, and AWS deployments. Infrastructure-as-code mindset, cost-aware and production-ready.",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "Embed AI capabilities into existing systems — LLM-backed features, smart automation, and AI-assisted workflows that ship faster.",
  },
  {
    icon: "🔍",
    title: "Code Review & Performance",
    desc: "Deep dives into bottlenecks, thread safety, N+1 queries, and architectural anti-patterns. Actionable reports with fixes.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative bg-white dark:bg-black py-24 px-4 overflow-hidden">
      <AnimatedBackground variant={2} />
      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-purple-600 dark:text-purple-400 uppercase">Services</span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">What I can build for you</h2>
          <p className="mt-4 text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            From architecture decisions to production deployments — I own the full lifecycle.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <MouseSpotlight className="h-full rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 p-6 hover:border-purple-500/40 transition-colors duration-300">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">{service.desc}</p>
              </MouseSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
