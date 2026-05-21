"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/landing/logo";
import { useLanguage } from "@/lib/language-context";

export default function TermsPage() {
  const { t } = useLanguage();
  
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
            {t.terms.title}
          </h1>
          <p className="text-platinum/50 text-sm mb-12">
            {t.common.lastUpdated}
          </p>

          <div className="space-y-10 text-platinum/70 text-[15px] leading-relaxed">
            {/* Beta Disclaimer - Prominent */}
            <section className="p-6 border-2 border-gold/30 bg-gold/5">
              <h2 className="text-xl text-gold font-light mb-4">Beta Testing Disclaimer</h2>
              <p className="text-platinum/80">
                Goldbench is currently a free beta test environment. The service is provided strictly 
                &quot;as is&quot; without any warranties, uptime guarantees, or commercial obligations. The 
                developers reserve the right to modify, reset, or suspend the service at any time 
                without notice. By participating in the beta, users acknowledge this is a testing phase.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">1. Agreement to Terms</h2>
              <p>
                Welcome to GoldBench. These Terms and Conditions govern your use of the GoldBench platform, 
                a voice-powered administration and clienteling tool designed exclusively for independent 
                goldsmiths, jewelers, and ateliers. By using GoldBench, you agree to these terms with 
                the Goldbench Beta Project. Our platform is built to respect your craft 
                and protect your proprietary data, including custom alloy formulas and private client lists.
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
              <h2 className="text-xl text-platinum font-light mb-4">4. Beta Access</h2>
              <p className="mb-4">
                During the beta testing phase, GoldBench is provided free of charge. By participating, you acknowledge:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The service may be modified, reset, or discontinued at any time</li>
                <li>No uptime or availability guarantees are provided</li>
                <li>Features may change or be removed without notice</li>
                <li>Data may be reset during the beta period</li>
              </ul>
              <p className="mt-4">
                Early access members may receive preferential terms when commercial pricing is introduced.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">5. Client Data Authority</h2>
              <p>
                By utilizing the GoldBench beta to process operational shop data, the participating beta 
                user (the Data Controller) confirms they possess the necessary legal authority, consent, 
                and rights under the Swiss nFADP to process their end-customers&apos; data through automated 
                third-party AI pipelines. The beta user accepts full responsibility for the data entered 
                into the testing environment.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">6. Intellectual Property</h2>
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
              <h2 className="text-xl text-platinum font-light mb-4">7. Acceptable Use</h2>
              <p className="mb-4">You agree not to use GoldBench to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Store or transmit malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the service for any fraudulent purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">8. Service Availability</h2>
              <p>
                As a beta service, we do not guarantee any specific level of uptime or availability. 
                The service may be interrupted for maintenance, updates, or other reasons. 
                We are not liable for any damages resulting from service interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">9. Limitation of Liability</h2>
              <p>
                The GoldBench beta service is provided &quot;as is&quot; without warranties of any kind. 
                The Development Team shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including loss of profits, data, or business 
                opportunities, arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">10. Termination</h2>
              <p>
                Either party may terminate participation in the beta at any time. Upon termination or 
                at the end of the beta period, you will have the opportunity to export your data. 
                We reserve the right to suspend or terminate accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">11. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of the service after 
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">12. Contact</h2>
              <p>
                For questions about these Terms, please contact us:
              </p>
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
