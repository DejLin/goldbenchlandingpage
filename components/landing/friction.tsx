"use client";

import { motion } from "framer-motion";
import { Scale, FileText, Image, Bell, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const icons = [Scale, FileText, Image, Bell];

export function Friction() {
  const { t } = useLanguage();
  const dragLabel = t.friction.dragLabel ?? "";
  const fixLabel = t.friction.fixLabel ?? "";

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
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-platinum mb-6 tracking-tight text-balance">
            {t.friction.title}
          </h2>
          <p className="text-platinum/60 text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            {t.friction.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.friction.points.map((rawPoint, index) => {
            // `t` is always typed as the English shape, but locales not yet
            // translated to the drag/fix format still carry `description`.
            const point = rawPoint as {
              title: string;
              drag?: string;
              fix?: string;
              description?: string;
            };
            const IconComponent = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col p-8 md:p-10 bg-obsidian border border-white/[0.06] hover:border-gold/30 transition-all duration-500"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-gold/50" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gold/50" />

                {/* Header: icon + title */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-12 h-12 shrink-0 flex items-center justify-center border border-white/[0.08] group-hover:border-gold/30 transition-colors duration-500">
                    <IconComponent
                      className="w-5 h-5 text-platinum/60 group-hover:text-gold transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-medium text-platinum tracking-wide group-hover:text-white transition-colors duration-500 text-balance">
                    {point.title}
                  </h3>
                </div>

                {point.fix ? (
                  <div className="flex flex-col gap-6 flex-1">
                    {/* The Drag — muted, subtle warning tint */}
                    <div>
                      <span className="inline-block text-[10px] font-medium tracking-[0.25em] uppercase text-gold-dark/90 mb-2">
                        {dragLabel}
                      </span>
                      <p className="text-platinum/50 leading-relaxed text-sm">
                        {point.drag}
                      </p>
                    </div>

                    {/* The Fix — elevated, gold accent so the solution pops */}
                    <div className="mt-auto relative border-l-2 border-gold/70 bg-gold/[0.04] pl-4 pr-4 py-4">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.25em] uppercase text-gold mb-2">
                        <ArrowRight className="w-3 h-3" strokeWidth={2} />
                        {fixLabel}
                      </span>
                      <p className="text-platinum/90 leading-relaxed text-sm">
                        {point.fix}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Fallback for locales not yet translated to the drag/fix format */
                  <p className="text-platinum/60 leading-relaxed text-sm group-hover:text-platinum/80 transition-colors duration-500">
                    {point.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
