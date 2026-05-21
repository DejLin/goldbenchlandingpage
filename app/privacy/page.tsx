"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/landing/logo";
import { useLanguage } from "@/lib/language-context";
import { legalTranslations } from "@/lib/legal-translations";

export default function PrivacyPage() {
  const { language, t } = useLanguage();
  const lt = legalTranslations[language].privacy;
  
  return (
    <main className="min-h-screen bg-obsidian">
      {/* Header */}
      <nav className="p-6 md:p-8 border-b border-glass-border">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Logo size="sm" />
          </Link>
          <Link 
            href="/" 
            className="text-[11px] uppercase tracking-[0.2em] text-platinum/70 hover:text-gold transition-colors"
          >
            {t.common.backToHome}
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-light text-platinum tracking-tight mb-4">
            {lt.title}
          </h1>
          <p className="text-platinum/50 text-sm mb-12">
            {t.common.lastUpdated}
          </p>

          <div className="space-y-10 text-platinum/70 text-[15px] leading-relaxed">
            {/* Beta Notice */}
            <section className="p-6 border-2 border-gold/30 bg-gold/5">
              <h2 className="text-xl text-gold font-light mb-4">{lt.betaNotice.title}</h2>
              <p className="text-platinum/80">
                {lt.betaNotice.text}{" "}
                <a href="mailto:contact@goldbench.ch" className="text-gold hover:underline">contact@goldbench.ch</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.introduction.title}</h2>
              <p>{lt.sections.introduction.text}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.infoCollect.title}</h2>
              <p className="mb-4">{lt.sections.infoCollect.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {lt.sections.infoCollect.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.howWeUse.title}</h2>
              <p className="mb-4">{lt.sections.howWeUse.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {lt.sections.howWeUse.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.dataSecurity.title}</h2>
              <p className="mb-4">{lt.sections.dataSecurity.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {lt.sections.dataSecurity.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{lt.sections.dataSecurity.note}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.dataProcessing.title}</h2>
              <p>{lt.sections.dataProcessing.text}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.dataSharing.title}</h2>
              <p>{lt.sections.dataSharing.text}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.yourRights.title}</h2>
              <p className="mb-4">{lt.sections.yourRights.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {lt.sections.yourRights.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                {lt.sections.yourRights.note}{" "}
                <a href="mailto:contact@goldbench.ch" className="text-gold hover:underline">contact@goldbench.ch</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.dataRetention.title}</h2>
              <p>{lt.sections.dataRetention.text}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.contactUs.title}</h2>
              <p>{lt.sections.contactUs.text}</p>
              <div className="mt-4 p-4 border border-glass-border bg-obsidian-light">
                <p className="text-platinum font-medium">Goldbench Beta Project</p>
                <p className="mt-2">
                  Email: <a href="mailto:contact@goldbench.ch" className="text-gold hover:underline">contact@goldbench.ch</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.impressum.title}</h2>
              <div className="p-4 border border-glass-border bg-obsidian-light">
                <p className="text-platinum/80">{lt.sections.impressum.text}</p>
                <p className="mt-2">
                  {lt.sections.impressum.contact} <a href="mailto:contact@goldbench.ch" className="text-gold hover:underline">contact@goldbench.ch</a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
