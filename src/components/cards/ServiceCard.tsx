"use client";

import { highlightFor } from "@/data/highlights";
import { WashCopy, WashFill, useScrollWash } from "@/components/motion/ScrollWash";
import { motion } from "framer-motion";
import type { Ref } from "react";

interface ServiceCardProps {
  title: string;
  tagline: string;
  description: string;
  price: string;
  highlight?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  tagline,
  description,
  price,
  highlight,
  className,
}: ServiceCardProps) {
  const { ref, amount, hoverBind } = useScrollWash();
  const wash = highlight ?? highlightFor(title);

  return (
    <motion.div
      ref={ref as Ref<HTMLDivElement>}
      className={`card-surface span-half relative flex min-h-0 flex-col items-end justify-between gap-[var(--space-3)] overflow-visible p-[var(--space-4)] sm:p-[var(--space-5)] md:min-h-[calc(var(--card-height-2col)*1.05)] ${className ?? ""}`}
      onMouseEnter={hoverBind.onMouseEnter}
      onMouseLeave={hoverBind.onMouseLeave}
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <WashFill amount={amount} className={wash} />

      <div className="relative z-10 w-full text-right">
        <WashCopy amount={amount} className="type-headline">
          {title}
        </WashCopy>
        <WashCopy
          amount={amount}
          muted
          className="type-body mt-[var(--space-2)] italic"
        >
          {tagline}
        </WashCopy>
      </div>

      <WashCopy
        amount={amount}
        className="reading-measure type-body-lg relative z-10 text-balance text-right"
      >
        {description}
      </WashCopy>

      <WashCopy
        amount={amount}
        className="type-subhead relative z-10 text-right font-semibold"
      >
        {price}
      </WashCopy>
    </motion.div>
  );
}
