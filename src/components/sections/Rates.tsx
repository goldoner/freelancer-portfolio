"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Mail } from "lucide-react";
import { useLanguage } from "@/components/ui/language-provider";

const platforms = [
  { name: "Freelancermap", flag: "🗂️" },
  { name: "GULP", flag: "🔍" },
  { name: "Malt", flag: "🧡" },
  { name: "Upwork", flag: "🌐" },
  { name: "Fiverr", flag: "💚" },
];

export default function Rates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const r = t.rates;

  return (
    <section id="rates" className="bg-gray-50 dark:bg-zinc-950 py-24 px-4">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-purple-600 dark:text-purple-400 uppercase">{r.label}</span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">{r.title}</h2>
          <p className="mt-4 text-gray-600 dark:text-zinc-400 max-w-xl mx-auto">{r.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-purple-500/40 bg-purple-500/5 p-8 mb-10"
        >
          <div className="text-center mb-8">
            <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">{r.cta}</p>
            <p className="text-gray-600 dark:text-zinc-400">{r.model}</p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {r.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-700 dark:text-zinc-300">
                <Check size={15} className="text-purple-600 dark:text-purple-400 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="text-center">
            <a
              href="mailto:goldoner@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Mail size={16} />
              {r.getInTouch}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 dark:text-zinc-500 mb-5">{r.alsoOn}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((p) => (
              <span
                key={p.name}
                className="rounded-full border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-1.5 text-sm text-gray-600 dark:text-zinc-400"
              >
                {p.flag} {p.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
