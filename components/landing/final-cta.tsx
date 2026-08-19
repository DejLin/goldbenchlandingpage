"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "./logo";
import { useLanguage } from "@/lib/language-context";

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section
      className="py-24 md:py-32 bg-obsidian relative overflow-hidden"
      aria-label="Jetzt frühen Zugang sichern"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/melting-gold-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        {/* Dark overlay - 75% opacity for readability */}
        <div className="absolute inset-0 bg-obsidian/75" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.6)_100%)]" />
      </div>
      
      {/* Gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight mb-4">
            {t.finalCta.title1}
          </h2>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            <span className="text-molten italic">{t.finalCta.title2}</span>
          </h2>
          
          <p className="text-platinum/60 text-lg mb-12 max-w-xl mx-auto">
            {t.finalCta.subtitle}
          </p>

          <div className="flex flex-col items-center">
            <Link href="/early-access">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-4 bg-gold text-obsidian font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
              >
                <span className="relative z-10">{t.finalCta.cta}</span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
            </Link>

            <p className="text-platinum/50 text-sm mt-5 tracking-wide">
              {t.finalCta.ctaSubtext}
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 pt-8 border-t border-platinum/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo size="sm" />

            <nav className="flex flex-col md:flex-row items-center gap-0 md:gap-8 text-platinum/40 text-xs tracking-wider relative z-[100]">
              <a href="/privacy" className="hover:text-gold active:text-gold transition-colors py-4 px-6 min-h-[52px] flex items-center justify-center">
                {t.footer.privacy}
              </a>
              <a href="/terms" className="hover:text-gold active:text-gold transition-colors py-4 px-6 min-h-[52px] flex items-center justify-center">
                {t.footer.terms}
              </a>
              <a href="/contact" className="hover:text-gold active:text-gold transition-colors py-4 px-6 min-h-[52px] flex items-center justify-center">
                {t.footer.contact}
              </a>
            </nav>

            <p className="text-platinum/30 text-xs">
              {t.finalCta.location}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
