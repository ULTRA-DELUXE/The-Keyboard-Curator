import GalleryRow from "@/components/sections/gallery/GalleryRow";
import SectionHeader from "@/components/layout/SectionHeader";
import type { GalleryMarqueeRow } from "@/types/content";
import Link from "next/link";

export default function HomeGalleriesPreview({
  heading,
  row,
}: {
  heading: string;
  row: GalleryMarqueeRow;
}) {
  return (
    <section aria-label="Galleries preview">
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-px)] pb-[var(--space-4)] pt-[var(--space-5)]">
        <Link href="/galleries" className="block">
          <SectionHeader title={heading} />
        </Link>
      </div>

      <Link href="/galleries" className="block border-t-2 border-black">
        <GalleryRow {...row} />
      </Link>
    </section>
  );
}
