"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Core Backend",
    items: ["Java", "Spring Boot", "Micronaut", "Python", "REST APIs", "GraphQL"],
  },
  {
    label: "Frontend",
    items: ["TypeScript", "Angular", "Next.js", "React", "iOS (Swift)"],
  },
  {
    label: "Messaging & Search",
    items: ["Apache Kafka", "RabbitMQ", "Elasticsearch", "Redis"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis", "Liquibase"],
  },
  {
    label: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "OpenShift", "AWS", "GitLab CI/CD", "Terraform"],
  },
  {
    label: "Security & Architecture",
    items: ["Spring Security", "OAuth2 / JWT", "Domain-Driven Design", "Microservices", "Event-Driven"],
  },
];

export default function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="bg-zinc-950 py-24 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase">Tech Stack</span>
          <h2 className="mt-2 text-4xl font-bold text-white">Tools of the trade</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <h3 className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300 hover:border-purple-500/60 hover:text-purple-300 transition-colors duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
