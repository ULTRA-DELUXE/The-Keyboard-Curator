import { cache } from "react";
import { prisma } from "@/lib/prisma";
import type { FaqItem, FaqPlane } from "@/types/content";

const FAQ_PLANES: FaqPlane[] = ["bg-de-red", "bg-de-gold", "bg-de-blue"];

export const getFaqs = cache(async (): Promise<FaqItem[]> => {
  const rows = await prisma.faq.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return rows.map((row, index) => ({
    id: row.id,
    question: row.question,
    answer: row.answer,
    plane: FAQ_PLANES[index % 3],
  }));
});
