"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, type HTMLAttributes, type RefObject } from "react";

const INK = "#2b2621";
const PAPER = "#ede6d6";
const MUTED_INK = "rgba(43, 38, 33, 0.7)";
const MUTED_PAPER = "rgba(237, 230, 214, 0.9)";
const BLUE = "#1f5c73";

export function useScrollWash(): {
  ref: RefObject<HTMLDivElement | null>;
  amount: MotionValue<number>;
  hoverBind: Pick<HTMLAttributes<HTMLElement>, "onMouseEnter" | "onMouseLeave">;
} {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const hovered = useMotionValue(0);
  const scrollEnabled = useMotionValue(0);
  const reducedFlag = useMotionValue(0);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const sync = () => scrollEnabled.set(mobile.matches ? 1 : 0);
    sync();
    mobile.addEventListener("change", sync);
    return () => mobile.removeEventListener("change", sync);
  }, [scrollEnabled]);

  useEffect(() => {
    reducedFlag.set(reduceMotion ? 1 : 0);
  }, [reduceMotion, reducedFlag]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.58", "center center", "end 0.42", "end 0.08"],
  });

  const rawWash = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0.38, 1, 0.38, 0],
  );

  const steppedWash = useTransform(scrollYProgress, (progress) =>
    progress > 0.14 && progress < 0.86 ? 1 : 0,
  );

  const smoothWash = useSpring(rawWash, {
    stiffness: 210,
    damping: 28,
    restDelta: 0.001,
  });

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const speed = useTransform(velocity, (value) =>
    Math.min(Math.abs(value) / 1400, 1),
  );

  const liveScrollWash = useTransform(
    [smoothWash, rawWash, speed],
    ([smooth, raw, haste]) => {
      const mix = 0.7 * (haste as number);
      return (smooth as number) * (1 - mix) + (raw as number) * mix;
    },
  ) as MotionValue<number>;

  const desktopWash = useSpring(hovered, {
    stiffness: 340,
    damping: 34,
    restDelta: 0.001,
  });

  const amount = useTransform(
    [liveScrollWash, steppedWash, desktopWash, scrollEnabled, reducedFlag],
    ([live, stepped, desk, mobile, reduced]) => {
      const value =
        (mobile as number) > 0.5
          ? (reduced as number) > 0.5
            ? (stepped as number)
            : (live as number)
          : (desk as number);
      return Math.max(0, Math.min(1, value));
    },
  ) as MotionValue<number>;

  const hoverBind: Pick<
    HTMLAttributes<HTMLElement>,
    "onMouseEnter" | "onMouseLeave"
  > = {
    onMouseEnter: () => hovered.set(1),
    onMouseLeave: () => hovered.set(0),
  };

  return { ref, amount, hoverBind };
}

export function WashFill({
  amount,
  className,
  maxOpacity = 1,
}: {
  amount: MotionValue<number>;
  className: string;
  maxOpacity?: number;
}) {
  const opacity = useTransform(amount, [0, 1], [0, maxOpacity]);

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 z-[1] ${className}`}
      style={{ opacity }}
    />
  );
}

export function WashCopy({
  amount,
  className,
  children,
  muted = false,
  from = INK,
  to = PAPER,
}: {
  amount: MotionValue<number>;
  className?: string;
  children: React.ReactNode;
  muted?: boolean;
  from?: string;
  to?: string;
}) {
  const color = useTransform(
    amount,
    [0, 1],
    muted ? [MUTED_INK, MUTED_PAPER] : [from, to],
  );

  return (
    <motion.p className={className} style={{ color }}>
      {children}
    </motion.p>
  );
}

export { BLUE, INK, PAPER };

export function useWashColor(
  amount: MotionValue<number>,
  from = INK,
  to = PAPER,
) {
  return useTransform(amount, [0, 1], [from, to]);
}
