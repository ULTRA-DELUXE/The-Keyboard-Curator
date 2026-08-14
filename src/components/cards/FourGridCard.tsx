"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FourGridCardProps {
  title: string;
  subtitle: string;
}

export default function FourGridCard({ title, subtitle }: FourGridCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="card-surface span-wide row-tall relative flex min-h-[var(--card-height-4col)] flex-col items-end justify-center overflow-hidden p-[var(--space-4)] sm:p-[var(--space-5)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className={`absolute inset-0 bg-white transition-all duration-300 ease-in-out ${
          hovered ? "bg-gradient-to-l from-de-blue to-transparent" : ""
        }`}
        style={{
          backgroundSize: "200% 100%",
          backgroundPosition: hovered ? "100% 0" : "0 0",
        }}
      />
      <p
        className={`type-display relative z-10 text-balance text-right transition-colors duration-300 ${
          hovered ? "text-white" : "text-black"
        }`}
      >
        {title}
      </p>
      <p
        className={`type-headline relative z-10 mt-[var(--space-3)] text-balance text-right transition-colors duration-300 ${
          hovered ? "text-white" : "text-black"
        }`}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}
