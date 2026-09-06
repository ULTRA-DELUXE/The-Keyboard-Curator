"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useLayoutEffect, useRef, useState, type Ref } from "react";

const DEFAULT_TEXT =
  "One Keyboard to rule them all and in darkness bind them. You decide.";

const SPEED_PX_PER_SEC = 80;

function wrapNeg(value: number, width: number) {
  if (width <= 0) return 0;
  const wrapped = ((value % width) + width) % width;
  return wrapped === 0 ? 0 : wrapped - width;
}

export default function LoopBanner({
  text = DEFAULT_TEXT,
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLSpanElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(2);
  const [setWidth, setSetWidth] = useState(0);
  const x = useMotionValue(0);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const item = itemRef.current;
    if (!container || !item) return;

    const updateCopies = () => {
      const itemRect = item.getBoundingClientRect();
      const styles = window.getComputedStyle(item);
      const itemWidth =
        itemRect.width +
        Number.parseFloat(styles.marginLeft) +
        Number.parseFloat(styles.marginRight);
      const containerWidth = container.getBoundingClientRect().width;
      if (itemWidth <= 0) return;
      setRepeatCount(Math.max(2, Math.ceil(containerWidth / itemWidth) + 1));
    };

    updateCopies();
    const observer = new ResizeObserver(updateCopies);
    observer.observe(container);
    observer.observe(item);
    return () => observer.disconnect();
  }, [text]);

  useLayoutEffect(() => {
    const setEl = setRef.current;
    if (!setEl) return;

    const updateWidth = () => {
      setSetWidth(setEl.getBoundingClientRect().width);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(setEl);
    return () => observer.disconnect();
  }, [repeatCount, text]);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || setWidth <= 0) return;
    x.set(wrapNeg(x.get() - (SPEED_PX_PER_SEC * delta) / 1000, setWidth));
  });

  const renderSet = (
    prefix: string,
    ref?: Ref<HTMLDivElement>,
  ) => (
    <div
      ref={ref}
      className="flex shrink-0 whitespace-nowrap"
      aria-hidden={prefix !== "a"}
    >
      {Array.from({ length: repeatCount }, (_, index) => (
        <span
          key={`${prefix}-${index}`}
          ref={prefix === "a" && index === 0 ? itemRef : undefined}
          className="type-headline mx-[var(--space-3)] text-de-gold sm:mx-[var(--space-5)]"
        >
          {text}
        </span>
      ))}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`font-bebas flex min-h-[calc(var(--space-6)*0.85)] w-full shrink-0 items-center overflow-hidden border-y-2 border-black bg-black py-[var(--space-3)] ${className}`}
    >
      <motion.div className="flex w-max" style={{ x }}>
        {renderSet("a", setRef)}
        {reduceMotion ? null : renderSet("b")}
      </motion.div>
    </div>
  );
}
