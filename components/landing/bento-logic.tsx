"use client";

import { motion } from "framer-motion";
import { Mic, FileText, Gem, Scale, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice Capture",
    description: "Speak your entries naturally. Our AI transcribes and categorizes in real-time.",
    span: "col-span-1",
  },
  {
    icon: FileText,
    title: "Instant Invoice",
    description: "Materials, labor, and margins calculated automatically. One tap to send.",
    span: "col-span-1",
  },
  {
    icon: Gem,
    title: "Material Tracking",
    description: "Every gram of gold, every carat of gemstone. Logged, valued, audited.",
    span: "col-span-1",
  },
  {
    icon: Scale,
    title: "Alloy Formulas",
    description: "Your proprietary formulas encrypted and secured. Swiss data sovereignty.",
    span: "col-span-1",
  },
  {
    icon: Clock,
    title: "Time Logging",
    description: "Automatic session tracking. Know your true hourly value.",
    span: "col-span-1",
  },
  {
    icon: Shield,
    title: "Client Privacy",
    description: "Bank-grade encryption. Your client list stays yours alone.",
    span: "col-span-1",
  },
];

export function BentoLogic() {
  return (
    <section className="relative py-32 px-8 bg-obsidian">
      {/* Glass border top */}
      <div className="absolute top-0 left-8 right-8 h-px bg-glass-border" />
      
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-20"
      >
        <p className="text-[11px] uppercase tracking-[0.4em] text-platinum-dim/60 mb-3">
          Workflow
        </p>
        <h2 className="text-[32px] font-light tracking-[-0.02em] text-platinum">
          Voice-to-Invoice Logic
        </h2>
      </motion.div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-glass-border">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ 
  feature, 
  index 
}: { 
  feature: typeof features[0];
  index: number;
}) {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative bg-obsidian p-8 ${feature.span}`}
    >
      {/* Hover glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.03) 0%, transparent 70%)',
        }}
      />
      
      {/* Icon */}
      <div className="relative mb-6">
        <Icon 
          className="w-5 h-5 text-platinum-dim/50 group-hover:text-gold transition-colors duration-500" 
          strokeWidth={1} 
        />
      </div>
      
      {/* Content */}
      <h3 className="text-[14px] font-medium tracking-tight text-platinum mb-3">
        {feature.title}
      </h3>
      <p className="text-[12px] leading-relaxed text-platinum-dim/60">
        {feature.description}
      </p>
      
      {/* Corner accent on hover */}
      <div className="absolute bottom-0 right-0 w-0 h-0 group-hover:w-8 group-hover:h-8 transition-all duration-500">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-gold/40 to-transparent" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-gold/40 to-transparent" />
      </div>
    </motion.div>
  );
}
