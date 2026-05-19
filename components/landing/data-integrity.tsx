"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Server, CheckCircle } from "lucide-react"

const securityFeatures = [
  { icon: Shield, label: "Bank-Grade Encryption" },
  { icon: Lock, label: "End-to-End Security" },
  { icon: Server, label: "Swiss Data Sovereignty" },
]

const trustPoints = [
  "Your alloy formulas remain yours alone",
  "Elite client lists in encrypted vaults",
  "No general-purpose cloud exposure",
  "Supabase protocols meet Swiss standards",
]

export function DataIntegrity() {
  return (
    <section className="py-32 md:py-40 bg-obsidian relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.015] rounded-full blur-[100px]" />
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 border border-gold/20 mb-8"
            >
              <Shield className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <span className="text-gold/80 text-xs tracking-[0.3em] uppercase">
                Data Integrity
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-platinum">
              Swiss Data<br />Integrity
            </h2>
            
            <p className="text-platinum/60 text-base md:text-lg leading-relaxed mb-8 text-pretty">
              Our infrastructure reflects your standards. Every entry, every alloy formula, 
              every elite client detail is secured in encrypted vaults—not general-purpose clouds.
            </p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gold text-lg font-medium mb-10"
            >
              Total discretion. Total integration.
            </motion.p>

            {/* Trust points */}
            <div className="space-y-4">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-gold/60 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-platinum/70 text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Security visualization */}
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Outer ring */}
                <div className="absolute inset-0 border border-gold/10 rounded-full" />
                <div className="absolute inset-4 border border-gold/15 rounded-full" />
                <div className="absolute inset-8 border border-gold/20 rounded-full" />
                
                {/* Animated ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-12 border border-dashed border-gold/20 rounded-full"
                />
                
                {/* Center shield */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-obsidian-light border border-gold/30 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-gold/80" strokeWidth={1} />
                  </div>
                </div>

                {/* Floating badges */}
                {securityFeatures.map((feature, index) => {
                  const angle = (index * 120 - 90) * (Math.PI / 180)
                  const radius = 45 // percentage from center
                  const x = 50 + radius * Math.cos(angle)
                  const y = 50 + radius * Math.sin(angle)
                  
                  return (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                      className="absolute"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="flex items-center gap-2 px-3 py-2 bg-obsidian border border-platinum/10 whitespace-nowrap">
                        <feature.icon className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                        <span className="text-platinum/60 text-xs font-medium tracking-wide">
                          {feature.label}
                        </span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
