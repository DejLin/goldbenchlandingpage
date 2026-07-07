"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Send,
  Check,
  Volume2,
  Scale,
  Gem,
  FileText,
  RotateCcw,
} from "lucide-react";
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

/** Animates a number toward its target with an ease-out ramp. */
function CountUp({
  value,
  decimals = 0,
  duration = 900,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);

  useEffect(() => {
    const from = fromRef.current;
    if (from === value) return;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(from + (value - from) * eased);
      if (p < 1) raf = requestAnimationFrame(step);
      else fromRef.current = value;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return (
    <>
      {display.toLocaleString("de-CH", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </>
  );
}

export function WorkflowDemo() {
  const { t } = useLanguage();
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

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

  const autoStart = () => {
    if (!hasAutoPlayed) {
      setHasAutoPlayed(true);
      startDemo();
    }
  };

  const goldLogged = visibleMessages >= 2;
  const invoiceReady = visibleMessages >= 4;
  const d = t.workflow.dashboard;

  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6 max-w-6xl">
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight mb-4">
            {t.workflow.title}
          </h2>
          <p className="text-platinum/70 text-lg max-w-xl mx-auto">
            {t.workflow.subtitle}
          </p>
        </motion.div>

        {/* Split screen: chat left, live dashboard right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={autoStart}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        >
          {/* ── Chat window ── */}
          <div className="bg-obsidian border border-platinum/10 rounded-sm overflow-hidden flex flex-col">
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
            <div className="p-6 md:p-8 min-h-[360px] flex flex-col flex-1">
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
                  {isPlaying ? (
                    <Send className="w-4 h-4" />
                  ) : (
                    <RotateCcw className="w-4 h-4" />
                  )}
                  <span className="text-sm tracking-wider">
                    {isPlaying ? t.workflow.processing : t.workflow.playDemo}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* ── Live dashboard ── */}
          <div className="bg-obsidian border border-platinum/10 rounded-sm overflow-hidden flex flex-col">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-platinum/10">
              <span className="text-platinum/40 text-xs tracking-wider">
                {d.title}
              </span>
              <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-gold/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                {d.live}
              </span>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col gap-4">
              {/* Inventory card */}
              <div
                key={goldLogged ? "inv-updated" : "inv-idle"}
                className={`border border-white/[0.08] bg-charcoal/60 p-5 ${
                  goldLogged ? "gold-flash" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-platinum/50 text-xs tracking-wider uppercase">
                    <Scale className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {d.inventoryLabel}
                  </div>
                  {goldLogged && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-gold text-xs font-mono border border-gold/30 bg-gold/10 px-2 py-0.5"
                    >
                      +14.0 g
                    </motion.span>
                  )}
                </div>
                <p className="font-mono text-3xl md:text-4xl text-platinum font-light">
                  <CountUp value={goldLogged ? 1254 : 1240} decimals={1} />
                  <span className="text-platinum/40 text-base ml-2">
                    {d.inventoryUnit}
                  </span>
                </p>
              </div>

              {/* Project card */}
              <div
                key={goldLogged ? "proj-updated" : "proj-idle"}
                className={`border border-white/[0.08] bg-charcoal/60 p-5 ${
                  goldLogged ? "gold-flash" : ""
                }`}
              >
                <div className="flex items-center gap-2 text-platinum/50 text-xs tracking-wider uppercase mb-3">
                  <Gem className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {d.projectLabel}
                </div>
                <p className="text-platinum text-sm mb-2">
                  {d.projectName}{" "}
                  <span className="text-platinum/40 font-mono text-xs">
                    #M-2847
                  </span>
                </p>
                <div className="flex items-baseline justify-between">
                  <span className="text-platinum/50 text-xs">
                    {d.materialCost}
                  </span>
                  <span className="font-mono text-lg text-gold">
                    CHF <CountUp value={goldLogged ? 892.4 : 0} decimals={2} />
                  </span>
                </div>
                {invoiceReady && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-baseline justify-between mt-1"
                  >
                    <span className="text-platinum/50 text-xs">
                      {d.laborLabel}
                    </span>
                    <span className="font-mono text-sm text-platinum/80">
                      6.0 h
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Invoice card — materializes at the end */}
              <div className="flex-1 flex flex-col justify-end">
                {invoiceReady ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="border border-gold/40 bg-gold/[0.06] p-5 gold-flash"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-gold text-xs tracking-wider uppercase">
                        <FileText className="w-3.5 h-3.5" strokeWidth={1.5} />
                        {d.invoiceLabel}
                      </div>
                      <span className="flex items-center gap-1.5 text-gold/90 text-[10px] tracking-wider uppercase">
                        <Check className="w-3 h-3" />
                        {d.invoiceReady}
                      </span>
                    </div>
                    <p className="font-mono text-3xl text-gold font-light">
                      CHF <CountUp value={2340} decimals={2} duration={1100} />
                    </p>
                  </motion.div>
                ) : (
                  <div className="border border-dashed border-white/[0.08] p-5 flex items-center justify-center min-h-[92px]">
                    <p className="text-platinum/30 text-xs tracking-wider">
                      {d.waiting}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
