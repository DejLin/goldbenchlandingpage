"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Receipt,
  FileText,
  MessageCircleQuestion,
  SquarePen,
  Scissors,
  Image as ImageIcon,
  Video,
  Instagram,
  Tag,
  Gem,
  ListChecks,
  Copy,
  EyeOff,
  Wallet,
  Coins,
  ClipboardCheck,
  FileSpreadsheet,
  Images,
  Wrench,
  Archive,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

// One icon per feature, in the same order as the translations `features.items` array.
const icons = [
  Mic,
  Receipt,
  FileText,
  MessageCircleQuestion,
  SquarePen,
  Scissors,
  ImageIcon,
  Video,
  Instagram,
  Tag,
  Gem,
  ListChecks,
  Copy,
  EyeOff,
  Wallet,
  Coins,
  ClipboardCheck,
  FileSpreadsheet,
  Images,
  Wrench,
  Archive,
];

/** Card with a gold spotlight that follows the cursor. */
function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={handleMove}
      className={`group relative bg-obsidian border border-white/[0.06] hover:border-gold/30 transition-all duration-500 overflow-hidden ${className}`}
    >
      {/* Cursor-following gold glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(212,175,55,0.10), transparent 65%)",
        }}
      />
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-gold/50" />
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gold/50" />
      {children}
    </div>
  );
}

export function RevenueEngine() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const categories = t.features.categories;

  // Icon index at which each category starts, so every feature keeps a distinct icon.
  const iconOffsets: number[] = [];
  categories.reduce((acc, group, i) => {
    iconOffsets[i] = acc;
    return acc + group.items.length;
  }, 0);

  const activeGroup = categories[active];
  const activeOffset = iconOffsets[active] ?? 0;

  return (
    <section
      className="py-24 md:py-32 bg-obsidian relative overflow-hidden"
      aria-label="Funktionen: Was der Sprachassistent für Ihr Atelier erledigt"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">
            {t.features.label}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight">
            {t.features.title}
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14"
          role="tablist"
          aria-label={t.features.label}
        >
          {categories.map((group, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={`relative px-5 py-2.5 text-sm tracking-wide transition-colors duration-300 rounded-full border ${
                  isActive
                    ? "text-obsidian border-gold"
                    : "text-platinum/60 border-white/[0.08] hover:text-platinum hover:border-gold/30"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="feature-tab-pill"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {group.category}
                  <span
                    className={`text-[10px] tabular-nums ${
                      isActive ? "text-obsidian/60" : "text-platinum/30"
                    }`}
                  >
                    {group.items.length}
                  </span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Active category cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {activeGroup.items.map((feature, itemIndex) => {
              const IconComponent =
                icons[(activeOffset + itemIndex) % icons.length];
              return (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.05 + (itemIndex % 3) * 0.06,
                  }}
                >
                  <SpotlightCard className="h-full p-8">
                    <div className="relative w-12 h-12 mb-6 flex items-center justify-center border border-white/[0.08] group-hover:border-gold/30 transition-colors duration-500">
                      <IconComponent
                        className="w-5 h-5 text-platinum/60 group-hover:text-gold transition-colors duration-500"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="font-medium mb-3 tracking-wide text-lg text-platinum group-hover:text-white transition-colors duration-500">
                      {feature.title}
                    </h3>

                    <p className="leading-relaxed text-sm text-platinum/60 group-hover:text-platinum/80 transition-colors duration-500">
                      {feature.description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
