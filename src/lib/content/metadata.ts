import type { Metadata } from "next";
import { getLegal } from "@/lib/content/legal";
import { getPage } from "@/lib/content/pages";
import type { LegalSlug, PageSlug } from "@/types/content";

export async function pageMetadata(slug: PageSlug): Promise<Metadata> {
  const page = await getPage(slug);
  if (!page) {
    return { title: "The Keyboard Curator" };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export async function legalMetadata(slug: LegalSlug): Promise<Metadata> {
  const document = await getLegal(slug);
  if (!document) {
    return { title: "The Keyboard Curator" };
  }

  return {
    title: `The Keyboard Curator | ${document.title}`,
    description: document.intro,
  };
}
