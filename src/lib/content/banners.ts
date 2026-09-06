import { cache } from "react";
import { prisma } from "@/lib/prisma";
import { optimizeCloudinaryUrl } from "@/lib/cloudinary";
import type { Banner } from "@/types/content";

export const getBanners = cache(async (): Promise<Banner[]> => {
  const rows = await prisma.banner.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return rows.map((row) => ({
    title: row.title,
    content: row.content,
    imageUrl: optimizeCloudinaryUrl(row.imageUrl),
  }));
});
