"use client";

import { highlightFor } from "@/data/highlights";
import { WashCopy, WashFill, useScrollWash } from "@/components/motion/ScrollWash";
import { motion } from "framer-motion";
import type { Ref } from "react";

interface SplitGridCardProps {
  title: string;
  description: string;
  highlight?: string;
  className?: string;
}

export default function SplitGridCard({
  title,
  description,
  highlight,
  className = "",
}: SplitGridCardProps) {
  const { ref, amount, hoverBind } = useScrollWash();
  const wash = highlight ?? highlightFor(title);

  return (
    <motion.article
      ref={ref as Ref<HTMLElement>}
      className={`card-surface span-full relative flex min-h-0 flex-col overflow-visible md:min-h-[var(--card-height-2col)] md:flex-row ${className}`}
      onMouseEnter={hoverBind.onMouseEnter}
      onMouseLeave={hoverBind.onMouseLeave}
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <WashFill amount={amount} className={wash} />

      <div className="relative z-10 flex min-h-0 w-full shrink-0 flex-col items-end justify-center border-b-2 border-black p-[var(--space-4)] sm:p-[var(--space-5)] md:min-h-[var(--card-height-2col)] md:w-[calc(50%-var(--grid-gap)/2)] md:border-b-0 md:border-r-2">
        <WashCopy
          amount={amount}
          className="type-headline w-full text-balance text-right"
        >
          {title}
        </WashCopy>
      </div>

      <div className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col items-end justify-center p-[var(--space-4)] sm:p-[var(--space-5)] md:min-h-[var(--card-height-2col)]">
        <WashCopy
          amount={amount}
          className="reading-measure type-body-lg w-full text-balance text-right"
        >
          {description}
        </WashCopy>
      </div>
    </motion.article>
  );
}
