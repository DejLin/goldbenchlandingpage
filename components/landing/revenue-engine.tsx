"use client";

import { motion } from "framer-motion";
import { Mic, FileCheck, Lock, ToggleRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const icons = [Mic, FileCheck, Lock, ToggleRight, Sparkles];
const comingSoonIndex = 4;

export function RevenueEngine() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">
            {t.features.label}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight">
            {t.features.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.features.items.map((feature, index) => {
            const IconComponent = icons[index];
            const isComingSoon = index === comingSoonIndex;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 md:p-10 bg-obsidian border border-white/[0.06] hover:border-gold/30 transition-all duration-500 ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Corner accents - top left and bottom right, always visible */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-gold/50" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gold/50" />

                {/* Coming soon badge */}
                {isComingSoon && (
                  <span className="absolute top-4 right-4 text-[9px] tracking-[0.25em] uppercase text-gold/80 border border-gold/20 px-3 py-1.5 bg-gold/[0.05]">
                    {t.features.comingSoon}
                  </span>
                )}

                {/* Icon */}
                <div className="relative w-12 h-12 mb-8 flex items-center justify-center border border-white/[0.08] group-hover:border-gold/30 transition-colors duration-500">
                  <IconComponent
                    className="w-5 h-5 text-platinum/60 group-hover:text-gold transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-lg font-medium mb-4 tracking-wide text-platinum group-hover:text-white transition-colors duration-500">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-sm text-platinum/60 group-hover:text-platinum/80 transition-colors duration-500">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
