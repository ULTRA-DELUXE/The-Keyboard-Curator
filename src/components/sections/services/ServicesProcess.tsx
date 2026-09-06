"use client";

import SectionHeader from "@/components/layout/SectionHeader";
import {
  BLUE,
  PAPER,
  WashCopy,
  WashFill,
  useScrollWash,
  useWashColor,
} from "@/components/motion/ScrollWash";
import { highlightAt } from "@/data/highlights";
import type { ProcessStep } from "@/types/content";
import { motion } from "framer-motion";

function ProcessCard({
  step,
  title,
  description,
  index,
}: {
  step: number;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, amount, hoverBind } = useScrollWash();
  const wash = highlightAt(index);
  const numberColor = useWashColor(amount, BLUE, PAPER);

  return (
    <motion.div
      ref={ref}
      className="card-surface relative flex min-h-0 flex-col justify-between overflow-visible p-[var(--space-4)] sm:min-h-[calc(var(--card-height-2col)/1.618)]"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -3, scale: 1.02 }}
      onMouseEnter={hoverBind.onMouseEnter}
      onMouseLeave={hoverBind.onMouseLeave}
    >
      <WashFill amount={amount} className={wash} />
      <motion.span
        className="type-display relative z-10 leading-none"
        style={{ color: numberColor }}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.12 + 0.08 }}
      >
        {String(step).padStart(2, "0")}
      </motion.span>

      <div className="relative z-10 text-right">
        <WashCopy amount={amount} className="type-subhead leading-tight">
          {title}
        </WashCopy>
        <WashCopy
          amount={amount}
          className="type-body mt-[var(--space-3)] text-balance"
        >
          {description}
        </WashCopy>
      </div>
    </motion.div>
  );
}

export default function ServicesProcess({
  heading,
  steps,
}: {
  heading: string;
  steps: ProcessStep[];
}) {
  return (
    <div className="span-full pt-[var(--space-4)]">
      <SectionHeader title={heading} />

      <div className="marketing-grid">
        {steps.map((step, index) => (
          <ProcessCard
            key={step.step}
            step={step.step}
            title={step.title}
            description={step.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
