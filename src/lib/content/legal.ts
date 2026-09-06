import { cache } from "react";
import { prisma } from "@/lib/prisma";
import type { LegalSlug } from "@/types/content";

export const LEGAL_SLUGS = [
  "copyright",
  "privacy",
  "terms",
] as const satisfies readonly LegalSlug[];

export function isLegalSlug(value: string): value is LegalSlug {
  return (LEGAL_SLUGS as readonly string[]).includes(value);
}

export const getLegal = cache(async (slug: LegalSlug) => {
  const document = await prisma.legalDocument.findUnique({
    where: { slug },
    include: {
      sections: { orderBy: { sortOrder: "asc" } },
    },
  });

  if (!document) return null;

  return {
    slug: document.slug,
    title: document.title,
    lastUpdated: document.lastUpdated,
    intro: document.intro,
    sections: document.sections.map((section) => ({
      heading: section.heading,
      paragraphs: section.paragraphs,
      bullets: section.bullets.length > 0 ? section.bullets : undefined,
    })),
  };
});
