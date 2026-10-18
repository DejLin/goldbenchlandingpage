"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

type ComparisonCopy = (typeof translations)["en"]["comparison"];

function PriceBlock({ c }: { c: ComparisonCopy }) {
  return (
    <div className="mt-3">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-serif text-3xl text-gold leading-none">
          {c.footerPriceNew}
          <span className="font-sans text-sm text-platinum/70">{c.footerPricePeriod}</span>
        </span>
        <span className="text-platinum/50 text-sm line-through">
          <span className="sr-only">Regular price </span>
          {c.footerPriceOld}
          {c.footerPricePeriod}
        </span>
        <span className="bg-gold text-obsidian text-[11px] font-medium uppercase tracking-wider px-2 py-0.5">
          {c.footerPriceBadge}
        </span>
      </div>
      <p className="text-gold/90 text-sm mt-2">{c.footerPriceNote}</p>
    </div>
  );
}

export function Comparison() {
  const { t } = useLanguage();
  // Falls back to English until the other locales are translated
  const c = t.comparison ?? translations.en.comparison;

  return (
    <section
      id="comparison"
      className="py-24 md:py-32 bg-obsidian relative overflow-hidden"
      aria-labelledby="comparison-title"
    >
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">{c.label}</p>
          <h2
            id="comparison-title"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight text-balance mb-4"
          >
            {c.title}
          </h2>
          <p className="text-platinum/60 text-lg leading-relaxed text-pretty">{c.subtitle}</p>
        </motion.header>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">{c.title}</caption>
            <thead>
              <tr>
                <th scope="col" className="w-1/4 pb-4 text-left text-[11px] font-normal uppercase tracking-[0.25em] text-platinum/40">
                  {c.colTask}
                </th>
                <th scope="col" className="w-1/3 pb-4 px-5 text-left text-[11px] font-normal uppercase tracking-[0.25em] text-platinum/40">
                  {c.colTraditional}
                </th>
                <th
                  scope="col"
                  className="pb-4 pt-4 px-5 text-left font-serif text-xl font-normal text-gold border-x border-t border-gold bg-gold/10"
                >
                  {c.colGoldbench}
                </th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row) => (
                <tr key={row.task} className="border-t border-glass-border">
                  <th scope="row" className="py-5 pr-4 text-left font-medium text-platinum">
                    {row.task}
                  </th>
                  <td className="py-5 px-5 text-platinum/40">
                    <span className="flex items-center gap-2.5">
                      <X className="w-4 h-4 shrink-0 text-platinum/30" aria-hidden="true" />
                      {row.traditional}
                    </span>
                  </td>
                  <td className="py-5 px-5 border-x border-gold bg-gold/10">
                    <span className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2.5 font-medium text-platinum">
                        <Check className="w-4 h-4 shrink-0 text-gold" aria-hidden="true" />
                        {row.goldbench}
                      </span>
                      <span className="shrink-0 whitespace-nowrap rounded-full border border-gold/40 bg-gold/15 px-2.5 py-0.5 text-[11px] font-medium text-gold">
                        {row.badge}
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-glass-border">
                <td className="pt-6 pb-6" />
                <td className="pt-6 pb-6 px-5 align-top text-platinum/50 leading-relaxed">
                  {c.footerTraditional}
                </td>
                <td className="pt-6 pb-6 px-5 border-x border-b border-gold bg-gold/10">
                  <p className="font-medium text-platinum leading-relaxed">{c.footerGoldbench}</p>
                    <PriceBlock c={c} />
                    <p className="text-platinum/60 text-sm mt-1 mb-4">{c.footerLaunch}</p>
                  <CtaButton label={c.cta} />
                </td>
              </tr>
            </tfoot>
          </table>
        </motion.div>

        {/* Mobile stacked cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {c.rows.map((row) => (
            <article key={row.task} className="border border-glass-border bg-obsidian-light p-5">
              <h3 className="font-medium text-platinum mb-4">{row.task}</h3>
              <p className="flex items-start gap-2.5 text-sm text-platinum/40 mb-3">
                <X className="w-4 h-4 mt-0.5 shrink-0 text-platinum/30" aria-hidden="true" />
                <span>
                  <span className="sr-only">{c.colTraditional}: </span>
                  {row.traditional}
                </span>
              </p>
              <div className="flex flex-col gap-3 border border-gold bg-gold/10 p-4">
                <p className="flex items-start gap-2.5 text-sm font-medium text-platinum">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    <span className="sr-only">{c.colGoldbench}: </span>
                    {row.goldbench}
                  </span>
                </p>
                <span className="self-start rounded-full border border-gold/40 bg-gold/15 px-2.5 py-0.5 text-[11px] font-medium text-gold">
                  {row.badge}
                </span>
              </div>
            </article>
          ))}

          <div className="flex flex-col gap-4 border border-gold bg-gold/10 p-5">
            <p className="text-sm text-platinum/50">
              <span className="sr-only">{c.colTraditional}: </span>
              {c.footerTraditional}
            </p>
            <div>
              <p className="font-medium text-platinum leading-relaxed">{c.footerGoldbench}</p>
                <PriceBlock c={c} />
                <p className="text-platinum/60 text-sm mt-1">{c.footerLaunch}</p>
            </div>
            <CtaButton label={c.cta} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaButton({ label }: { label: string }) {
  return (
    <Link
      href="/early-access"
      className="group inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 text-xs font-medium uppercase tracking-wider text-obsidian transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
    >
      {label}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
