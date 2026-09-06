import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GalleryContent from "@/components/sections/gallery/GalleryContent";
import { getGalleryPage, pageMetadata } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("galleries");
}

export default async function GalleriesPage() {
  const { page, rows } = await getGalleryPage();
  if (!page) notFound();

  return (
    <main>
      <GalleryContent copy={page.copy} rows={rows} />
    </main>
  );
}
