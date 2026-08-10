"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mic } from "lucide-react";
import { Logo } from "./logo";
import { useLanguage } from "@/lib/language-context";

/** Interactive gold-ember canvas: sparks drift upward and shy away from the cursor. */
function GoldEmbers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    type Ember = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
      flicker: number;
    };

    const embers: Ember[] = [];
    const COUNT = 70;

    const spawn = (fromBottom: boolean): Ember => ({
      x: Math.random() * width,
      y: fromBottom ? height + 10 : Math.random() * height,
      r: 0.6 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -(0.15 + Math.random() * 0.45),
      alpha: 0.15 + Math.random() * 0.55,
      flicker: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    for (let i = 0; i < COUNT; i++) embers.push(spawn(false));

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of embers) {
        p.flicker += 0.05;
        p.x += p.vx;
        p.y += p.vy;

        // cursor repulsion — embers scatter like real sparks
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 120 * 120 && dist2 > 0.01) {
          const dist = Math.sqrt(dist2);
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 2.2;
          p.y += (dy / dist) * force * 2.2;
        }

        if (p.y < -10 || p.x < -10 || p.x > width + 10) {
          Object.assign(p, spawn(true));
        }

        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.flicker));
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grad.addColorStop(0, `rgba(247, 231, 161, ${a})`);
        grad.addColorStop(0.5, `rgba(212, 175, 55, ${a * 0.5})`);
        grad.addColorStop(1, "rgba(212, 175, 55, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none z-[5]"
      aria-hidden="true"
    />
  );
}

/**
 * Heat shimmer over the torch flame: soft blur bands drift upward behind a
 * radial mask, so the air above the flame appears to ripple.
 */
function HeatShimmer() {
  return (
    <div
      className="absolute left-[30%] right-[8%] top-[25%] bottom-[25%] z-[4] pointer-events-none overflow-hidden hidden md:block motion-reduce:hidden"
      aria-hidden="true"
    >
      <div className="heat-haze absolute inset-0" style={{ animationDuration: "3.4s" }} />
      <div
        className="heat-haze absolute inset-0"
        style={{ animationDuration: "4.6s", animationDelay: "-1.7s" }}
      />
    </div>
  );
}

/** Cycles through real voice commands with a typewriter effect. */
function VoiceCommandTicker({ commands }: { commands: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding">("typing");

  useEffect(() => {
    const current = commands[index];
    if (phase === "typing") {
      if (length < current.length) {
        const t = setTimeout(() => setLength((l) => l + 1), 42);
        return () => clearTimeout(t);
      }
      setPhase("holding");
      return;
    }
    const t = setTimeout(() => {
      setLength(0);
      setPhase("typing");
      setIndex((i) => (i + 1) % commands.length);
    }, 2200);
    return () => clearTimeout(t);
  }, [phase, length, index, commands]);

  const typing = phase === "typing";

  return (
    <div className="inline-flex items-center gap-3 px-5 py-3 border border-gold/25 bg-obsidian/60 backdrop-blur-md">
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
        <Mic className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
        <span className="absolute inset-0 rounded-full border border-gold/30 animate-ping opacity-40" />
      </span>
      <div className="flex items-end gap-[3px] h-4" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`w-[2px] bg-gold/70 ${typing ? "wave-bar" : ""}`}
            style={{
              height: `${6 + (i % 2) * 6}px`,
              animationDelay: `${i * 0.12}s`,
            }}
          />
        ))}
      </div>
      <p className="text-platinum/90 text-sm md:text-base font-mono min-h-[1.5em] text-left">
        <span className="text-gold/60">&ldquo;</span>
        {commands[index].slice(0, length)}
        <span className="caret-blink text-gold">▍</span>
      </p>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-obsidian">
      {/* Banner Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/master-burning-metals-high-temperature-GCZMbzefJ2NE8wB3mYVlF0cNzy7sRH.jpg"
          alt="Master goldsmith at work with torch flame"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/40 to-obsidian" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.7)_100%)]" />
      </div>

      {/* Heat shimmer above the flame */}
      <HeatShimmer />

      {/* Interactive gold embers */}
      <GoldEmbers />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 z-20 px-6 pt-3 pb-6 md:px-8 md:pt-4 md:pb-8"
      >
        <div className="flex items-center justify-center">
          <Logo size="sm" />
        </div>
      </motion.nav>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-start px-6 pt-56 pb-20 md:pt-72 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-platinum leading-[1.1] tracking-tight mb-6 text-balance">
            {t.hero.title1}
            <br />
            <span className="text-molten italic">{t.hero.title2}</span>
          </h1>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="my-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-platinum/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Live voice command ticker */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mb-10"
          >
            <VoiceCommandTicker commands={t.hero.commands} />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Link href="/early-access">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gold text-obsidian font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
              >
                <span className="relative z-10">{t.hero.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
            </Link>
            <p className="text-platinum/50 text-xs mt-4 tracking-wide">
              {t.hero.ctaSubtext}
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden md:flex flex-col items-center gap-2 mt-10"
        >
          <span className="text-platinum/40 text-[10px] tracking-[0.4em] uppercase">
            {t.hero.scroll}
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-24 md:top-28 left-8 w-12 h-12 border-l border-t border-gold/20" />
      <div className="absolute top-24 md:top-28 right-8 w-12 h-12 border-r border-t border-gold/20" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-gold/20 z-10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-gold/20 z-10" />
    </section>
  );
}
