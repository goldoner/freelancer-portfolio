"use client";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Rates", href: "#rates" },
  { label: "Contact", href: "#contact" },
];

function HintBubble({ align, theme }: { align: "center" | "right"; theme: "light" | "dark" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6, scale: 0.88 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -4, scale: 0.92 }}
      transition={{ type: "spring", stiffness: 340, damping: 26 }}
      className={`absolute top-full mt-3 z-50 pointer-events-none ${
        align === "right" ? "right-0" : "left-1/2 -translate-x-1/2"
      }`}
    >
      <div
        className={`absolute -top-1.5 w-3 h-3 rotate-45 bg-gray-900 dark:bg-zinc-100 rounded-sm ${
          align === "right" ? "right-3" : "left-1/2 -translate-x-1/2"
        }`}
      />
      <div className="relative bg-gray-900 dark:bg-zinc-100 text-white dark:text-gray-900 text-xs font-medium px-3 py-2 rounded-xl shadow-xl whitespace-nowrap">
        {theme === "dark" ? "Try light mode ☀️" : "Try dark mode 🌙"}
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const [showHint, setShowHint] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const show = setTimeout(() => setShowHint(true), 1400);
    return () => clearTimeout(show);
  }, []);

  useEffect(() => {
    if (!showHint) return;
    const hide = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(hide);
  }, [showHint]);

  const handleToggle = () => {
    toggle();
    setShowHint(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/60 dark:border-zinc-800/60 shadow-lg shadow-gray-200/20 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-gray-900 dark:text-white font-bold text-lg tracking-tight">
          AG<span className="text-purple-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="relative">
            <button
              onClick={handleToggle}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <AnimatePresence>
              {showHint && <HintBubble align="center" theme={theme} />}
            </AnimatePresence>
          </div>
          <a
            href="mailto:goldoner@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-1.5 transition-all duration-200"
          >
            <Mail size={14} />
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <div className="relative">
            <button
              onClick={handleToggle}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <AnimatePresence>
              {showHint && <HintBubble align="right" theme={theme} />}
            </AnimatePresence>
          </div>
          <button
            className="text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 px-4 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:goldoner@gmail.com"
            className="block text-center rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-2 transition-all"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
