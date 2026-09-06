import { cache } from "react";
import { prisma } from "@/lib/prisma";
import { optimizeCloudinaryUrl } from "@/lib/cloudinary";
import { getPage } from "@/lib/content/pages";
import type { GalleryMarqueeRow } from "@/types/content";

function mapRow(row: {
  id: string;
  direction: string;
  duration: number;
  items: {
    sortOrder: number;
    product: { id: string; title: string; imageUrl: string };
  }[];
}): GalleryMarqueeRow {
  return {
    id: row.id,
    direction: row.direction === "ltr" ? "ltr" : "rtl",
    duration: row.duration,
    items: row.items.map((item) => ({
      id: item.product.id,
      title: item.product.title,
      imageUrl: optimizeCloudinaryUrl(item.product.imageUrl),
    })),
  };
}

export const getGalleryRows = cache(async () => {
  const rows = await prisma.galleryRow.findMany({
    orderBy: { sortOrder: "asc" },
    include: {
      items: {
        orderBy: { sortOrder: "asc" },
        include: { product: true },
      },
    },
  });

  const previewRow = rows.find((row) => row.isPreview);
  const galleryOnly = rows.filter((row) => !row.isPreview);

  return {
    preview: previewRow ? mapRow(previewRow) : null,
    rows: galleryOnly.map(mapRow),
  };
});

export const getGalleryPage = cache(async () => {
  const [page, { rows }] = await Promise.all([
    getPage("galleries"),
    getGalleryRows(),
  ]);

  return { page, rows };
});
