import type { Metadata } from "next";
import GalleryContent from "@/components/sections/gallery/GalleryContent";

export const metadata: Metadata = {
  title: "The Keyboard Curator | Galleries",
  description:
    "A gallery of mechanical keyboards we curate, assemble, and ship — the same boards from our daily selections.",
};

export default function GalleriesPage() {
  return (
    <main>
      <GalleryContent />
    </main>
  );
}
