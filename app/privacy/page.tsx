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
            Last updated: May 2026
          </p>

          <div className="space-y-10 text-platinum/70 text-[15px] leading-relaxed">
            {/* Beta Notice */}
            <section className="p-6 border-2 border-gold/30 bg-gold/5">
              <h2 className="text-xl text-gold font-light mb-4">Beta Testing Environment</h2>
              <p className="text-platinum/80">
                This is a free, non-commercial beta testing environment. Any personal data collected 
                is used strictly for beta testing access, development feedback, and communication 
                regarding the project. Data is not sold or used for commercial marketing. For data 
                inquiries or deletion requests under the Swiss nFADP, please email{" "}
                <a href="mailto:contact@goldbench.ch" className="text-gold hover:underline">contact@goldbench.ch</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">1. Introduction</h2>
              <p>
                This Privacy Policy explains how the Goldbench Beta Project collects and protects your 
                data during the beta testing phase. We are committed to protecting your privacy and 
                handling your data responsibly. Your client histories, pricing structures, and inventory 
                data are yours alone. We do not sell, share, or compromise your atelier&apos;s private data.
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
                <li>Feedback and communications regarding the beta test</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">During the beta testing phase, we use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide beta testing access to the GoldBench platform</li>
                <li>Communicate with you about the beta program and updates</li>
                <li>Gather feedback to improve the service</li>
                <li>Process voice commands and generate ledger entries</li>
                <li>Generate invoices and client galleries</li>
                <li>Send you technical notices and support messages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">4. Data Storage &amp; Security</h2>
              <p className="mb-4">
                We take reasonable measures to protect your data, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption for data at rest and in transit</li>
                <li>Secure authentication for account access</li>
                <li>Regular security reviews</li>
              </ul>
              <p className="mt-4">
                As this is a beta environment, please be aware that data handling procedures may 
                evolve as we develop the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">5. Data Processing &amp; Sub-Processors</h2>
              <p>
                To provide automated structuring and administrative assistance, the GoldBench beta utilizes 
                third-party AI processing infrastructure. All data processed through these pipelines is 
                explicitly configured for Zero Data Retention (ZDR) and is processed ephemerally. We do not 
                sell data or use beta input for commercial marketing.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">6. Data Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information 
                or proprietary business data to third parties. Your alloy formulas, client lists, and 
                craft secrets remain exclusively yours. Data is used solely for operating the beta 
                test and improving the service. We may share data only with your explicit consent 
                or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">7. Your Rights</h2>
              <p className="mb-4">Under the Swiss nFADP, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data in a portable format</li>
                <li>Object to certain processing activities</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:contact@goldbench.ch" className="text-gold hover:underline">contact@goldbench.ch</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">8. Data Retention</h2>
              <p>
                We retain your data for as long as you participate in the beta program. Upon request 
                or at the end of the beta period, your data can be exported or deleted. We will provide 
                reasonable notice before any data deletion.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">9. Contact Us</h2>
              <p>
                For any questions about this Privacy Policy, our data practices, or to exercise your 
                data rights, please contact us at:
              </p>
              <div className="mt-4 p-4 border border-glass-border bg-obsidian-light">
                <p className="text-platinum font-medium">Goldbench Beta Project</p>
                <p className="mt-2">
                  Email: <a href="mailto:contact@goldbench.ch" className="text-gold hover:underline">contact@goldbench.ch</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl text-platinum font-light mb-4">10. Impressum</h2>
              <div className="p-4 border border-glass-border bg-obsidian-light">
                <p className="text-platinum/80">
                  This website is a non-commercial, free beta testing environment operated as a private project.
                </p>
                <p className="mt-2">
                  Contact: <a href="mailto:contact@goldbench.ch" className="text-gold hover:underline">contact@goldbench.ch</a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
