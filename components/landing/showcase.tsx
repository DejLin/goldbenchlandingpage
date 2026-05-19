"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BrassToggle } from "./brass-toggle"

const workflowSteps = [
  {
    number: "01",
    title: "The Entry",
    description: "Voice-log 18k gold stock while setting stones at the bench.",
  },
  {
    number: "02",
    title: "The Exhibit",
    description: "One toggle reveals finished pieces in your client gallery.",
  },
  {
    number: "03",
    title: "The Settlement",
    description: "Generate and send invoices mid-process, hands-free.",
  },
]

export function Showcase() {
  return (
    <section className="py-32 md:py-40 bg-[#0c0c0e] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold/80 text-xs tracking-[0.4em] uppercase font-medium">
            The Showcase
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4 tracking-tight text-platinum">
            Witness the Workflow
          </h2>
          <p className="text-platinum/50 max-w-lg mx-auto">
            Synchronized craft and ledger—see how AtelierBench keeps pace with your expertise
          </p>
        </motion.div>

        {/* Demo Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto mb-24"
        >
          <div className="relative bg-obsidian border border-platinum/10 p-2">
            {/* Window controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-platinum/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-platinum/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-platinum/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-platinum/20" />
              </div>
              <div className="flex-1 flex justify-center">
                <span className="text-platinum/30 text-xs tracking-wider font-mono">atelierbench.app</span>
              </div>
            </div>
            
            {/* Interface content */}
            <div className="grid md:grid-cols-2 gap-1 p-1">
              {/* Left panel - Gallery preview */}
              <div className="relative aspect-[4/3] bg-obsidian-light overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul_Brent_ring_tanzanite_bubble-R2jTDgMuc0TRRfF21eqxSOjodN4fu4.jpg"
                  alt="Gallery preview - tanzanite ring"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                
                {/* Overlay UI elements */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-platinum/60 text-xs tracking-wider uppercase mb-1">Client Gallery</p>
                      <p className="text-platinum text-sm font-medium">Tanzanite Bubble Ring</p>
                    </div>
                    <BrassToggle defaultValue={true} />
                  </div>
                </div>
              </div>
              
              {/* Right panel - Ledger preview */}
              <div className="relative aspect-[4/3] bg-obsidian-light p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gold/80 text-xs tracking-[0.2em] uppercase">Silent Ledger</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-platinum/40 text-xs font-mono">LISTENING</span>
                  </div>
                </div>
                
                {/* Ledger entries */}
                <div className="flex-1 space-y-3 overflow-hidden">
                  {[
                    { material: "18k Yellow Gold", amount: "24.5g", time: "14:32" },
                    { material: "Pt 950", amount: "12.8g", time: "14:28" },
                    { material: "Boulder Opal", amount: "2 pcs", time: "14:15" },
                  ].map((entry, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center justify-between py-2 border-b border-platinum/5"
                    >
                      <div>
                        <p className="text-platinum text-sm">{entry.material}</p>
                        <p className="text-platinum/40 text-xs font-mono">{entry.time}</p>
                      </div>
                      <span className="text-gold text-sm font-mono">{entry.amount}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Voice input indicator */}
                <div className="mt-4 pt-4 border-t border-platinum/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex gap-0.5">
                        {[...Array(20)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [4, Math.random() * 16 + 4, 4] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                            className="w-1 bg-gold/60 rounded-full"
                            style={{ height: 4 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reflection effect */}
          <div className="absolute -bottom-20 left-0 right-0 h-20 bg-gradient-to-b from-gold/5 to-transparent opacity-50 blur-xl" />
        </motion.div>

        {/* Workflow Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 md:gap-4"
          >
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent -translate-y-1/2" />
                )}
                
                <div className="flex items-start gap-4">
                  <span className="text-gold/30 text-4xl font-bold tracking-tighter font-mono">
                    {step.number}
                  </span>
                  <div className="pt-2">
                    <h4 className="text-lg font-semibold text-platinum mb-2 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-platinum/50 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
