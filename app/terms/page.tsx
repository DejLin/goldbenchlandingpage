"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/landing/logo";
import { useLanguage } from "@/lib/language-context";
import { legalTranslations } from "@/lib/legal-translations";

export default function TermsPage() {
  const { language, t } = useLanguage();
  const lt = legalTranslations[language].terms;
  
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
            {/* Beta Disclaimer */}
            <section className="p-6 border-2 border-gold/30 bg-gold/5">
              <h2 className="text-xl text-gold font-light mb-4">{lt.betaDisclaimer.title}</h2>
              <p className="text-platinum/80">{lt.betaDisclaimer.text}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.agreement.title}</h2>
              <p>{lt.sections.agreement.text}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.description.title}</h2>
              <p className="mb-4">{lt.sections.description.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {lt.sections.description.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.account.title}</h2>
              <p>{lt.sections.account.text}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.betaAccess.title}</h2>
              <p className="mb-4">{lt.sections.betaAccess.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {lt.sections.betaAccess.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{lt.sections.betaAccess.note}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.clientData.title}</h2>
              <p>{lt.sections.clientData.text}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.ip.title}</h2>
              <p className="mb-4">
                <strong className="text-platinum">{lt.sections.ip.yourContent}</strong> {lt.sections.ip.yourContentText}
              </p>
              <p>
                <strong className="text-platinum">{lt.sections.ip.ourPlatform}</strong> {lt.sections.ip.ourPlatformText}
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.acceptableUse.title}</h2>
              <p className="mb-4">{lt.sections.acceptableUse.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {lt.sections.acceptableUse.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.availability.title}</h2>
              <p>{lt.sections.availability.text}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.liability.title}</h2>
              <p>{lt.sections.liability.text}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.termination.title}</h2>
              <p>{lt.sections.termination.text}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.changes.title}</h2>
              <p>{lt.sections.changes.text}</p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">{lt.sections.contact.title}</h2>
              <p>{lt.sections.contact.text}</p>
              <div className="mt-4 p-4 border border-glass-border bg-obsidian-light">
                <p className="text-platinum font-medium">Goldbench Beta Project</p>
                <p className="mt-2">
                  Email: <a href="mailto:contact@goldbench.ch" className="text-gold hover:underline">contact@goldbench.ch</a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
