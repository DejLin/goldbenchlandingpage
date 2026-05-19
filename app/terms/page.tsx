"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/landing/logo";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-platinum/50 text-sm mb-12">
            Last updated: January 2026
          </p>

          <div className="space-y-10 text-platinum/70 text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl text-platinum font-light mb-4">1. Agreement to Terms</h2>
              <p>
                Welcome to GoldBench. These Terms and Conditions govern your use of the GoldBench platform, 
                a voice-powered administration and clienteling tool designed exclusively for independent 
                goldsmiths, jewelers, and ateliers. By using GoldBench, you agree to these terms with 
                Paul Brent Design GmbH (UID: CHE-155.525.301). Our platform is built to respect your craft 
                and protect your proprietary data, including custom alloy formulas and private client lists. 
                All data processing is governed by Swiss law and hosted securely in Switzerland.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">2. Description of Service</h2>
              <p className="mb-4">
                GoldBench provides a voice-activated business management platform that includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Voice-to-ledger inventory tracking</li>
                <li>Automated invoice generation</li>
                <li>Client gallery management with privacy controls</li>
                <li>Material and time tracking</li>
                <li>Secure storage of proprietary information (alloy formulas, techniques)</li>
                <li>AI-assisted client communication tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">3. Account Registration</h2>
              <p>
                To use GoldBench, you must create an account with accurate and complete information. 
                You are responsible for maintaining the confidentiality of your account credentials and 
                for all activities under your account. You must notify us immediately of any unauthorized 
                use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">4. Subscription &amp; Payments</h2>
              <p className="mb-4">
                GoldBench operates on a subscription model. By subscribing, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pay all fees associated with your chosen plan</li>
                <li>Automatic renewal unless cancelled before the billing cycle</li>
                <li>No refunds for partial subscription periods</li>
                <li>Price changes with 30 days advance notice</li>
              </ul>
              <p className="mt-4">
                Early access members receive preferential pricing locked in for the first 24 months.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                <strong className="text-platinum">Your Content:</strong> You retain full ownership of all data, 
                images, formulas, and proprietary information you upload to GoldBench. We claim no 
                intellectual property rights over your materials.
              </p>
              <p>
                <strong className="text-platinum">Our Platform:</strong> GoldBench, including its design, 
                features, and underlying technology, is protected by intellectual property laws. You may 
                not copy, modify, or reverse engineer any part of our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">6. Acceptable Use</h2>
              <p className="mb-4">You agree not to use GoldBench to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Store or transmit malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the service for any non-business or fraudulent purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">7. Service Availability</h2>
              <p>
                We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. 
                Scheduled maintenance will be communicated in advance. We are not liable for any 
                damages resulting from service interruptions beyond our reasonable control.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by Swiss law, GoldBench shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including loss of 
                profits, data, or business opportunities, arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">9. Termination</h2>
              <p>
                Either party may terminate the agreement at any time. Upon termination, you will have 
                30 days to export your data before permanent deletion. We reserve the right to suspend 
                or terminate accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of Switzerland. Any disputes shall be resolved 
                in the courts of St. Gallen, Switzerland. The United Nations Convention on Contracts 
                for the International Sale of Goods does not apply.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">11. Contact</h2>
              <p>
                For questions about these Terms, please contact us:
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
