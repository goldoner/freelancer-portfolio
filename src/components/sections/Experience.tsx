"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedBackground } from "@/components/ui/animated-background";

const jobs = [
  {
    role: "Software Engineer",
    company: "Porsche Informatik",
    location: "Vienna, Austria",
    period: "Jan 2023 – 2026",
    type: "Full-time",
    bullets: [
      "Designed and delivered high-performance microservices for automotive business-critical systems",
      "Led legacy system migrations using strangler fig patterns with zero production downtime",
      "Deployed and operated services on Kubernetes and OpenShift in enterprise-grade environments",
      "Automated CI/CD pipelines with GitLab — reducing release cycle time significantly",
      "Stack: Java, Spring Boot, PostgreSQL, Kafka, Kubernetes, OpenShift, GitLab CI/CD",
    ],
    accent: "text-yellow-600 dark:text-yellow-400",
    border: "border-yellow-500/30",
    dotBorder: "border-yellow-500/30",
  },
  {
    role: "Software Engineer",
    company: "GridData",
    location: "Traunstein, Germany (Remote)",
    period: "Apr 2021 – Dec 2023",
    type: "Full-time",
    bullets: [
      "Built CI/CD pipeline infrastructure from the ground up, enabling reliable automated releases",
      "Developed data migration tooling for complex dataset transformations",
      "Implemented algorithms for sensor data processing on Raspberry Pi edge hardware",
      "Stack: Java, Python, Docker, GitLab CI/CD, Raspberry Pi",
    ],
    accent: "text-blue-600 dark:text-blue-400",
    border: "border-blue-500/30",
    dotBorder: "border-blue-500/30",
  },
  {
    role: "Freelance Developer",
    company: "Fiverr",
    location: "Remote",
    period: "Nov 2019 – Mar 2021",
    type: "Freelance",
    bullets: [
      "Delivered messenger bots and automation tools for international clients",
      "Applied OOP design patterns to build maintainable, reusable solutions",
      "Contributed to open-source projects alongside client work",
    ],
    accent: "text-green-600 dark:text-green-400",
    border: "border-green-500/30",
    dotBorder: "border-green-500/30",
  },
];

const certs = [
  { name: "High-Performance Spring Persistence", issuer: "Vlad Mihalcea", year: "2023" },
  { name: "Spring Security", issuer: "Udemy", year: "2023" },
  { name: "Full-Stack Web Development with React", issuer: "Coursera", year: "2022" },
  { name: "Service-Oriented Architecture", issuer: "Coursera", year: "2021" },
  { name: "W-JAX Conference", issuer: "Munich", year: "2023" },
  { name: "KanDDDinsky Conference (DDD)", issuer: "Berlin", year: "2024" },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative bg-white dark:bg-black py-24 px-4 overflow-hidden">
      <AnimatedBackground variant={4} />
      <div className="relative z-10 max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-purple-600 dark:text-purple-400 uppercase">Experience</span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">Where I&apos;ve worked</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-zinc-800 hidden md:block" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className={`absolute left-2.5 top-5 h-3 w-3 rounded-full border-2 ${job.dotBorder} bg-white dark:bg-black hidden md:block`} />

                <div className={`rounded-xl border ${job.border} bg-gray-50 dark:bg-zinc-900 p-6 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors duration-300`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">{job.role}</h3>
                      <p className={`font-semibold ${job.accent}`}>{job.company}</p>
                      <p className="text-sm text-gray-500 dark:text-zinc-500">{job.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-600 dark:text-zinc-400">{job.period}</span>
                      <br />
                      <span className="text-xs rounded-full border border-gray-300 dark:border-zinc-700 px-2 py-0.5 text-gray-500 dark:text-zinc-500">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600 dark:text-zinc-400">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-zinc-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Education & Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 p-5">
              <p className="text-xs text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-1">University</p>
              <p className="font-semibold text-gray-900 dark:text-white">Bachelor of Computer Science</p>
              <p className="text-sm text-gray-600 dark:text-zinc-400">University of Salzburg · 2019–2023</p>
            </div>
            {certs.map((c) => (
              <div key={c.name} className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 p-5">
                <p className="text-xs text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-1">{c.issuer} · {c.year}</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{c.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
