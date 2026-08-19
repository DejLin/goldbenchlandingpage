"use client";

import { motion } from "framer-motion";
import { Scale, FileText, Image, Bell } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const icons = [Scale, FileText, Image, Bell];

export function Friction() {
  const { t } = useLanguage();

  return (
    <section
      className="py-24 md:py-32 bg-charcoal"
      aria-label="Herausforderungen im Arbeitsalltag von Goldschmieden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">
            {t.friction.label}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-platinum mb-6 tracking-tight">
            {t.friction.title}
          </h2>
          <p className="text-platinum/60 text-lg md:text-xl max-w-2xl mx-auto">
            {t.friction.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {t.friction.points.map((point, index) => {
            const IconComponent = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 md:p-10 bg-obsidian border border-white/[0.06] hover:border-gold/30 transition-all duration-500"
              >
                {/* Corner accents - top left and bottom right, always visible */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-gold/50" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gold/50" />

                {/* Icon */}
                <div className="relative w-12 h-12 mb-8 flex items-center justify-center border border-white/[0.08] group-hover:border-gold/30 transition-colors duration-500">
                  <IconComponent
                    className="w-5 h-5 text-platinum/60 group-hover:text-gold transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl font-medium text-platinum mb-4 tracking-wide group-hover:text-white transition-colors duration-500">
                  {point.title}
                </h3>

                <p className="text-platinum/60 leading-relaxed text-sm group-hover:text-platinum/80 transition-colors duration-500">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
