"use client";

import type { GalleryRowData } from "@/data/gallery";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function GalleryRow({
  items,
  direction,
  duration,
}: GalleryRowData) {
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
            className="relative h-full w-[calc(100vw/3)] shrink-0 border-r-2 border-black"
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
