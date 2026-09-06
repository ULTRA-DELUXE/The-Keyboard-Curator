import { cache } from "react";
import { prisma } from "@/lib/prisma";
import type { ChromeLink } from "@/types/content";

function toChromeLink(link: { href: string; label: string }): ChromeLink {
  return { href: link.href, label: link.label };
}

export const getSite = cache(async () => {
  const [settings, navLinks] = await Promise.all([
    prisma.siteSettings.findUnique({ where: { id: "site" } }),
    prisma.navLink.findMany({
      orderBy: [{ group: "asc" }, { sortOrder: "asc" }],
    }),
  ]);

  const siteLinks = navLinks
    .filter((link) => link.group === "site")
    .map(toChromeLink);
  const legalLinks = navLinks
    .filter((link) => link.group === "legal")
    .map(toChromeLink);
  const navbarLinks = siteLinks.filter((link) => link.href !== "/");

  return { settings, navLinks, siteLinks, legalLinks, navbarLinks };
});
