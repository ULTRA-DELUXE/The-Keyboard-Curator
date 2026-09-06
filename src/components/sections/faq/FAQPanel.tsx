"use client";

import type { FaqItem } from "@/types/content";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

function HoverArrow() {
  return (
    <span
      aria-hidden
      className="block h-[clamp(2.125rem,10vw,5.5625rem)] w-[clamp(2.125rem,10vw,5.5625rem)] shrink-0 rotate-[135deg] border-t-2 border-r-2 border-black md:rotate-45"
    />
  );
}

export default function FAQPanel({ question, answer, plane }: FaqItem) {
  const [open, setOpen] = useState(false);
  const [wide, setWide] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => setWide(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  function handleClick() {
    if (!wide || window.matchMedia("(hover: none)").matches) {
      setOpen((current) => !current);
    }
  }

  return (
    <motion.button
      type="button"
      aria-expanded={open}
      onClick={handleClick}
      onHoverStart={() => {
        if (wide) setOpen(true);
      }}
      onHoverEnd={() => {
        if (wide) setOpen(false);
      }}
      className="group @container flex h-auto w-full shrink-0 cursor-pointer appearance-none flex-col overflow-hidden border-x-0 border-t-0 border-b-2 border-black bg-white p-0 font-[inherit] text-left touch-manipulation md:h-[var(--panel-height)] md:flex-row"
      transition={{ duration: 0.55, ease: EASE }}
    >
      <motion.div
        className="flex min-w-0 items-center justify-end overflow-visible border-b-2 border-black bg-white px-[var(--page-px)] py-[var(--space-4)] md:overflow-hidden md:border-b-0 md:border-r-2"
        initial={false}
        animate={
          wide
            ? { flexGrow: open ? 25 : 75, flexBasis: 0, flexShrink: 1 }
            : { flexGrow: 0, flexBasis: "auto", flexShrink: 0 }
        }
        transition={{ duration: 0.55, ease: EASE }}
      >
        <motion.p
          className="type-headline w-full max-w-none shrink-0 text-balance text-right text-black md:w-[75cqw]"
          initial={false}
          animate={{ opacity: wide && open ? 0 : 1 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {question}
        </motion.p>
      </motion.div>

      <motion.div
        className="relative flex min-h-[5.5625rem] min-w-0 items-center justify-end overflow-hidden bg-white px-[var(--page-px)] py-[var(--space-4)] md:min-h-0"
        initial={false}
        animate={
          wide
            ? { flexGrow: open ? 75 : 25, flexBasis: 0, flexShrink: 1 }
            : { flexGrow: 0, flexBasis: "auto", flexShrink: 0 }
        }
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
            animate={open || reduceMotion ? { x: 0, y: 0 } : wide ? { x: [21, -21, 21] } : { y: [10, -10, 10] }}
            transition={
              open || reduceMotion
                ? { duration: 0.25, ease: EASE }
                : { duration: 1.15, repeat: Infinity, ease: EASE }
            }
          >
            <HoverArrow />
          </motion.div>
        </motion.div>

        <motion.div
          className="faq-answer z-10 flex w-full items-center justify-end md:overflow-y-auto md:px-[var(--page-px)] md:py-[var(--space-4)]"
          aria-hidden={!open}
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            x: wide ? (open ? 0 : 40) : 0,
            y: wide ? 0 : open ? 0 : 12,
          }}
          transition={{
            duration: 0.4,
            delay: open ? 0.12 : 0,
            ease: EASE,
          }}
        >
          <p className="reading-measure type-body-lg w-full text-balance text-right text-white">
            {answer}
          </p>
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
