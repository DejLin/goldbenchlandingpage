"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/landing/logo";

export default function PrivacyPage() {
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
            Back to Home
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
            Privacy Policy
          </h1>
          <p className="text-platinum/50 text-sm mb-12">
            Last updated: January 2026
          </p>

          <div className="space-y-10 text-platinum/70 text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl text-platinum font-light mb-4">1. Introduction</h2>
              <p>
                Your digital vault is protected by Swiss law. This Privacy Policy explains how Paul Brent 
                Design GmbH (Hauptstrasse 33, 9650 Nesslau, Switzerland) collects and protects your workshop 
                data. We adhere strictly to the Swiss Federal Act on Data Protection (FADP) and GDPR guidelines. 
                Your client histories, pricing structures, and inventory data are yours alone. We do not sell, 
                share, or compromise your atelier&apos;s private data.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account information (name, email address, business details)</li>
                <li>Voice recordings and transcriptions for ledger entries</li>
                <li>Inventory data, material weights, and pricing information</li>
                <li>Client information you choose to store in the system</li>
                <li>Images of jewelry pieces for cataloging purposes</li>
                <li>Alloy formulas and proprietary craft information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">3. Data Storage &amp; Security</h2>
              <p className="mb-4">
                Your data is stored on servers located exclusively in Switzerland, ensuring compliance 
                with Swiss data protection laws (FADP) and EU GDPR regulations. We employ:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>End-to-end AES-256 encryption for all data at rest and in transit</li>
                <li>Zero-knowledge architecture for sensitive proprietary information</li>
                <li>Daily encrypted backups with 30-day retention</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular third-party security audits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">4. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process voice commands and generate ledger entries</li>
                <li>Generate invoices and client galleries</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">5. Data Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information 
                or proprietary business data to third parties. Your alloy formulas, client lists, and 
                craft secrets remain exclusively yours. We may share data only with your explicit consent 
                or when required by Swiss law.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">6. Your Rights</h2>
              <p className="mb-4">Under Swiss and EU data protection laws, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data in a portable format</li>
                <li>Object to certain processing activities</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">7. Data Retention</h2>
              <p>
                We retain your data for as long as your account is active or as needed to provide 
                you services. Upon account deletion, all data is permanently removed within 30 days, 
                except where retention is required by law for accounting or tax purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">8. Contact Us</h2>
              <p>
                For any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 border border-glass-border bg-obsidian-light">
                <p className="text-platinum font-medium">Paul Brent Design GmbH</p>
                <p>Hauptstrasse 33</p>
                <p>9650 Nesslau, Switzerland</p>
                <p className="text-platinum/50">UID: CHE-155.525.301</p>
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
