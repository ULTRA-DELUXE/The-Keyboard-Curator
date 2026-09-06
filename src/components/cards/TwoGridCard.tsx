"use client";

import { highlightFor } from "@/data/highlights";
import type { QuoteContent } from "@/types/content";
import { WashCopy, WashFill, useScrollWash } from "@/components/motion/ScrollWash";
import { motion } from "framer-motion";

interface TwoGridCardProps {
  content?: string | QuoteContent;
  className?: string;
  highlight?: string;
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
  highlight,
  size = "body",
  layout = "grid",
}: TwoGridCardProps) {
  const { ref, amount, hoverBind } = useScrollWash();
  const spanClass = layout === "block" ? "w-full" : "span-half";
  const seed = isQuoteContent(content) ? content.quote : (content ?? "card");
  const wash = highlight ?? highlightFor(seed);

  return (
    <motion.div
      ref={ref}
      className={`card-surface ${spanClass} relative flex min-h-[12rem] flex-col items-end justify-center overflow-visible p-[var(--space-4)] sm:p-[var(--space-5)] md:min-h-[var(--card-height-2col)] ${className ?? ""}`}
      onMouseEnter={hoverBind.onMouseEnter}
      onMouseLeave={hoverBind.onMouseLeave}
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <WashFill amount={amount} className={wash} />

      {content ? (
        isQuoteContent(content) ? (
          <>
            <WashCopy
              amount={amount}
              className="reading-measure type-body-lg relative z-10 text-right italic"
            >
              &ldquo;{content.quote}&rdquo;
            </WashCopy>
            <WashCopy
              amount={amount}
              className="type-subhead relative z-10 mt-[var(--space-3)] text-right"
            >
              {content.name}
            </WashCopy>
          </>
        ) : (
          <WashCopy
            amount={amount}
            className={`reading-measure relative z-10 text-balance text-right ${
              size === "headline" ? "type-headline" : "type-body-lg"
            }`}
          >
            {content}
          </WashCopy>
        )
      ) : null}
    </motion.div>
  );
}
