"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative py-32 bg-obsidian">
      {/* Glass border top */}
      <div className="absolute top-0 left-8 right-8 h-px bg-glass-border" />
      
      <div className="px-8 max-w-6xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-platinum-dim/60 mb-4">
            {t.footer.label}
          </p>
          <h2 className="text-[28px] font-light tracking-[-0.02em] text-platinum mb-6">
            {t.footer.title}
          </h2>
          <p className="text-[13px] leading-relaxed text-platinum-dim/60 max-w-md mx-auto mb-10">
            {t.footer.subtitle}
          </p>
          
          {/* CTA Button */}
          <Link href="/early-access">
            <button className="group relative border border-glass-border hover:border-gold/50 bg-transparent px-12 py-4 transition-all duration-500 overflow-hidden">
              <span className="relative z-10 text-[11px] uppercase tracking-[0.3em] text-platinum group-hover:text-gold transition-colors duration-500">
                {t.footer.cta}
              </span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
                }}
              />
            </button>
          </Link>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-glass-border">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-glass-border flex items-center justify-center">
              <span className="text-[10px] tracking-[0.2em] text-gold">GB</span>
            </div>
            <span className="text-[11px] tracking-[0.2em] text-platinum-dim/60 uppercase">
              GoldBench
            </span>
          </div>

          {/* Links - stacked on mobile for better tap targets */}
          <nav className="flex flex-col md:flex-row items-center gap-1 md:gap-6 relative z-[100]">
            <a
              href="/privacy"
              className="block text-[12px] md:text-[10px] uppercase tracking-[0.2em] text-platinum-dim/50 hover:text-gold active:text-gold transition-colors duration-300 py-4 px-6 min-h-[52px] flex items-center justify-center"
            >
              {t.footer.privacy}
            </a>
            <a
              href="/terms"
              className="block text-[12px] md:text-[10px] uppercase tracking-[0.2em] text-platinum-dim/50 hover:text-gold active:text-gold transition-colors duration-300 py-4 px-6 min-h-[52px] flex items-center justify-center"
            >
              {t.footer.terms}
            </a>
            <a
              href="/contact"
              className="block text-[12px] md:text-[10px] uppercase tracking-[0.2em] text-platinum-dim/50 hover:text-gold active:text-gold transition-colors duration-300 py-4 px-6 min-h-[52px] flex items-center justify-center"
            >
              {t.footer.contact}
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-[10px] tracking-[0.15em] text-platinum-dim/30">
            &copy; 2026 Goldbench Beta Project
          </p>
        </div>
      </div>
    </footer>
  );
}
