"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Mail } from "lucide-react";

const features = [
  "Defined deliverables & timeline",
  "Architecture-to-deployment ownership",
  "Ongoing maintenance retainer options",
  "DACH + international clients welcome",
  "Available via Upwork or direct contract",
  "Registered as Aleksandr Grek e.U. (Austria)",
];

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

  return (
    <section id="rates" className="bg-zinc-950 py-24 px-4">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase">Rates</span>
          <h2 className="mt-2 text-4xl font-bold text-white">Let&apos;s talk about your project</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Every project is different. Reach out and we&apos;ll find the right engagement model —
            fixed-scope, retainer, or hourly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-purple-500/40 bg-purple-500/5 p-8 mb-10"
        >
          <div className="text-center mb-8">
            <p className="text-5xl font-bold text-white mb-2">Let&apos;s talk</p>
            <p className="text-zinc-400">Fixed-scope · Retainer · Hourly — whatever fits your project</p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                <Check size={15} className="text-purple-400 shrink-0" />
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
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-zinc-500 mb-5">Also available on</p>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((p) => (
              <span
                key={p.name}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-400"
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
