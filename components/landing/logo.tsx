"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { width: 160, height: 160 },
    md: { width: 200, height: 200 },
    lg: { width: 280, height: 280 },
  };

  const { width, height } = sizes[size];

  return (
    <motion.div
      className={`relative flex items-center justify-center group ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 rounded-full blur-3xl transition-all duration-700 scale-150" />
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative"
      >
        <Image
          src="/images/goldbench-logo.png"
          alt="GoldBench - Voice-Powered Workspace for Goldsmiths"
          width={width}
          height={height}
          priority
          className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500"
        />
      </motion.div>
    </motion.div>
  );
}

export function LogoMinimal({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image
        src="/images/goldbench-logo.png"
        alt="GoldBench"
        width={80}
        height={80}
        className="object-contain"
      />
    </motion.div>
  );
}
