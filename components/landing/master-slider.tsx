"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function MasterSlider() {
  const [isPublic, setIsPublic] = useState(false);

  return (
    <section className="relative py-32 px-8 bg-obsidian overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center mb-20"
      >
        <p className="text-[11px] uppercase tracking-[0.4em] text-platinum-dim/60 mb-3">
          Gallery Control
        </p>
        <h2 className="text-[32px] font-light tracking-[-0.02em] text-platinum">
          The Master Slider
        </h2>
        <p className="mt-4 text-[13px] leading-relaxed text-platinum-dim/70 max-w-md mx-auto">
          One gesture. Complete control over what your clients see.
        </p>
      </motion.div>

      {/* Slider Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <div 
          className="relative border border-glass-border p-8 transition-all duration-700"
          style={{
            background: isPublic 
              ? `linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(184, 115, 51, 0.04) 100%)`
              : '#0a0a0a',
            boxShadow: isPublic 
              ? '0 0 80px rgba(212, 175, 55, 0.15), inset 0 0 60px rgba(212, 175, 55, 0.03)'
              : 'none',
          }}
        >
          {/* Corner accents - animate with state */}
          <motion.div 
            className="absolute top-0 left-0 w-12 h-px"
            animate={{ 
              background: isPublic 
                ? 'linear-gradient(to right, #D4AF37, transparent)'
                : 'linear-gradient(to right, rgba(255,255,255,0.08), transparent)'
            }}
          />
          <motion.div 
            className="absolute top-0 left-0 w-px h-12"
            animate={{ 
              background: isPublic 
                ? 'linear-gradient(to bottom, #D4AF37, transparent)'
                : 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)'
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-12 h-px"
            animate={{ 
              background: isPublic 
                ? 'linear-gradient(to left, #D4AF37, transparent)'
                : 'linear-gradient(to left, rgba(255,255,255,0.08), transparent)'
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-px h-12"
            animate={{ 
              background: isPublic 
                ? 'linear-gradient(to top, #D4AF37, transparent)'
                : 'linear-gradient(to top, rgba(255,255,255,0.08), transparent)'
            }}
          />

          {/* Status indicator */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isPublic ? 'public' : 'private'}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {isPublic ? (
                    <Eye className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  ) : (
                    <EyeOff className="w-4 h-4 text-platinum-dim/40" strokeWidth={1.5} />
                  )}
                </motion.div>
              </AnimatePresence>
              <span className="text-[11px] uppercase tracking-[0.3em] text-platinum-dim/60">
                Gallery Status
              </span>
            </div>
            <motion.span
              animate={{ color: isPublic ? '#D4AF37' : 'rgba(136, 136, 136, 0.6)' }}
              className="text-[11px] uppercase tracking-[0.3em] font-medium"
            >
              {isPublic ? 'Public' : 'Private'}
            </motion.span>
          </div>

          {/* The Slider */}
          <div className="relative">
            {/* Track */}
            <div 
              className="relative h-14 border border-glass-border overflow-hidden cursor-pointer"
              onClick={() => setIsPublic(!isPublic)}
              style={{
                background: isPublic 
                  ? 'linear-gradient(90deg, rgba(212, 175, 55, 0.1) 0%, rgba(184, 115, 51, 0.05) 100%)'
                  : '#0a0a0a',
              }}
            >
              {/* Track labels */}
              <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                <span 
                  className="text-[10px] uppercase tracking-[0.25em] transition-colors duration-500"
                  style={{ color: !isPublic ? 'rgba(229, 229, 229, 0.8)' : 'rgba(136, 136, 136, 0.3)' }}
                >
                  Private
                </span>
                <span 
                  className="text-[10px] uppercase tracking-[0.25em] transition-colors duration-500"
                  style={{ color: isPublic ? '#D4AF37' : 'rgba(136, 136, 136, 0.3)' }}
                >
                  Public
                </span>
              </div>

              {/* Knob */}
              <motion.div
                className="absolute top-1 bottom-1 w-24 rounded-sm"
                animate={{
                  left: isPublic ? 'calc(100% - 104px)' : '4px',
                  background: isPublic 
                    ? 'linear-gradient(135deg, #D4AF37 0%, #B87333 100%)'
                    : 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                  boxShadow: isPublic
                    ? '0 0 20px rgba(212, 175, 55, 0.4)'
                    : '0 2px 8px rgba(0, 0, 0, 0.5)',
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{
                  border: isPublic ? '1px solid rgba(212, 175, 55, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Knob texture - machined lines */}
                <div className="absolute inset-0 flex items-center justify-center gap-[3px] opacity-40">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-px h-4"
                      style={{
                        background: isPublic 
                          ? 'rgba(5, 5, 5, 0.5)'
                          : 'rgba(255, 255, 255, 0.1)',
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-[11px] leading-relaxed text-platinum-dim/50 text-center">
            Toggle visibility for your entire client-facing gallery with a single control.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
