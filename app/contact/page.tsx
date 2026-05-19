"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Logo } from "@/components/landing/logo";
import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-obsidian relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/contact-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Dark overlay - 80% opacity for readability */}
        <div className="absolute inset-0 bg-obsidian/80" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.7)_100%)]" />
      </div>

      {/* Header */}
      <nav className="relative z-10 p-6 md:p-8 border-b border-glass-border bg-obsidian/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-light text-platinum tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-platinum/50 text-[15px] max-w-lg mx-auto">
              Ready to transform your atelier workflow? We&apos;d love to hear from you 
              and discuss how GoldBench can serve your craft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl text-platinum font-light mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-glass-border flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-platinum text-sm font-medium mb-1">Paul Brent Design GmbH</p>
                      <p className="text-platinum/60 text-sm">
                        Hauptstrasse 33<br />
                        9650 Nesslau, Switzerland<br />
                        <span className="text-platinum/40">UID: CHE-155.525.301</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-glass-border flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-platinum text-sm font-medium mb-1">Email</p>
                      <a 
                        href="mailto:contact@goldbench.ch" 
                        className="text-platinum/60 text-sm hover:text-gold transition-colors"
                      >
                        contact@goldbench.ch
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-glass-border flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-platinum text-sm font-medium mb-1">Response Time</p>
                      <p className="text-platinum/60 text-sm">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-glass-border">
                <h3 className="text-lg text-platinum font-light mb-4">For Existing Customers</h3>
                <p className="text-platinum/60 text-sm mb-4">
                  Access priority support through your dashboard or contact us directly:
                </p>
                <a 
                  href="mailto:contact@goldbench.ch" 
                  className="text-gold text-sm hover:underline"
                >
                  contact@goldbench.ch
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="border border-glass-border p-6 md:p-8 bg-obsidian-light">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 border border-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl text-platinum font-light mb-2">Message Sent</h3>
                  <p className="text-platinum/60 text-sm">
                    Thank you for reaching out. We&apos;ll be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-xl text-platinum font-light mb-6">Send a Message</h2>
                  
                  <div>
                    <label className="block text-platinum/70 text-xs uppercase tracking-wider mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-obsidian border border-glass-border px-4 py-3 text-platinum text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-platinum/70 text-xs uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-obsidian border border-glass-border px-4 py-3 text-platinum text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-platinum/70 text-xs uppercase tracking-wider mb-2">
                      Atelier / Company
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full bg-obsidian border border-glass-border px-4 py-3 text-platinum text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="Your atelier or company name"
                    />
                  </div>

                  <div>
                    <label className="block text-platinum/70 text-xs uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-obsidian border border-glass-border px-4 py-3 text-platinum text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      placeholder="Tell us about your atelier and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-obsidian py-4 font-medium text-sm uppercase tracking-wider hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-platinum/40 text-xs text-center">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
