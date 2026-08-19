"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations, Translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const SUPPORTED_LANGUAGES: Language[] = ["de", "en", "fr", "it"];

// Match the browser's preferred languages against what we support.
// Returns the first supported match (by the visitor's own priority order),
// or "de" as the Swiss-first default when nothing matches.
function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "de";

  const preferences =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  for (const pref of preferences) {
    // Normalize e.g. "de-CH" / "fr-FR" down to the base "de" / "fr".
    const base = pref.toLowerCase().split("-")[0] as Language;
    if (SUPPORTED_LANGUAGES.includes(base)) {
      return base;
    }
  }

  return "de";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Launching in Switzerland first, so German is the default until a visitor
  // explicitly chooses another language (persisted in localStorage).
  const [language, setLanguageState] = useState<Language>("de");

  useEffect(() => {
    // A previously saved manual choice always wins.
    const saved = localStorage.getItem("goldbench-language") as Language;
    if (saved && translations[saved]) {
      setLanguageState(saved);
      return;
    }

    // First visit: detect the visitor's preferred browser language.
    // Fall back to German, since we launch in Switzerland first.
    const detected = detectBrowserLanguage();
    if (detected !== "de") {
      setLanguageState(detected);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("goldbench-language", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
