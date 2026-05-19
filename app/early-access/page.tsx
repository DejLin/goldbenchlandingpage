"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

export default function EarlyAccessPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    atelier: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
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

      {/* Back to Home Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute top-6 left-6 z-20"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 text-platinum/60 hover:text-gold transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm tracking-wider">Back to Home</span>
        </Link>
      </motion.div>

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
                    Join the <span className="text-gold">GoldBench</span> Waitlist
                  </h1>
                  <p className="text-platinum/60 text-sm leading-relaxed">
                    We are onboarding a limited number of independent goldsmiths for our early access beta. Secure your spot to reclaim your bench time.
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
                      Name
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
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] uppercase tracking-[0.2em] text-platinum/50 mb-2"
                    >
                      Email Address
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
                      placeholder="you@atelier.com"
                    />
                  </div>

                  {/* Atelier Field (Optional) */}
                  <div>
                    <label
                      htmlFor="atelier"
                      className="block text-[11px] uppercase tracking-[0.2em] text-platinum/50 mb-2"
                    >
                      Name of Atelier / Workshop{" "}
                      <span className="text-platinum/30">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="atelier"
                      value={formData.atelier}
                      onChange={(e) =>
                        setFormData({ ...formData, atelier: e.target.value })
                      }
                      className="w-full bg-obsidian/50 border border-white/10 focus:border-gold/50 text-platinum px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-platinum/30"
                      placeholder="Your workshop or business name"
                    />
                  </div>

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
                          Submitting...
                        </>
                      ) : (
                        "Request My Invitation"
                      )}
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </motion.button>
                </form>

                {/* Privacy note */}
                <p className="text-platinum/30 text-[10px] text-center mt-6 tracking-wide">
                  Your information is secure and will never be shared.
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
                  You&apos;re on the List
                </h2>
                <p className="text-platinum/60 text-sm leading-relaxed mb-8">
                  Thank you, {formData.name.split(" ")[0]}. We&apos;ll be in touch soon with your exclusive early access invitation.
                </p>
                <Link
                  href="/"
                  className="inline-block text-gold text-sm tracking-wider hover:underline underline-offset-4"
                >
                  Return to Homepage
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
}
