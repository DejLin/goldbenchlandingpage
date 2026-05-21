"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-obsidian">
      {/* Banner Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/master-burning-metals-high-temperature-GCZMbzefJ2NE8wB3mYVlF0cNzy7sRH.jpg"
          alt="Master goldsmith at work with torch flame"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/40 to-obsidian" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.7)_100%)]" />
      </div>

      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 z-20 p-3 md:p-4"
      >
        <div className="flex items-center justify-between">
          <div className="w-24" /> {/* Spacer for balance */}
          <Logo size="sm" />
          <div className="flex justify-end w-24 -mr-8">
            <LanguageSwitcher />
          </div>
        </div>
      </motion.nav>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 pt-32 md:pt-0">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-platinum leading-tight tracking-tight mb-6">
            {t.hero.title1}
            <br />
            <span className="text-gold">{t.hero.title2}</span>
          </h1>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="my-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-platinum/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Link href="/early-access">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gold text-obsidian font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
              >
                <span className="relative z-10">{t.hero.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
            </Link>
            <p className="text-platinum/50 text-xs mt-4 tracking-wide">
              {t.hero.ctaSubtext}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-platinum/30">{t.hero.scroll}</span>
          <div className="w-px h-12 bg-gradient-to-b from-platinum/30 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-24 md:top-28 left-8 w-12 h-12 border-l border-t border-gold/20" />
      <div className="absolute top-24 md:top-28 right-8 w-12 h-12 border-r border-t border-gold/20" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-gold/20 z-10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-gold/20 z-10" />
    </section>
  );
}
