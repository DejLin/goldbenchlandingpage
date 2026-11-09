"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, ArrowRight, LayoutGrid, Handshake, FileLock2, Unlock } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { LimitedSpots } from "./limited-spots";

type TrialCopy = (typeof translations)["en"]["comparison"]["trial"];

const perkIcons = [LayoutGrid, Handshake, FileLock2, Unlock];

function TrialCard({ trial }: { trial: TrialCopy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative mt-10 border border-gold/60 bg-obsidian-light p-6 shadow-[0_0_60px_rgba(212,175,55,0.12)] md:p-10"
      aria-labelledby="trial-title"
    >
      <p className="inline-flex border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-gold md:text-[11px]">
        {trial.badge}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
        <h3 id="trial-title" className="font-serif text-5xl font-medium leading-none text-gold lining-nums md:text-6xl">
          {trial.headline}
        </h3>
        <span className="rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs font-medium text-gold">
          {trial.pricePill}
        </span>
      </div>

      <p className="mt-4 max-w-xl text-base leading-relaxed text-platinum/70 text-pretty">
        {trial.subtitle}
      </p>

      <ul className="mt-8 grid grid-cols-1 gap-px border border-glass-border bg-glass-border sm:grid-cols-2">
        {trial.perks.map((perk, i) => {
          const Icon = perkIcons[i] ?? Check;
          return (
            <li key={perk.title} className="flex items-start gap-4 bg-obsidian-light p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/40 bg-gold/10">
                <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-medium text-platinum">{perk.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-platinum/55">{perk.description}</span>
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-start gap-3">
          <LimitedSpots />
          <p className="max-w-md text-xs leading-relaxed text-platinum/45">{trial.postTrialNote}</p>
        </div>
        <CtaButton label={trial.cta} />
      </div>
    </motion.div>
  );
}

export function Comparison() {
  const { t } = useLanguage();
  const c = t.comparison ?? translations.en.comparison;
  // Falls back to English until the trial copy is translated
  const trial = c.trial ?? translations.en.comparison.trial;

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
                <td className="pt-6 pb-6 px-5 align-top border-x border-b border-gold bg-gold/10">
                  <p className="font-medium text-platinum leading-relaxed">{c.footerGoldbench}</p>
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

          <div className="flex flex-col gap-2 border border-gold bg-gold/10 p-5">
            <p className="text-sm text-platinum/50">
              <span className="sr-only">{c.colTraditional}: </span>
              {c.footerTraditional}
            </p>
            <p className="font-medium text-platinum leading-relaxed">{c.footerGoldbench}</p>
          </div>
        </div>

        <TrialCard trial={trial} />
      </div>
    </section>
  );
}

function CtaButton({ label }: { label: string }) {
  return (
    <Link
      href="/early-access"
      className="group inline-flex shrink-0 items-center justify-center gap-2 bg-gold px-6 py-3 text-xs font-medium uppercase tracking-wider text-obsidian transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
    >
      {label}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
