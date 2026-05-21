"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { languages, Language } from "@/lib/translations";

// Flag SVG components for crisp rendering
const flags: Record<Language, JSX.Element> = {
  en: (
    <svg viewBox="0 0 60 30" className="w-5 h-3">
      <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  ),
  de: (
    <svg viewBox="0 0 5 3" className="w-5 h-3">
      <rect width="5" height="3" y="0" fill="#000"/>
      <rect width="5" height="2" y="1" fill="#D00"/>
      <rect width="5" height="1" y="2" fill="#FFCE00"/>
    </svg>
  ),
  fr: (
    <svg viewBox="0 0 3 2" className="w-5 h-3">
      <rect width="3" height="2" fill="#ED2939"/>
      <rect width="2" height="2" fill="#fff"/>
      <rect width="1" height="2" fill="#002395"/>
    </svg>
  ),
  it: (
    <svg viewBox="0 0 3 2" className="w-5 h-3">
      <rect width="3" height="2" fill="#CE2B37"/>
      <rect width="2" height="2" fill="#fff"/>
      <rect width="1" height="2" fill="#009246"/>
    </svg>
  ),
};

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 bg-obsidian/90 backdrop-blur-md border border-platinum/20 p-1.5 rounded-sm"
    >
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative flex items-center gap-2 px-2 py-1.5 rounded-sm transition-all duration-200 ${
            language === lang.code
              ? "bg-gold/15 text-gold"
              : "text-platinum/60 hover:bg-platinum/10 hover:text-platinum"
          }`}
        >
          {/* Active indicator bar */}
          {language === lang.code && (
            <motion.div
              layoutId="activeLang"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-gold rounded-full"
            />
          )}
          
          <span className="flex items-center justify-center w-5 h-3 overflow-hidden rounded-[2px] ml-1">
            {flags[lang.code]}
          </span>
          
          {/* Show label on larger screens only */}
          <span className="hidden md:block text-[10px] tracking-[0.15em] uppercase font-medium">
            {lang.code}
          </span>
        </motion.button>
      ))}
      
      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </motion.div>
  );
}
