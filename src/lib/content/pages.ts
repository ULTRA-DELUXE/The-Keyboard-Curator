import { cache } from "react";
import { prisma } from "@/lib/prisma";
import type {
  AboutPageCopy,
  FaqPageCopy,
  GalleriesPageCopy,
  HomePageCopy,
  PageSlug,
  ServicesPageCopy,
  SitePageData,
} from "@/types/content";

export const PAGE_SLUGS = [
  "home",
  "about",
  "services",
  "galleries",
  "faq",
] as const satisfies readonly PageSlug[];

export function isPageSlug(value: string): value is PageSlug {
  return (PAGE_SLUGS as readonly string[]).includes(value);
}

type CopyBySlug = {
  home: HomePageCopy;
  about: AboutPageCopy;
  services: ServicesPageCopy;
  galleries: GalleriesPageCopy;
  faq: FaqPageCopy;
};

const loadPage = cache(async (slug: PageSlug) => {
  const page = await prisma.sitePage.findUnique({ where: { slug } });
  if (!page) return null;

  return {
    slug: page.slug as PageSlug,
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    copy: page.copy,
  };
});

export async function getPage<S extends PageSlug>(
  slug: S,
): Promise<SitePageData<CopyBySlug[S]> | null> {
  const page = await loadPage(slug);
  if (!page) return null;

  return {
    slug: page.slug as S,
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    copy: page.copy as unknown as CopyBySlug[S],
  };
}
