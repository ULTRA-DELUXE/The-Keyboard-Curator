"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  tagline: string;
  description: string;
  price: string;
  gradient: string;
  className?: string;
}

export default function ServiceCard({
  title,
  tagline,
  description,
  price,
  gradient,
  className,
}: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`card-surface span-half relative flex min-h-[calc(var(--card-height-2col)*1.05)] flex-col items-end justify-between gap-[var(--space-3)] overflow-hidden p-[var(--space-4)] sm:p-[var(--space-5)] ${className ?? ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className={`absolute inset-0 bg-white transition-all duration-300 ease-in-out ${
          hovered ? gradient : ""
        }`}
        style={{
          backgroundSize: "200% 100%",
          backgroundPosition: hovered ? "100% 0" : "0 0",
        }}
      />

      <div className="relative z-10 w-full text-right">
        <p
          className={`type-headline transition-colors duration-300 ${
            hovered ? "text-white" : "text-black"
          }`}
        >
          {title}
        </p>
        <p
          className={`type-body mt-[var(--space-2)] italic transition-colors duration-300 ${
            hovered ? "text-white/90" : "text-black/70"
          }`}
        >
          {tagline}
        </p>
      </div>

      <p
        className={`reading-measure type-body-lg relative z-10 text-balance text-right transition-colors duration-300 ${
          hovered ? "text-white" : "text-black"
        }`}
      >
        {description}
      </p>

      <p
        className={`type-subhead relative z-10 text-right font-semibold transition-colors duration-300 ${
          hovered ? "text-white" : "text-black"
        }`}
      >
        {price}
      </p>
    </motion.div>
  );
}
