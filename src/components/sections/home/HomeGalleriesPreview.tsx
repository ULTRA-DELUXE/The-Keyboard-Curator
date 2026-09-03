import GalleryRow from "@/components/sections/gallery/GalleryRow";
import SectionHeader from "@/components/layout/SectionHeader";
import { galleryPreview } from "@/data/gallery";
import Link from "next/link";

export default function HomeGalleriesPreview() {
  return (
    <section aria-label="Galleries preview">
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-px)] pb-[var(--space-4)] pt-[var(--space-5)]">
        <Link href="/galleries" className="block">
          <SectionHeader title="Galleries." />
        </Link>
      </div>

      <Link href="/galleries" className="block border-t-2 border-black">
        <GalleryRow {...galleryPreview} />
      </Link>
    </section>
  );
}
