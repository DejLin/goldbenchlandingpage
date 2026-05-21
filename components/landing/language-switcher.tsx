"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="relative">
      {/* Current language button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 border border-platinum/20 hover:border-gold/40 bg-obsidian/80 backdrop-blur-sm transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center justify-center w-5 h-3 overflow-hidden rounded-[2px]">
          {flags[language]}
        </span>
        <span className="text-[10px] tracking-[0.2em] text-platinum/80 uppercase font-medium">
          {currentLang?.label}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-3 h-3 text-platinum/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown menu */}
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full right-0 mt-1 z-50 min-w-[120px] bg-obsidian/95 backdrop-blur-md border border-platinum/20 overflow-hidden"
            >
              {/* Gold accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                    language === lang.code
                      ? "bg-gold/10 text-gold"
                      : "text-platinum/70 hover:bg-platinum/5 hover:text-platinum"
                  }`}
                >
                  <span className="flex items-center justify-center w-5 h-3 overflow-hidden rounded-[2px]">
                    {flags[lang.code]}
                  </span>
                  <span className="text-[11px] tracking-[0.15em] uppercase font-medium">
                    {lang.label}
                  </span>
                  {language === lang.code && (
                    <motion.div
                      layoutId="activeLanguage"
                      className="ml-auto w-1.5 h-1.5 bg-gold rounded-full"
                    />
                  )}
                </motion.button>
              ))}
              
              {/* Gold accent line at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
