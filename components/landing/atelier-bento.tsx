"use client"

import { motion } from "framer-motion"
import { Mic, FileText, Layers } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Mic,
    title: "Silent Ledger",
    subtitle: "Voice-First Inventory",
    description: "Track precious materials. Log every gram and karat. Voice-command your inventory without lifting a finger from the torch.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul_Brent_earrings_opal-xPmQkJKdC6RnO5wfpA5lzVxWPULZyW.jpg",
    imageAlt: "Gold opal earrings demonstrating fine craftsmanship",
  },
  {
    icon: FileText,
    title: "Immediate Invoicing",
    subtitle: "Speak. Bill. Done.",
    description: "Create professional invoices instantly. Speak the details while the torch still burns. Accounts sorted without the keyboard.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul_Brent_necklace_opal_ruby-tP5zVhNtWyVcKZzevlMUqLOy4W7tBQ.jpg",
    imageAlt: "Gold opal and ruby necklace - bespoke jewelry",
  },
  {
    icon: Layers,
    title: "Gallery Control",
    subtitle: "One Toggle. Total Control.",
    description: "A single slider to show or hide pieces in your public gallery. Total control from the bench, as elegant as the jewels themselves.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul_Brent_ring_platinum_sapphire-oNdR2a7XHh1UxQ6jcILKlmyDAw6JQu.jpg",
    imageAlt: "Platinum sapphire solitaire ring",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0, 1],
    },
  },
}

export function AtelierBento() {
  return (
    <section className="py-32 md:py-40 bg-obsidian relative overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      {/* Background ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/[0.02] rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold/80 text-xs tracking-[0.4em] uppercase font-medium">
            The Atelier Toolkit
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 tracking-tight text-platinum">
            Crafted for Excellence
          </h2>
          <p className="text-platinum/50 mt-4 max-w-xl mx-auto text-pretty">
            Three pillars that transform how master goldsmiths manage their craft
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-1"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative bg-obsidian-light overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute top-6 left-6">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/40 bg-obsidian/80 backdrop-blur-sm">
                    <feature.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative p-8 lg:p-10">
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/20 group-hover:border-gold/40 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/20 group-hover:border-gold/40 transition-colors duration-500" />
                
                <p className="text-gold/70 text-xs tracking-[0.3em] uppercase mb-3">
                  {feature.subtitle}
                </p>
                <h3 className="text-xl lg:text-2xl font-semibold text-platinum mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-platinum/60 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/40 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
