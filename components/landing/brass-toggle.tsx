"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface BrassToggleProps {
  onToggle?: (isPublic: boolean) => void
  defaultValue?: boolean
}

export function BrassToggle({ onToggle, defaultValue = false }: BrassToggleProps) {
  const [isPublic, setIsPublic] = useState(defaultValue)

  const handleToggle = () => {
    const newValue = !isPublic
    setIsPublic(newValue)
    onToggle?.(newValue)
  }

  return (
    <div className="flex items-center gap-3">
      {/* Status label - left */}
      <span className={`text-xs font-mono tracking-wider transition-colors duration-300 ${!isPublic ? 'text-platinum/60' : 'text-platinum/30'}`}>
        PRIVATE
      </span>

      {/* Toggle Track - Machined brass aesthetic */}
      <button
        onClick={handleToggle}
        className="relative w-16 h-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
        aria-label={isPublic ? "Set to private" : "Set to public"}
      >
        {/* Outer frame - brushed metal effect */}
        <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#0f0f0f] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.5)]">
          {/* Inner track */}
          <div className="absolute inset-[2px] rounded-sm bg-gradient-to-b from-[#0d0d0d] to-[#080808] shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)]">
            {/* Active state glow */}
            <motion.div
              animate={{ opacity: isPublic ? 0.3 : 0 }}
              className="absolute inset-0 bg-gold/20 rounded-sm"
            />
          </div>
        </div>

        {/* Toggle knob - machined brass */}
        <motion.div
          animate={{ x: isPublic ? 23 : 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 600, 
            damping: 35,
            mass: 0.6
          }}
          className="absolute top-[2px] left-[2px] w-[27px] h-[23px] rounded-sm cursor-pointer"
          style={{
            background: isPublic 
              ? `linear-gradient(135deg, #e5c65c 0%, #D4AF37 30%, #b8962f 50%, #D4AF37 70%, #e5c65c 100%)`
              : `linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 30%, #2a2a2a 50%, #3a3a3a 70%, #4a4a4a 100%)`,
            boxShadow: isPublic
              ? `inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.3), 0 2px 6px rgba(212,175,55,0.3), 0 1px 2px rgba(0,0,0,0.4)`
              : `inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.4)`,
          }}
        >
          {/* Knurled grip pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col gap-[2px]">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-4 h-[1px] ${isPublic ? 'bg-[#8a7028]' : 'bg-[#2a2a2a]'} opacity-50`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </button>

      {/* Status label - right */}
      <span className={`text-xs font-mono tracking-wider transition-colors duration-300 ${isPublic ? 'text-gold' : 'text-platinum/30'}`}>
        PUBLIC
      </span>
    </div>
  )
}
