import SplitGridCard from "@/components/cards/SplitGridCard";
import TwoGridCard from "@/components/cards/TwoGridCard";
import GridContainer from "@/components/containers/GridContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import SideHeading from "@/components/layout/SideHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import GalleryRow from "@/components/sections/gallery/GalleryRow";
import { highlightAt } from "@/data/highlights";
import type { GalleriesPageCopy, GalleryMarqueeRow } from "@/types/content";

export default function GalleryContent({
  copy,
  rows,
}: {
  copy: GalleriesPageCopy;
  rows: GalleryMarqueeRow[];
}) {
  return (
    <>
      <section className="page-section pb-[var(--space-4)]">
        <SectionHeader title={copy.heading} />
      </section>

      <section className="border-t-2 border-black" aria-label="Keyboard galleries">
        {rows.map((row) => (
          <GalleryRow key={row.id} {...row} />
        ))}
      </section>

      <GridContainer>
        <div className="span-full grid grid-cols-1 items-stretch gap-[var(--grid-gap)] lg:grid-cols-4 lg:items-center">
          <FadeIn
            className="flex items-center justify-end lg:col-span-2"
            direction="right"
          >
            <SideHeading text={copy.closerHeading} />
          </FadeIn>

          <FadeIn className="lg:col-span-2" direction="left">
            <TwoGridCard
              layout="block"
              size="body"
              content={copy.closerBody}
              className="md:min-h-[var(--panel-height)]"
            />
          </FadeIn>
        </div>

        <StaggerChildren className="contents">
          {copy.points.map((point, index) => (
            <StaggerItem key={point.title} className="contents">
              <SplitGridCard
                title={point.title}
                description={point.description}
                highlight={highlightAt(index)}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </GridContainer>
    </>
  );
}
