"use client";

import { highlightFor } from "@/data/highlights";
import { WashCopy, WashFill, useScrollWash } from "@/components/motion/ScrollWash";
import { motion } from "framer-motion";
import type { Ref } from "react";

interface LargeCardProps {
  content?: string;
  className?: string;
  highlight?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function LargeCard({
  content,
  className,
  highlight,
  imageSrc,
  imageAlt,
}: LargeCardProps) {
  const { ref, amount, hoverBind } = useScrollWash();
  const wash = highlight ?? highlightFor(content ?? imageAlt ?? imageSrc ?? "card");

  return (
    <motion.div
      ref={ref as Ref<HTMLDivElement>}
      className={`card-surface span-half row-tall relative flex min-h-[16rem] flex-col items-center justify-center p-[var(--space-4)] sm:p-[var(--space-5)] md:min-h-[var(--card-height-4col)] ${
        imageSrc ? "overflow-hidden" : "overflow-visible"
      } ${className ?? ""}`}
      onMouseEnter={hoverBind.onMouseEnter}
      onMouseLeave={hoverBind.onMouseLeave}
      whileHover={{ scale: 1.004, y: -2 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {imageSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={imageAlt ?? content ?? "Keyboard showcase"}
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      )}

      <WashFill
        amount={amount}
        className={wash}
        maxOpacity={imageSrc ? 0.8 : 1}
      />

      {content && (
        <WashCopy
          amount={amount}
          className="reading-measure type-body-lg relative z-10 ml-auto text-balance text-right"
        >
          {content}
        </WashCopy>
      )}
    </motion.div>
  );
}
