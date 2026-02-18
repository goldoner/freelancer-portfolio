"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, GraduationCap, Languages } from "lucide-react";
import { useLanguage } from "@/components/ui/language-provider";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const a = t.about;

  const highlights = [
    {
      icon: <Briefcase size={20} className="text-purple-600 dark:text-purple-400" />,
      label: a.highlightExperience,
      value: "6+ years",
    },
    {
      icon: <MapPin size={20} className="text-purple-600 dark:text-purple-400" />,
      label: a.highlightLocation,
      value: "Vienna, Austria",
    },
    {
      icon: <GraduationCap size={20} className="text-purple-600 dark:text-purple-400" />,
      label: a.highlightDegree,
      value: "BSc Computer Science",
    },
    {
      icon: <Languages size={20} className="text-purple-600 dark:text-purple-400" />,
      label: a.highlightLanguages,
      value: "DE · EN · RU",
    },
  ];

  return (
    <section id="about" className="bg-gray-50 dark:bg-zinc-950 py-24 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-purple-600 dark:text-purple-400 uppercase">{a.label}</span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">{a.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-gray-600 dark:text-zinc-400 leading-relaxed"
          >
            <p>
              {a.p1a}
              <span className="text-gray-900 dark:text-white">University of Salzburg</span>
              {a.p1b}
            </p>
            <p>
              {a.p2a}
              <span className="text-gray-900 dark:text-white">GridData</span>
              {a.p2b}
              <span className="text-gray-900 dark:text-white">Porsche Informatik</span>
              {a.p2c}
            </p>
            <p>{a.p3}</p>
            <p>
              {a.p4a}
              <span className="text-gray-900 dark:text-white">Aleksandr Grek e.U.</span>
              {a.p4b}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3"
                >
                  {h.icon}
                  <div>
                    <p className="text-xs text-gray-500 dark:text-zinc-500">{h.label}</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{h.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{a.setsApart}</h3>
            {a.usps.map((usp, i) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:border-purple-500/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{usp.title}</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">{usp.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
