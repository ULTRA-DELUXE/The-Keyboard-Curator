"use client";

import type { QuoteContent } from "@/types/content";
import { motion } from "framer-motion";
import { useState } from "react";

interface TwoGridCardProps {
  content?: string | QuoteContent;
  className?: string;
  gradient?: string;
  size?: "headline" | "body";
  layout?: "grid" | "block";
}

function isQuoteContent(content: unknown): content is QuoteContent {
  return (
    typeof content === "object" &&
    content !== null &&
    "quote" in content &&
    "name" in content
  );
}

export default function TwoGridCard({
  content,
  className,
  gradient,
  size = "body",
  layout = "grid",
}: TwoGridCardProps) {
  const [hovered, setHovered] = useState(false);
  const spanClass = layout === "block" ? "w-full" : "span-half";

  return (
    <motion.div
      className={`card-surface ${spanClass} relative flex min-h-[var(--card-height-2col)] flex-col items-end justify-center overflow-hidden p-[var(--space-4)] sm:p-[var(--space-5)] ${className ?? ""}`}
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

      {content ? (
        isQuoteContent(content) ? (
          <>
            <p
              className={`reading-measure type-body-lg relative z-10 text-right italic transition-colors duration-300 ${
                hovered ? "text-white" : "text-black"
              }`}
            >
              &ldquo;{content.quote}&rdquo;
            </p>
            <p
              className={`type-subhead relative z-10 mt-[var(--space-3)] text-right transition-colors duration-300 ${
                hovered ? "text-white" : "text-black"
              }`}
            >
              {content.name}
            </p>
          </>
        ) : (
          <p
            className={`reading-measure relative z-10 text-balance text-right transition-colors duration-300 ${
              size === "headline" ? "type-headline" : "type-body-lg"
            } ${hovered ? "text-white" : "text-black"}`}
          >
            {content}
          </p>
        )
      ) : null}
    </motion.div>
  );
}
