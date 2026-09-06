"use client";

import { highlightFor } from "@/data/highlights";
import { WashFill, useScrollWash } from "@/components/motion/ScrollWash";
import { motion, useTransform } from "framer-motion";

interface SingleGridCardProps {
  title: string;
  productType: string;
  price: string;
  image: string;
  className?: string;
  highlight?: string;
}

export default function SingleGridCard({
  title,
  productType,
  price,
  image,
  className,
  highlight,
}: SingleGridCardProps) {
  const { ref, amount, hoverBind } = useScrollWash();
  const wash = highlight ?? highlightFor(title);
  const imageOpacity = useTransform(amount, [0, 1], [1, 0.72]);

  return (
    <motion.div
      ref={ref}
      className={`card-surface relative flex items-center justify-center overflow-hidden p-[var(--space-3)] ${className ?? ""}`}
      onMouseEnter={hoverBind.onMouseEnter}
      onMouseLeave={hoverBind.onMouseLeave}
      whileHover={{ scale: 1.015, y: -3 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: imageOpacity,
        }}
      />

      <WashFill amount={amount} className={wash} maxOpacity={0.8} />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end gap-[var(--space-1)] pb-[var(--space-3)] text-center text-white">
        <h3 className="type-subhead leading-tight">{title}</h3>
        <p className="type-caption uppercase tracking-[0.12em]">{productType}</p>
        <p className="type-body font-semibold">{price}</p>
      </div>
    </motion.div>
  );
}
