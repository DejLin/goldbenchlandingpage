"use client";

import { motion } from "framer-motion";
import { Shield, Database, Lock } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Security() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon cluster */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-3 border border-platinum/10"
            >
              <Database className="w-6 h-6 text-platinum/40" strokeWidth={1} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4 border border-gold/30 bg-gold/5"
            >
              <Shield className="w-8 h-8 text-gold" strokeWidth={1} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-3 border border-platinum/10"
            >
              <Lock className="w-6 h-6 text-platinum/40" strokeWidth={1} />
            </motion.div>
          </div>

          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">
            {t.security.label}
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight mb-8">
            {t.security.title}
          </h2>

          <p className="text-platinum/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            {t.security.description}
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-gold text-lg font-medium tracking-wide"
          >
            {t.security.tagline}
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-12 border-t border-platinum/10"
          >
            {t.security.badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-platinum/50 text-sm">
                <div className="w-2 h-2 bg-gold/60 rounded-full" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
