"use client";

import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import MondrianStrip from "@/components/layout/MondrianStrip";

const LOAD_DURATION_S = 5;
const CONTENT_FADE_S = 0.45;
const CURTAIN_DELAY_S = 0.5;
const CURTAIN_SLIDE_S = 0.85;
const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function LoadingSplash() {
  const [loading, setLoading] = useState(true);
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const scaleX = useTransform(progress, [0, 100], [0, 1]);
  const percentLabel = useTransform(progress, (value) => `${Math.round(value)}%`);

  useEffect(() => {
    if (reduceMotion) {
      progress.set(100);
      const timer = window.setTimeout(() => setLoading(false), 400);
      return () => window.clearTimeout(timer);
    }

    const controls = animate(progress, 100, {
      duration: LOAD_DURATION_S,
      ease: "linear",
    });

    controls.then(() => setLoading(false));

    return () => controls.stop();
  }, [progress, reduceMotion]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loading-splash"
          className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-white"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={
            reduceMotion
              ? { opacity: 0, transition: { duration: 0.35, ease: "easeOut" } }
              : {
                  y: "-100%",
                  transition: {
                    duration: CURTAIN_SLIDE_S,
                    ease: EASE,
                    delay: CURTAIN_DELAY_S,
                  },
                }
          }
          style={{ pointerEvents: "none" }}
        >
          <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-[var(--page-px)] pt-[max(var(--space-4),env(safe-area-inset-top,0px))]">
            <motion.div
              className="flex w-full max-w-[min(38.2rem,100%)] flex-col items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                transition: {
                  duration: reduceMotion ? 0.2 : CONTENT_FADE_S,
                  ease: EASE,
                },
              }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <Image
                src="/images/thekb.gif"
                alt="Loading"
                width={200}
                height={200}
                priority
                className="h-auto w-[clamp(5.5625rem,42vw,12.5rem)] max-h-[28svh] object-contain"
              />

              <div
                className="relative mt-[var(--space-3)] h-[var(--space-2)] w-full border-2 border-black bg-white sm:mt-[var(--space-4)] sm:h-[var(--space-3)]"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Loading"
              >
                <motion.div
                  className="absolute inset-0 origin-left bg-black"
                  style={{ scaleX }}
                />
              </div>

              <div className="mt-[var(--space-2)] flex w-full justify-end">
                <motion.p
                  className="leading-none tracking-[0.04em] text-black text-[clamp(1.625rem,7vw,3.4375rem)]"
                  aria-live="polite"
                >
                  {percentLabel}
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="shrink-0 border-y-2 border-black" aria-hidden>
            <MondrianStrip rule="black" />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
