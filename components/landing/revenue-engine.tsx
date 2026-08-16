"use client";

import { motion } from "framer-motion";
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

  return (
    <section className="py-24 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">
            {t.features.label}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight">
            {t.features.title}
          </h2>
        </motion.div>

        {/* Uniform feature grid — every capability shown at equal weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.features.items.map((feature, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              >
                <SpotlightCard className="h-full p-8">
                  {/* Icon */}
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
        </div>
      </div>
    </section>
  );
}
