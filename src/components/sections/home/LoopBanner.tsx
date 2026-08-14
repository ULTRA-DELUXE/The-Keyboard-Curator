"use client";

import { FadeIn } from "@/components/motion/FadeIn";

export default function LoopBanner() {
  const sentence =
    "One Keyboard to rule them all and in darkness bind them. You decide.";

  return (
    <FadeIn>
      <div className="font-bebas flex min-h-[calc(var(--space-6)*0.85)] w-full items-center overflow-hidden border-y-2 border-black bg-black py-[var(--space-3)]">
        <div className="animate-scroll flex whitespace-nowrap">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className="type-headline mx-[var(--space-3)] text-white sm:mx-[var(--space-5)]"
            >
              {sentence}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
