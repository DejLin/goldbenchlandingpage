"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryItems = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul_Brent_ring_platinum_sapphire-oNdR2a7XHh1UxQ6jcILKlmyDAw6JQu.jpg",
    title: "Ceylon Sapphire",
    subtitle: "Platinum Setting",
    year: "2024",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul_Brent_necklace_opal_ruby-tP5zVhNtWyVcKZzevlMUqLOy4W7tBQ.jpg",
    title: "Australian Opal",
    subtitle: "18K Gold & Ruby",
    year: "2024",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul_Brent_earrings_opal-xPmQkJKdC6RnO5wfpA5lzVxWPULZyW.jpg",
    title: "Boulder Opal",
    subtitle: "Brushed Gold",
    year: "2024",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul_Brent_ring_tanzanite_bubble-R2jTDgMuc0TRRfF21eqxSOjodN4fu4.jpg",
    title: "Tanzanite Cabochon",
    subtitle: "Diamond Halo",
    year: "2024",
  },
];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-obsidian">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-8 mb-16"
      >
        <p className="text-[11px] uppercase tracking-[0.4em] text-platinum-dim/60 mb-3">
          Portfolio
        </p>
        <h2 className="text-[32px] font-light tracking-[-0.02em] text-platinum">
          Selected Works
        </h2>
      </motion.div>

      {/* Horizontal scroll gallery */}
      <motion.div style={{ x }} className="flex gap-8 px-8">
        {galleryItems.map((item, index) => (
          <GalleryCard key={index} item={item} index={index} />
        ))}
      </motion.div>

      {/* Glass border line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-glass-border" />
    </section>
  );
}

function GalleryCard({ 
  item, 
  index 
}: { 
  item: typeof galleryItems[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative flex-shrink-0"
    >
      {/* Card container with glass border */}
      <div className="relative w-[380px] aspect-square bg-obsidian-light border border-glass-border overflow-hidden">
        {/* Museum spotlight vignette */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, rgba(5, 5, 5, 0.7) 100%)`,
          }}
        />
        
        {/* Hover spotlight effect */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse 60% 60% at 50% 50%, transparent 0%, rgba(5, 5, 5, 0.4) 100%)`,
          }}
        />

        {/* Image */}
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover"
            sizes="380px"
          />
        </motion.div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-gold/50 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-8 h-px bg-gradient-to-l from-gold/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-px h-8 bg-gradient-to-t from-gold/50 to-transparent" />
      </div>

      {/* Caption */}
      <div className="mt-6 flex justify-between items-end">
        <div>
          <h3 className="text-[14px] font-medium tracking-tight text-platinum">
            {item.title}
          </h3>
          <p className="text-[11px] tracking-[0.1em] text-platinum-dim/60 mt-1">
            {item.subtitle}
          </p>
        </div>
        <span className="text-[10px] tracking-[0.2em] text-platinum-dim/40">
          {item.year}
        </span>
      </div>
    </motion.div>
  );
}
