"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Hourglass, Banknote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const WEEKS_PER_YEAR = 46;
const RECLAIM_RATE = 0.8;

/** Animates a number toward its target with an ease-out ramp. */
function CountUp({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);

  useEffect(() => {
    const from = fromRef.current;
    if (from === value) return;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const p = Math.min((now - start) / 600, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(from + (value - from) * eased);
      if (p < 1) raf = requestAnimationFrame(step);
      else fromRef.current = value;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <>
      {display.toLocaleString("de-CH", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </>
  );
}

function GoldSlider({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  const fill = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <label className="text-platinum/70 text-sm tracking-wide">
          {label}
        </label>
        <span className="font-mono text-gold text-xl">
          {value}
          <span className="text-gold/60 text-sm ml-1">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="gold-range"
        style={{ "--fill": `${fill}%` } as React.CSSProperties}
        aria-label={label}
      />
    </div>
  );
}

export function BenchCalculator() {
  const { t } = useLanguage();
  const [hours, setHours] = useState(8);
  const [rate, setRate] = useState(120);

  const hoursPerYear = hours * WEEKS_PER_YEAR;
  const moneyPerYear = hoursPerYear * rate;
  const reclaimedHours = Math.round(hoursPerYear * RECLAIM_RATE);

  return (
    <section
      className="py-24 md:py-32 bg-obsidian relative overflow-hidden"
      aria-label="Rechner: Zeit- und Kostenersparnis pro Jahr"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">
            {t.calculator.label}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight mb-4 text-balance">
            {t.calculator.title}
          </h2>
          <p className="text-platinum/60 text-lg max-w-xl mx-auto">
            {t.calculator.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6"
        >
          {/* Controls */}
          <div className="border border-white/[0.08] bg-charcoal/40 p-8 md:p-10 flex flex-col justify-center gap-10 relative">
            <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-gold/50" />
            <GoldSlider
              label={t.calculator.hoursLabel}
              value={hours}
              min={1}
              max={20}
              step={1}
              unit="h"
              onChange={setHours}
            />
            <GoldSlider
              label={t.calculator.rateLabel}
              value={rate}
              min={60}
              max={250}
              step={5}
              unit="CHF"
              onChange={setRate}
            />
            <p className="text-platinum/30 text-xs leading-relaxed">
              {t.calculator.footnote}
            </p>
          </div>

          {/* Results */}
          <div className="border border-white/[0.08] bg-charcoal/40 relative">
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gold/50" />

            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
              <div className="p-8 md:p-10">
                <Hourglass
                  className="w-5 h-5 text-gold/60 mb-6"
                  strokeWidth={1.5}
                />
                <p className="font-mono text-4xl md:text-5xl text-platinum font-light mb-3">
                  <CountUp value={hoursPerYear} />
                </p>
                <p className="text-platinum/50 text-sm leading-relaxed">
                  {t.calculator.hoursPerYear}
                </p>
              </div>
              <div className="p-8 md:p-10">
                <Banknote
                  className="w-5 h-5 text-gold/60 mb-6"
                  strokeWidth={1.5}
                />
                <p className="font-mono text-4xl md:text-5xl text-gold font-light mb-3">
                  <CountUp value={moneyPerYear} />
                  <span className="text-gold/50 text-lg ml-2">CHF</span>
                </p>
                <p className="text-platinum/50 text-sm leading-relaxed">
                  {t.calculator.moneyPerYear}
                </p>
              </div>
            </div>

            {/* Reclaim banner */}
            <div className="border-t border-gold/20 bg-gold/[0.05] p-8 md:px-10 md:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <p className="text-platinum/80 text-sm md:text-base">
                {t.calculator.reclaimTitle}{" "}
                <span className="font-mono text-gold text-xl md:text-2xl mx-1">
                  <CountUp value={reclaimedHours} />
                </span>{" "}
                {t.calculator.reclaimUnit}
              </p>
              <Link href="/early-access" className="shrink-0">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-6 py-3 bg-gold text-obsidian font-medium tracking-wider uppercase text-xs overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
                >
                  <span className="relative z-10">{t.hero.cta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
