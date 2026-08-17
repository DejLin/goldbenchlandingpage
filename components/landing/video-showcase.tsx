"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

// Video sources map by index to `t.videoShowcase.features`.
const VIDEO_SOURCES = [
  "/videos/goldbench-intro.mp4",
  "/videos/elin-scans-bill.mp4",
  "/videos/aurel-editing-photo.mp4",
];

const HOLD_AFTER_VIDEO = 1400; // ms pause on the last frame before advancing

export function VideoShowcase() {
  const { t } = useLanguage();
  const features = t.videoShowcase.features;

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const holdRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const goTo = (index: number) => {
    if (holdRef.current) {
      clearTimeout(holdRef.current);
      holdRef.current = null;
    }
    setProgress(0);
    setActive(index);
  };

  // Reliably reflect the sound toggle onto the (re-mounting) video element.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !soundOn;
    if (soundOn) {
      video.volume = 1;
      // A user gesture enabled sound, so make sure playback is running.
      video.play().catch(() => {});
    }
  }, [soundOn, active]);

  // Clear any pending hold timer on unmount.
  useEffect(() => {
    return () => {
      if (holdRef.current) clearTimeout(holdRef.current);
    };
  }, []);

  // Progress bar follows the video's real playback position.
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration || Number.isNaN(video.duration)) return;
    setProgress(Math.min(video.currentTime / video.duration, 1));
  };

  // When a clip finishes, hold on the final frame, then advance to the next.
  const handleEnded = () => {
    setProgress(1);
    if (holdRef.current) clearTimeout(holdRef.current);
    holdRef.current = window.setTimeout(() => {
      goTo((active + 1) % features.length);
    }, HOLD_AFTER_VIDEO);
  };

  const activeFeature = features[active % features.length];

  return (
    <section className="bg-obsidian pt-4 pb-24 md:pt-8 md:pb-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gold/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section intro — headline swaps to match the active video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-5">
            {t.videoShowcase.label}
          </p>
          <div className="min-h-[4.5rem] md:min-h-[7rem] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight text-balance max-w-3xl mx-auto"
              >
                {activeFeature.description}
              </motion.h2>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Big full-width video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Gold bezel */}
          <div className="rounded-2xl p-px bg-gradient-to-b from-gold/40 via-white/[0.08] to-gold/20">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.8)] aspect-video bg-obsidian">
              <AnimatePresence mode="wait">
                <motion.video
                  key={active}
                  ref={videoRef}
                  src={VIDEO_SOURCES[active % VIDEO_SOURCES.length]}
                  autoPlay
                  muted={!soundOn}
                  playsInline
                  preload="auto"
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleEnded}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Sound toggle */}
              <button
                type="button"
                onClick={() => setSoundOn((s) => !s)}
                aria-label={soundOn ? "Mute video" : "Unmute video"}
                aria-pressed={soundOn}
                className="absolute bottom-4 right-4 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-obsidian/60 backdrop-blur-md border border-white/15 text-platinum hover:text-gold hover:border-gold/40 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                {soundOn ? (
                  <Volume2 className="w-5 h-5" strokeWidth={1.5} />
                ) : (
                  <VolumeX className="w-5 h-5" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-l border-t border-gold/40 pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r border-b border-gold/40 pointer-events-none" />
        </motion.div>

        {/* Progress dots — indicate which video is playing + allow manual switch */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {features.map((feature, index) => {
            const isActive = index === active;
            return (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={feature.title}
                aria-current={isActive}
                className="group relative h-1.5 rounded-full overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                style={{ width: isActive ? 56 : 24 }}
              >
                <span className="absolute inset-0 bg-white/15 group-hover:bg-white/25 transition-colors" />
                {isActive && (
                  <span
                    className="absolute inset-y-0 left-0 bg-gold"
                    style={{
                      width: `${progress * 100}%`,
                      transition: "width 80ms linear",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
