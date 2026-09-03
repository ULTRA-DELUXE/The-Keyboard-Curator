"use client";

import type { FaqItem } from "@/types/content";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

function HoverArrow() {
  return (
    <span
      aria-hidden
      className="block h-[clamp(3.4375rem,12vw,5.5625rem)] w-[clamp(3.4375rem,12vw,5.5625rem)] shrink-0 rotate-45 border-t-2 border-r-2 border-black"
    />
  );
}

export default function FAQPanel({ question, answer, plane }: FaqItem) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  function handleClick() {
    if (window.matchMedia("(hover: none)").matches) {
      setOpen((current) => !current);
    }
  }

  return (
    <motion.button
      type="button"
      aria-expanded={open}
      onClick={handleClick}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      className="@container flex w-full min-h-[14rem] cursor-pointer appearance-none overflow-hidden border-x-0 border-t-0 border-b-2 border-black bg-white p-0 font-[inherit] text-left sm:min-h-[var(--panel-height)]"
      transition={{ duration: 0.55, ease: EASE }}
    >
      <motion.div
        className="flex min-w-0 items-center justify-end overflow-hidden border-r-2 border-black bg-white px-[var(--page-px)] py-[var(--space-4)]"
        initial={false}
        animate={{ flexGrow: open ? 25 : 75, flexBasis: 0, flexShrink: 1 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <motion.p
          className="type-headline w-[75cqw] max-w-none shrink-0 text-balance text-right text-black"
          initial={false}
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {question}
        </motion.p>
      </motion.div>

      <motion.div
        className="relative flex min-w-0 items-center justify-end overflow-hidden bg-white px-[var(--page-px)] py-[var(--space-4)]"
        initial={false}
        animate={{ flexGrow: open ? 75 : 25, flexBasis: 0, flexShrink: 1 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <motion.div
          className={`absolute inset-0 ${plane}`}
          initial={false}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: EASE }}
        />

        <motion.div
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
          initial={false}
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.3, ease: EASE }}
          aria-hidden
        >
          <motion.div
            animate={open || reduceMotion ? { x: 0 } : { x: [21, -21, 21] }}
            transition={
              open || reduceMotion
                ? { duration: 0.25, ease: EASE }
                : { duration: 1.15, repeat: Infinity, ease: EASE }
            }
          >
            <HoverArrow />
          </motion.div>
        </motion.div>

        <motion.p
          className="reading-measure type-body-lg relative z-10 w-full text-balance text-right text-white"
          initial={false}
          animate={{ opacity: open ? 1 : 0, x: open ? 0 : 40 }}
          transition={{
            duration: 0.4,
            delay: open ? 0.12 : 0,
            ease: EASE,
          }}
        >
          {answer}
        </motion.p>
      </motion.div>
    </motion.button>
  );
}
