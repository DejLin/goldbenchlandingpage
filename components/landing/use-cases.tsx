"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const useCases = [
  {
    id: 1,
    title: "Voice Logging",
    description: "Log materials and time with a simple voice command",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-03-29%20at%208.28.22%20PM-0LshVna5Zbm0nbIHv9o9MDR7ADBvIO.mp4",
  },
  {
    id: 2,
    title: "Instant Invoicing",
    description: "Generate professional invoices in seconds",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-03-30%20at%205.14.59%20PM-Fj12emcUZuD8aQM9QUhaTY7RdSOSfh.mp4",
  },
  {
    id: 3,
    title: "Material Tracking",
    description: "Keep precise records of every gram",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-03-30%20at%205.27.52%20PM-KlHYxHeFShvR6gAyxveojksCnpxlpx.mp4",
  },
  {
    id: 4,
    title: "Client Gallery",
    description: "Share curated pieces with one click",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-03-30%20at%205.21.07%20PM-yQ98PY9e99RzE7YVwKdVgieiVQdR0e.mp4",
  },
];

export function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeCase = useCases[activeIndex];

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % useCases.length);
    setIsPlaying(false);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
    setIsPlaying(false);
  };

  const selectCase = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(false);
  };

  return (
    <section className="py-24 md:py-32 bg-obsidian">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-platinum tracking-tight mb-4">
            The Master&apos;s Workflow.
          </h2>
          <p className="text-platinum/70 text-lg max-w-xl mx-auto">
            Precision administration, without ever leaving the loupe.
          </p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <div className="relative aspect-[9/16] max-w-sm mx-auto bg-obsidian-light border border-platinum/10 rounded-sm overflow-hidden">
            {/* Video Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <video
                  ref={videoRef}
                  src={activeCase.videoUrl}
                  className="w-full h-full object-cover"
                  playsInline
                  onEnded={handleVideoEnded}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              </motion.div>
            </AnimatePresence>

            {/* Play/Pause Overlay */}
            <button
              onClick={handleVideoClick}
              className="absolute inset-0 flex items-center justify-center bg-obsidian/30 opacity-0 hover:opacity-100 transition-opacity duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-obsidian" />
                ) : (
                  <Play className="w-6 h-6 text-obsidian ml-1" />
                )}
              </div>
            </button>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent">
              <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">
                {activeCase.title}
              </p>
              <p className="text-platinum/80 text-sm">
                {activeCase.description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-obsidian/60 border border-platinum/20 hover:border-gold/50 hover:bg-obsidian/80 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-platinum" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-obsidian/60 border border-platinum/20 hover:border-gold/50 hover:bg-obsidian/80 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-platinum" />
            </button>

            {/* Progress Indicator */}
            <div className="absolute top-4 left-4 right-4 flex gap-2">
              {useCases.map((_, index) => (
                <div
                  key={index}
                  className={`h-0.5 flex-1 transition-all duration-300 ${
                    index === activeIndex ? "bg-gold" : "bg-platinum/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Thumbnail Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {useCases.map((useCase, index) => (
            <button
              key={useCase.id}
              onClick={() => selectCase(index)}
              className={`group relative p-4 border transition-all duration-300 text-left ${
                index === activeIndex
                  ? "border-gold bg-gold/5"
                  : "border-platinum/10 hover:border-platinum/30 bg-obsidian-light"
              }`}
            >
              {/* Number indicator */}
              <span
                className={`text-3xl font-light mb-2 block transition-colors duration-300 ${
                  index === activeIndex ? "text-gold" : "text-platinum/20 group-hover:text-platinum/40"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              
              <p
                className={`text-sm font-medium transition-colors duration-300 ${
                  index === activeIndex ? "text-gold" : "text-platinum/80"
                }`}
              >
                {useCase.title}
              </p>
              <p className="text-platinum/50 text-xs mt-1 line-clamp-2">
                {useCase.description}
              </p>

              {/* Active indicator */}
              {index === activeIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
