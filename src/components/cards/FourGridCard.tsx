"use client";

import { highlightFor } from "@/data/highlights";
import { WashCopy, WashFill, useScrollWash } from "@/components/motion/ScrollWash";
import { motion } from "framer-motion";

interface FourGridCardProps {
  title: string;
  subtitle: string;
}

export default function FourGridCard({ title, subtitle }: FourGridCardProps) {
  const { ref, amount, hoverBind } = useScrollWash();
  const highlight = highlightFor(title);

  return (
    <motion.div
      ref={ref}
      className="card-surface span-wide relative flex min-h-[14rem] flex-col items-end justify-center overflow-visible p-[var(--space-4)] sm:p-[var(--space-5)] md:min-h-[var(--card-height-4col)]"
      onMouseEnter={hoverBind.onMouseEnter}
      onMouseLeave={hoverBind.onMouseLeave}
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <WashFill amount={amount} className={highlight} />
      <WashCopy
        amount={amount}
        className="type-display relative z-10 text-balance text-right"
      >
        {title}
      </WashCopy>
      <WashCopy
        amount={amount}
        className="type-headline relative z-10 mt-[var(--space-3)] text-balance text-right"
      >
        {subtitle}
      </WashCopy>
    </motion.div>
  );
}
