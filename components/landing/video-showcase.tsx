"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

// Video sources map by index to `t.videoShowcase.features`.
const VIDEO_SOURCES = [
  "/videos/goldbench-intro.mp4",
  "/videos/elin-scans-bill.mp4",
];

const SLIDE_DURATION = 10000; // ms per feature before auto-advancing

export function VideoShowcase() {
  const { t } = useLanguage();
  const features = t.videoShowcase.features;

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setProgress(0);
    startRef.current = 0;
  }, []);

  // Drive the progress bar + auto-advance with a single rAF loop.
  useEffect(() => {
    startRef.current = 0;

    const tick = (now: number) => {
      if (startRef.current === 0) startRef.current = now;
      const elapsed = now - startRef.current;
      const pct = Math.min(elapsed / SLIDE_DURATION, 1);
      setProgress(pct);

      if (pct >= 1) {
        setActive((prev) => (prev + 1) % features.length);
        setProgress(0);
        startRef.current = 0;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, features.length]);

  return (
    <section className="bg-obsidian pt-4 pb-24 md:pt-8 md:pb-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gold/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-5">
            {t.videoShowcase.label}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight text-balance max-w-3xl mx-auto">
            {t.videoShowcase.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Video — first on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2"
          >
            {/* Gold bezel */}
            <div className="rounded-2xl p-px bg-gradient-to-b from-gold/40 via-white/[0.08] to-gold/20">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.8)] aspect-video bg-obsidian">
                <AnimatePresence mode="wait">
                  <motion.video
                    key={active}
                    src={VIDEO_SOURCES[active % VIDEO_SOURCES.length]}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-l border-t border-gold/40 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r border-b border-gold/40 pointer-events-none" />
          </motion.div>

          {/* Interactive text menu — second on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2 lg:order-1 flex flex-col gap-2"
          >
            {features.map((feature, index) => {
              const isActive = index === active;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-current={isActive}
                  className={`group text-left rounded-xl border p-6 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${
                    isActive
                      ? "border-gold/30 bg-white/[0.03]"
                      : "border-transparent hover:border-white/[0.08] hover:bg-white/[0.015]"
                  }`}
                >
                  <h3
                    className={`font-serif text-xl md:text-2xl font-light tracking-tight transition-colors duration-500 ${
                      isActive ? "text-platinum" : "text-platinum/50 group-hover:text-platinum/70"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-platinum/60 leading-relaxed pt-3 pb-4">
                          {feature.description}
                        </p>
                        {/* Progress bar */}
                        <div className="h-px w-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full bg-gold"
                            style={{
                              width: `${progress * 100}%`,
                              transition: "width 80ms linear",
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
