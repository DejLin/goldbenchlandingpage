"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Molten pour: a thin gold seam on the left edge that pours down the page
 * as you scroll, with a glowing droplet at its tip.
 */
export function MoltenProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.4,
  });
  const tipTop = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div
      className="fixed left-6 top-0 bottom-0 w-px z-40 pointer-events-none hidden md:block"
      aria-hidden="true"
    >
      {/* Track — the unsoldered seam */}
      <div className="absolute inset-0 bg-white/[0.05]" />

      {/* Gold fill pouring down */}
      <motion.div
        className="absolute left-0 top-0 h-full w-full origin-top bg-gradient-to-b from-gold/10 via-gold/50 to-gold shadow-[0_0_12px_rgba(212,175,55,0.5)]"
        style={{ scaleY: progress }}
      />

      {/* Molten droplet at the tip */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ top: tipTop }}
      >
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-gold/30 blur-md" />
          <div className="relative w-[5px] h-[5px] rounded-full bg-gradient-to-b from-[#f7e7a1] to-gold shadow-[0_0_10px_rgba(212,175,55,0.9)]" />
        </div>
      </motion.div>
    </div>
  );
}
