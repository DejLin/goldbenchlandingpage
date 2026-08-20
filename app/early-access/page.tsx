"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Loader2, RefreshCw } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function EarlyAccessPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    atelier: "",
    captchaAnswer: "",
  });
  const [captcha, setCaptcha] = useState<{ num1: number; num2: number; answer: number } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  // Generate new captcha - only runs client-side
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: num1 + num2 });
    setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
  };

  useEffect(() => {
    setIsMounted(true);
    generateCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate captcha client-side
    if (!captcha || parseInt(formData.captchaAnswer) !== captcha.answer) {
      setError(t.earlyAccess.captchaError);
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "early-access",
          name: formData.name,
          email: formData.email,
          company: formData.atelier,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      setError("Failed to submit. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/workbench-bg.jpg"
          alt="Goldsmith workbench"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-obsidian/70" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.6)_100%)]" />
      </div>

      {/* Top Navigation */}
      <div className="absolute top-6 left-6 z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link
            href="/"
            className="group flex items-center gap-2 text-platinum/60 hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm tracking-wider">{t.earlyAccess.backToHome}</span>
          </Link>
        </motion.div>
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="relative bg-obsidian/80 backdrop-blur-md border border-white/10 p-8 md:p-10">
          {/* Gold corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/50" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/50" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-light text-platinum tracking-tight mb-4">
                    {t.earlyAccess.title} <span className="text-gold">{t.earlyAccess.titleHighlight}</span> {t.earlyAccess.titleEnd}
                  </h1>
                  <p className="text-platinum/60 text-sm leading-relaxed">
                    {t.earlyAccess.subtitle}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] uppercase tracking-[0.2em] text-platinum/50 mb-2"
                    >
                      {t.earlyAccess.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-obsidian/50 border border-white/10 focus:border-gold/50 text-platinum px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-platinum/30"
                      placeholder={t.earlyAccess.namePlaceholder}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] uppercase tracking-[0.2em] text-platinum/50 mb-2"
                    >
                      {t.earlyAccess.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-obsidian/50 border border-white/10 focus:border-gold/50 text-platinum px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-platinum/30"
                      placeholder={t.earlyAccess.emailPlaceholder}
                    />
                  </div>

                  {/* Atelier Field (Optional) */}
                  <div>
                    <label
                      htmlFor="atelier"
                      className="block text-[11px] uppercase tracking-[0.2em] text-platinum/50 mb-2"
                    >
                      {t.earlyAccess.atelierLabel}{" "}
                      <span className="text-platinum/30">{t.earlyAccess.atelierOptional}</span>
                    </label>
                    <input
                      type="text"
                      id="atelier"
                      value={formData.atelier}
                      onChange={(e) =>
                        setFormData({ ...formData, atelier: e.target.value })
                      }
                      className="w-full bg-obsidian/50 border border-white/10 focus:border-gold/50 text-platinum px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-platinum/30"
                      placeholder={t.earlyAccess.atelierPlaceholder}
                    />
                  </div>

                  {/* Captcha Field */}
                  {isMounted && captcha && (
                    <div>
                      <label
                        htmlFor="captcha"
                        className="block text-[11px] uppercase tracking-[0.2em] text-platinum/50 mb-2"
                      >
                        {t.earlyAccess.captchaLabel}
                      </label>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-obsidian/50 border border-white/10 px-4 py-3 text-sm text-gold font-medium">
                          {t.earlyAccess.captchaQuestion
                            .replace("{num1}", captcha.num1.toString())
                            .replace("{num2}", captcha.num2.toString())}
                        </div>
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="p-3 bg-obsidian/50 border border-white/10 hover:border-gold/50 text-platinum/50 hover:text-gold transition-colors duration-300"
                          title="New question"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      </div>
                      <input
                        type="text"
                        id="captcha"
                        required
                        value={formData.captchaAnswer}
                        onChange={(e) =>
                          setFormData({ ...formData, captchaAnswer: e.target.value })
                        }
                        className="w-full mt-2 bg-obsidian/50 border border-white/10 focus:border-gold/50 text-platinum px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-platinum/30"
                        placeholder={t.earlyAccess.captchaPlaceholder}
                      />
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm text-center"
                    >
                      {error}
                    </motion.p>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="group relative w-full mt-8 px-8 py-4 bg-gold text-obsidian font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {t.earlyAccess.submitting}
                        </>
                      ) : (
                        t.earlyAccess.submitButton
                      )}
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </motion.button>
                </form>

                {/* Privacy note */}
                <p className="text-platinum/30 text-[10px] text-center mt-6 tracking-wide">
                  {t.earlyAccess.privacyNote}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mb-6"
                >
                  <CheckCircle2 className="w-16 h-16 text-gold mx-auto" />
                </motion.div>
                <h2 className="text-2xl font-light text-platinum mb-4">
                  {t.earlyAccess.successTitle}
                </h2>
                <p className="text-platinum/60 text-sm leading-relaxed mb-8">
                  {t.earlyAccess.successMessage.replace("{name}", formData.name.split(" ")[0])}
                </p>
                <Link
                  href="/"
                  className="inline-block text-gold text-sm tracking-wider hover:underline underline-offset-4"
                >
                  {t.earlyAccess.returnHome}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
}
