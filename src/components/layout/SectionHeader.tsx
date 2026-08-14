"use client";

import { FadeIn } from "@/components/motion/FadeIn";

export default function SectionHeader({
  title,
  align = "end",
}: {
  title: string;
  align?: "start" | "end";
}) {
  return (
    <FadeIn className="mb-[var(--space-4)]">
      <div
        className={`flex ${align === "end" ? "justify-end" : "justify-start"}`}
      >
        <h2 className="type-headline text-balance text-right">{title}</h2>
      </div>
      <div className="section-divider mt-[var(--space-3)]" />
    </FadeIn>
  );
}
