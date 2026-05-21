"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, Check, Volume2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

// Demo messages stay in English as they represent the voice assistant interface
const demoMessages = [
  {
    type: "voice",
    text: '"Log 14 grams 18k gold, Miller engagement ring"',
    time: "14:23",
  },
  {
    type: "response",
    text: "Logged: 14g 18K Gold to Project #M-2847 (Miller Engagement Ring). Current material cost: CHF 892.40",
    time: "14:23",
  },
  {
    type: "voice",
    text: '"Generate invoice Miller, include labor 6 hours"',
    time: "14:24",
  },
  {
    type: "response",
    text: "Invoice #INV-2847 generated. Total: CHF 2,340.00. PDF attached. Ready to send?",
    time: "14:24",
  },
];

export function WorkflowDemo() {
  const { t } = useLanguage();
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && visibleMessages < demoMessages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
    if (visibleMessages >= demoMessages.length) {
      setIsPlaying(false);
    }
  }, [isPlaying, visibleMessages]);

  const startDemo = () => {
    setVisibleMessages(0);
    setIsPlaying(true);
  };

  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">
            {t.workflow.label}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight mb-4">
            {t.workflow.title}
          </h2>
          <p className="text-platinum/70 text-lg max-w-xl mx-auto">
            {t.workflow.subtitle}
          </p>
        </motion.div>

        {/* Demo Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Browser chrome */}
          <div className="bg-obsidian border border-platinum/10 rounded-sm overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-platinum/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-platinum/20" />
                <div className="w-3 h-3 rounded-full bg-platinum/20" />
                <div className="w-3 h-3 rounded-full bg-platinum/20" />
              </div>
              <span className="text-platinum/40 text-xs tracking-wider">
                {t.workflow.assistant}
              </span>
              <div className="w-16" />
            </div>

            {/* Chat area */}
            <div className="p-6 md:p-8 min-h-[360px] flex flex-col">
              <div className="flex-1 space-y-4">
                {demoMessages.slice(0, visibleMessages).map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      msg.type === "voice" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-md px-4 py-3 rounded-sm ${
                        msg.type === "voice"
                          ? "bg-gold/20 border border-gold/30"
                          : "bg-platinum/5 border border-platinum/10"
                      }`}
                    >
                      {msg.type === "voice" && (
                        <div className="flex items-center gap-2 mb-1">
                          <Volume2 className="w-3 h-3 text-gold" />
                          <span className="text-gold text-[10px] tracking-wider uppercase">
                            {t.workflow.voiceMessage}
                          </span>
                        </div>
                      )}
                      <p
                        className={`text-sm ${
                          msg.type === "voice"
                            ? "text-platinum italic"
                            : "text-platinum/90"
                        }`}
                      >
                        {msg.text}
                      </p>
                      <span className="text-platinum/40 text-[10px] mt-2 block">
                        {msg.time}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {visibleMessages === 0 && !isPlaying && (
                  <div className="flex items-center justify-center h-full min-h-[200px]">
                    <p className="text-platinum/40 text-sm">
                      {t.workflow.clickToSee}
                    </p>
                  </div>
                )}

                {visibleMessages >= demoMessages.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center pt-4"
                  >
                    <div className="flex items-center gap-2 text-gold">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">{t.workflow.invoiceReady}</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input area */}
              <div className="mt-6 pt-4 border-t border-platinum/10">
                <button
                  onClick={startDemo}
                  disabled={isPlaying}
                  className="w-full flex items-center justify-center gap-3 py-3 bg-gold/10 hover:bg-gold/20 border border-gold/30 text-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span className="text-sm tracking-wider">
                    {isPlaying ? t.workflow.processing : t.workflow.playDemo}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
