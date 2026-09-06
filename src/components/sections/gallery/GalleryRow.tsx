"use client";

import type { GalleryMarqueeRow } from "@/types/content";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function GalleryRow({
  items,
  direction,
  duration,
}: GalleryMarqueeRow) {
  const reduceMotion = useReducedMotion();
  const loopItems = [...items, ...items];
  const movesLeft = direction === "rtl";

  return (
    <div className="h-[14rem] overflow-hidden border-b-2 border-black bg-white sm:h-[var(--card-height-2col)]">
      <motion.div
        className="flex h-full w-max"
        initial={false}
        animate={
          reduceMotion
            ? { x: "0%" }
            : { x: movesLeft ? ["0%", "-50%"] : ["-50%", "0%"] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration, repeat: Infinity, ease: "linear" }
        }
      >
        {loopItems.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="relative h-full w-[80vw] shrink-0 border-r-2 border-black sm:w-[50vw] lg:w-[calc(100vw/3)]"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 80vw"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
