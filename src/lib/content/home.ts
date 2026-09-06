import { cache } from "react";
import { prisma } from "@/lib/prisma";
import { getBanners } from "@/lib/content/banners";
import { getGalleryRows } from "@/lib/content/gallery";
import { getPage } from "@/lib/content/pages";

export const getHomePage = cache(async () => {
  const [page, testimonials, settings, banners, gallery] = await Promise.all([
    getPage("home"),
    prisma.testimonial.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.siteSettings.findUnique({ where: { id: "site" } }),
    getBanners(),
    getGalleryRows(),
  ]);

  return {
    page,
    testimonials: testimonials.map((item) => ({
      quote: item.quote,
      name: item.name,
    })),
    homeMarquee: settings?.homeMarquee ?? null,
    banners,
    galleryPreview: gallery.preview,
  };
});
