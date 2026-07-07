"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function VideoShowcase() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {
      // Autoplay may be blocked; ignore silently.
    });
  };

  return (
    <section className="bg-obsidian pt-4 pb-24 md:pt-8 md:pb-32 relative overflow-hidden">
      {/* Ambient glow behind the frame */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gold/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-5">
            {t.videoShowcase.label}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight mb-4 text-balance">
            {t.videoShowcase.title}
          </h2>
          <p className="text-platinum/60 text-base md:text-lg max-w-xl mx-auto">
            {t.videoShowcase.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          onViewportEnter={startPlayback}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Gold bezel — gradient border wrapper */}
          <div className="rounded-2xl p-px bg-gradient-to-b from-gold/40 via-white/[0.08] to-gold/20">
            <button
              type="button"
              aria-label={isPlaying ? "Playing demo video" : "Play demo video"}
              onMouseEnter={startPlayback}
              onClick={startPlayback}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_30px_90px_-15px_rgba(212,175,55,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            >
              <video
                ref={videoRef}
                src="/videos/goldbench-intro.mp4"
                muted
                loop
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="aspect-video w-full object-cover"
              />

              {/* Play icon overlay */}
              <div
                className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-obsidian/30 transition-opacity duration-500 ${
                  isPlaying ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20">
                  <Play
                    className="ml-1 h-6 w-6 text-platinum md:h-8 md:w-8"
                    strokeWidth={1.5}
                    fill="currentColor"
                  />
                </span>
              </div>
            </button>
          </div>

          {/* Corner accents around the frame */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-l border-t border-gold/40 pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r border-b border-gold/40 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
