"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MouseSpotlight } from "@/components/ui/spotlight";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { useLanguage } from "@/components/ui/language-provider";

const icons = ["⚙️","🏗️","🔄","🔗","🚀","🗄️","🖥️","☁️","🤖","🔍"];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const s = t.services;

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
          <span className="text-sm font-semibold tracking-widest text-purple-600 dark:text-purple-400 uppercase">{s.label}</span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">{s.title}</h2>
          <p className="mt-4 text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">{s.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.items.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <MouseSpotlight className="h-full rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 p-6 hover:border-purple-500/40 transition-colors duration-300">
                <div className="text-3xl mb-4">{icons[i]}</div>
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
