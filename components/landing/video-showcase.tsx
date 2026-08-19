"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

// Video sources map by index to `t.videoShowcase.features`.
const VIDEO_SOURCES = [
  "/videos/goldbench-intro.mp4",
  "/videos/elin-scans-bill.mp4",
  "/videos/aurel-editing-photo.mp4",
];

// Only the first clip (shown on load) eagerly buffers; the rest stay idle
// until the cycle reaches them, keeping initial page load fast.
const VIDEO_PRELOAD: Array<"auto" | "none"> = ["auto", "none", "none"];

// Start crossfading this long before the clip actually ends, so the swap
// blends over live playback instead of freezing on the final frame.
const CROSSFADE_LEAD = 0.6; // seconds
const CROSSFADE_DURATION = 0.9; // seconds

export function VideoShowcase() {
  const { t } = useLanguage();
  const features = t.videoShowcase.features;

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const advancingRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Both crossfade layers share this ref. Ignore the `null` that fires when the
  // outgoing clip unmounts, so it never wipes out the newly-active element.
  const attachVideo = useCallback((node: HTMLVideoElement | null) => {
    if (node) videoRef.current = node;
  }, []);

  const goTo = (index: number) => {
    advancingRef.current = false;
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

  // Reset the advance guard whenever the active clip changes.
  useEffect(() => {
    advancingRef.current = false;
  }, [active]);

  // Progress bar follows real playback; trigger the swap slightly before the
  // end so the crossfade overlaps live motion rather than a frozen frame.
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    // Only the currently-active clip drives the bar; ignore the outgoing clip
    // that is still playing underneath during a crossfade.
    if (video !== videoRef.current) return;
    if (!video.duration || Number.isNaN(video.duration)) return;

    setProgress(Math.min(video.currentTime / video.duration, 1));

    const remaining = video.duration - video.currentTime;
    if (remaining <= CROSSFADE_LEAD && !advancingRef.current) {
      advancingRef.current = true;
      setProgress(1);
      setActive((prev) => (prev + 1) % features.length);
    }
  };

  // Safety net: if a clip ends before the lead-time trigger fires, advance.
  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    if (e.currentTarget !== videoRef.current) return;
    if (advancingRef.current) return;
    advancingRef.current = true;
    setActive((prev) => (prev + 1) % features.length);
  };

  const activeFeature = features[active % features.length];

  return (
    <section
      className="bg-obsidian pt-4 pb-24 md:pt-8 md:pb-32 relative overflow-hidden"
      aria-label="Produktvorführung: Der Sprachassistent in Aktion"
    >
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
              {/* Crossfade layers: each active clip fades in over the previous
                  one, which keeps playing underneath until fully faded. */}
              <AnimatePresence initial={false}>
                <motion.video
                  key={active}
                  ref={attachVideo}
                  src={VIDEO_SOURCES[active % VIDEO_SOURCES.length]}
                  aria-label={`Produktvideo: ${activeFeature.title}`}
                  autoPlay
                  muted={!soundOn}
                  playsInline
                  preload={VIDEO_PRELOAD[active % VIDEO_PRELOAD.length]}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleEnded}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: CROSSFADE_DURATION, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Sound toggle */}
              <button
                type="button"
                onClick={() => setSoundOn((s) => !s)}
                aria-label={soundOn ? "Video stummschalten" : "Ton einschalten"}
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
