"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { useLanguage } from "@/components/ui/language-provider";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const c = t.contact;

  const links = [
    {
      icon: <Mail size={20} />,
      label: c.emailLabel,
      value: "goldoner@gmail.com",
      href: "mailto:goldoner@gmail.com",
    },
    {
      icon: <GithubIcon size={20} />,
      label: "GitHub",
      value: "github.com/goldoner",
      href: "https://github.com/goldoner",
    },
    {
      icon: <LinkedinIcon size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/aleksandr-grek",
      href: "https://www.linkedin.com/in/aleksandr-grek-79137b1a8/",
    },
    {
      icon: <MapPin size={20} />,
      label: c.locationLabel,
      value: "1100 Vienna, Austria",
      href: "https://maps.google.com/?q=Vienna+Austria",
    },
  ];

  return (
    <section id="contact" className="relative bg-white dark:bg-black py-24 px-4 overflow-hidden">
      <AnimatedBackground variant={6} />
      <div className="relative z-10 max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-purple-600 dark:text-purple-400 uppercase">{c.label}</span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">{c.title}</h2>
          <p className="mt-4 text-gray-600 dark:text-zinc-400 max-w-xl mx-auto">{c.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 p-4 hover:border-purple-500/40 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200 group"
            >
              <div className="text-gray-500 dark:text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 shrink-0">
                {link.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-zinc-500">{link.label}</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="mailto:goldoner@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-4 text-lg transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/25"
          >
            <Mail size={20} />
            {c.send}
          </a>
        </motion.div>
      </div>

      <div className="mt-20 border-t border-gray-200 dark:border-zinc-900 pt-8 text-center text-sm text-gray-400 dark:text-zinc-600">
        <p>© {new Date().getFullYear()} {c.footer}</p>
      </div>
    </section>
  );
}
