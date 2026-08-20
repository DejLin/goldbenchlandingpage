"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Logo } from "@/components/landing/logo";
import { Mail, Clock, RefreshCw } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const WEB3FORMS_ACCESS_KEY = "2084ab2a-7f42-4f23-ada5-8a28b5d39b7a";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    captchaAnswer: "",
    botcheck: "",
  });
  const [captcha, setCaptcha] = useState<{ num1: number; num2: number; answer: number } | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: num1 + num2 });
    setFormState((prev) => ({ ...prev, captchaAnswer: "" }));
  };

  useEffect(() => {
    setIsMounted(true);
    generateCaptcha();
  }, []);

  // Translated native browser validation messages
  const applyValidationMessage = (el: HTMLInputElement | HTMLTextAreaElement) => {
    if (el.validity.valueMissing) {
      el.setCustomValidity(t.validation.required);
    } else if (el.validity.typeMismatch) {
      el.setCustomValidity(t.validation.email);
    } else {
      el.setCustomValidity("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Client-side math security check
    if (!captcha || parseInt(formState.captchaAnswer) !== captcha.answer) {
      setError(t.contact.captchaError);
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New contact message from GoldBench",
          from_name: "GoldBench Contact Form",
          name: formState.name,
          email: formState.email,
          atelier: formState.company || "Not provided",
          message: formState.message,
          botcheck: formState.botcheck,
        }),
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (err) {
      console.error("Web3Forms error:", err);
      setError(t.contact.sendError);
      generateCaptcha();
    } finally {
      setIsSubmitting(false);
    }
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
            {t.common.backToHome}
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
              {t.contact.title}
            </h1>
            <p className="text-platinum/50 text-[15px] max-w-lg mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl text-platinum font-light mb-6">{t.contact.contactInfo}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-glass-border flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-platinum text-sm font-medium mb-1">{t.contact.email}</p>
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
                      <p className="text-platinum text-sm font-medium mb-1">{t.contact.responseTime}</p>
                      <p className="text-platinum/60 text-sm">
                        {t.contact.responseTimeValue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-glass-border">
                <h3 className="text-lg text-platinum font-light mb-4">{t.contact.betaProject}</h3>
                <p className="text-platinum/60 text-sm mb-4">
                  {t.contact.betaDescription}
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
                  <h3 className="text-xl text-platinum font-light mb-2">{t.contact.messageSent}</h3>
                  <p className="text-platinum/60 text-sm">
                    {t.contact.thankYou}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-xl text-platinum font-light mb-6">{t.contact.sendMessage}</h2>

                  {/* Honeypot field - hidden from users, catches bots */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                    checked={!!formState.botcheck}
                    onChange={(e) => setFormState({ ...formState, botcheck: e.target.checked ? "true" : "" })}
                  />

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-platinum/70 text-xs uppercase tracking-wider mb-2">
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onInvalid={(e) => applyValidationMessage(e.currentTarget)}
                      onChange={(e) => {
                        e.currentTarget.setCustomValidity("");
                        setFormState({ ...formState, name: e.target.value });
                      }}
                      className="w-full bg-obsidian border border-glass-border px-4 py-3 text-platinum text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder={t.contact.namePlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-platinum/70 text-xs uppercase tracking-wider mb-2">
                      {t.contact.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onInvalid={(e) => applyValidationMessage(e.currentTarget)}
                      onChange={(e) => {
                        e.currentTarget.setCustomValidity("");
                        setFormState({ ...formState, email: e.target.value });
                      }}
                      className="w-full bg-obsidian border border-glass-border px-4 py-3 text-platinum text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder={t.contact.emailPlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-platinum/70 text-xs uppercase tracking-wider mb-2">
                      {t.contact.companyLabel}
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full bg-obsidian border border-glass-border px-4 py-3 text-platinum text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder={t.contact.companyPlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-platinum/70 text-xs uppercase tracking-wider mb-2">
                      {t.contact.messageLabel} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onInvalid={(e) => applyValidationMessage(e.currentTarget)}
                      onChange={(e) => {
                        e.currentTarget.setCustomValidity("");
                        setFormState({ ...formState, message: e.target.value });
                      }}
                      className="w-full bg-obsidian border border-glass-border px-4 py-3 text-platinum text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      placeholder={t.contact.messagePlaceholder}
                    />
                  </div>

                  {/* Security Check */}
                  {isMounted && captcha && (
                    <div>
                      <label className="block text-platinum/70 text-xs uppercase tracking-wider mb-2">
                        {t.contact.securityLabel} *
                      </label>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-obsidian border border-glass-border px-4 py-3 text-sm text-gold font-medium">
                          {t.contact.securityQuestion
                            .replace("{num1}", captcha.num1.toString())
                            .replace("{num2}", captcha.num2.toString())}
                        </div>
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="p-3 bg-obsidian border border-glass-border hover:border-gold/50 text-platinum/50 hover:text-gold transition-colors"
                          title="New question"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      </div>
                      <input
                        type="text"
                        required
                        inputMode="numeric"
                        value={formState.captchaAnswer}
                        onInvalid={(e) => applyValidationMessage(e.currentTarget)}
                        onChange={(e) => {
                          e.currentTarget.setCustomValidity("");
                          setFormState({ ...formState, captchaAnswer: e.target.value });
                        }}
                        className="w-full mt-2 bg-obsidian border border-glass-border px-4 py-3 text-platinum text-sm focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder={t.contact.securityPlaceholder}
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-obsidian py-4 font-medium text-sm uppercase tracking-wider hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t.contact.sending : t.contact.sendButton}
                  </button>

                  <p className="text-platinum/40 text-xs text-center">
                    {t.contact.privacyAgree}{" "}
                    <Link href="/privacy" className="text-gold hover:underline">{t.footer.privacy}</Link>
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
