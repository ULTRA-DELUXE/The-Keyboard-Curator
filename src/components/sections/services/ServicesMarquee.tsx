"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { serviceMarqueeItems } from "@/data/services";

export default function ServicesMarquee() {
  const phrase = serviceMarqueeItems.join("  ·  ");

  return (
    <FadeIn className="span-full">
      <div className="font-bebas flex min-h-[calc(var(--space-6)*0.75)] w-full items-center overflow-hidden border-y-2 border-black bg-black py-[var(--space-2)]">
        <div className="animate-scroll flex whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={index}
              className="type-subhead mx-[var(--space-3)] text-de-gold sm:mx-[var(--space-5)]"
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
