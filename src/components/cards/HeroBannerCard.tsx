"use client";

import { motion } from "framer-motion";

interface HeroBannerCardProps {
  title: string;
  content: string;
  imageUrl: string;
}

export default function HeroBannerCard({
  title,
  content,
  imageUrl,
}: HeroBannerCardProps) {
  return (
    <motion.div
      className="flex h-[80vh] w-full items-center justify-center bg-gray-400 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
      initial={{ scale: 1.05, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      aria-label={`${title}: ${content}`}
      role="img"
    />
  );
}
