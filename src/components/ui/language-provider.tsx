"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { type Lang, translations, type Translations } from "@/lib/i18n";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    const detected =
      stored ?? (navigator.language.toLowerCase().startsWith("de") ? "de" : "en");
    applyLang(detected);
    setLangState(detected);
  }, []);

  function applyLang(l: Lang) {
    document.documentElement.lang = l;
  }

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("lang", l);
    applyLang(l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}
