"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface LargeCardProps {
  content?: string;
  className?: string;
  gradient?: string;
  imageSrc?: string;
}

export default function LargeCard({
  content,
  className,
  gradient,
  imageSrc,
}: LargeCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`card-surface span-half row-tall relative flex flex-col items-center justify-center overflow-hidden p-[var(--space-4)] sm:p-[var(--space-5)] ${className ?? ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.004, y: -2 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {imageSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={content ?? "Keyboard showcase"}
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      )}

      <div
        className={`absolute inset-0 transition-all duration-300 ease-in-out ${hovered ? gradient : ""}`}
        style={{
          backgroundSize: "200% 100%",
          backgroundPosition: hovered ? "100% 0" : "0 0",
          zIndex: 1,
        }}
      />

      {content && (
        <p
          className={`reading-measure type-body-lg relative z-10 ml-auto text-balance text-right transition-colors duration-300 ${
            hovered ? "text-white" : "text-black"
          }`}
        >
          {content}
        </p>
      )}
    </motion.div>
  );
}
