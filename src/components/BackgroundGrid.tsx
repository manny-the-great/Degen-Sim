"use client";

import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#0A0A0A]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated vertical scanning line */}
      <motion.div
        className="absolute top-0 bottom-0 w-[1px]"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
        animate={{
          x: ["-10vw", "110vw"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Horizontal scanline */}
      <div className="scanline" />

      {/* Corner markers */}
      <svg
        className="absolute top-8 left-8 opacity-20"
        width="40"
        height="40"
        viewBox="0 0 40 40"
      >
        <path
          d="M0 15 L0 0 L15 0"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
      <svg
        className="absolute top-8 right-8 opacity-20"
        width="40"
        height="40"
        viewBox="0 0 40 40"
      >
        <path
          d="M25 0 L40 0 L40 15"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
      <svg
        className="absolute bottom-8 left-8 opacity-20"
        width="40"
        height="40"
        viewBox="0 0 40 40"
      >
        <path
          d="M0 25 L0 40 L15 40"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
      <svg
        className="absolute bottom-8 right-8 opacity-20"
        width="40"
        height="40"
        viewBox="0 0 40 40"
      >
        <path
          d="M25 40 L40 40 L40 25"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
      </svg>

      {/* Noise overlay */}
      <div className="noise-overlay" />
    </div>
  );
}
