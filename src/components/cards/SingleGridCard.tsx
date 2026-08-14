"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface SingleGridCardProps {
  title: string;
  productType: string;
  price: string;
  image: string;
  className?: string;
  gradient?: string;
}

export default function SingleGridCard({
  title,
  productType,
  price,
  image,
  className,
  gradient,
}: SingleGridCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`card-surface relative flex items-center justify-center overflow-hidden p-[var(--space-3)] ${className ?? ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.015, y: -3 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className="absolute inset-0 transition-all duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: hovered ? 0.72 : 1,
        }}
      />

      <div
        className={`absolute inset-0 transition-all duration-300 ease-in-out ${hovered ? gradient : "bg-transparent"}`}
        style={{
          backgroundSize: "200% 100%",
          backgroundPosition: hovered ? "100% 0" : "0 0",
        }}
      />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end gap-[var(--space-1)] pb-[var(--space-3)] text-center text-white">
        <h3 className="type-subhead leading-tight">{title}</h3>
        <p className="type-caption uppercase tracking-[0.12em]">{productType}</p>
        <p className="type-body font-semibold">{price}</p>
      </div>
    </motion.div>
  );
}
