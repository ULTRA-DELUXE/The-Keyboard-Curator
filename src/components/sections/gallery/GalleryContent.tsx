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
import { galleryCloser, galleryRows } from "@/data/gallery";

export default function GalleryContent() {
  return (
    <>
      <section className="page-section pb-[var(--space-4)]">
        <SectionHeader title="Galleries." />
      </section>

      <section className="border-t-2 border-black" aria-label="Keyboard galleries">
        {galleryRows.map((row) => (
          <GalleryRow key={row.id} {...row} />
        ))}
      </section>

      <GridContainer>
        <div className="span-full grid grid-cols-1 items-stretch gap-[var(--grid-gap)] lg:grid-cols-4 lg:items-center">
          <FadeIn
            className="flex items-center justify-end lg:col-span-2 lg:pr-[var(--space-4)]"
            direction="right"
          >
            <SideHeading text={galleryCloser.heading} />
          </FadeIn>

          <FadeIn className="lg:col-span-2" direction="left">
            <TwoGridCard
              layout="block"
              size="body"
              content={galleryCloser.body}
              gradient="bg-gradient-to-l from-de-gold to-transparent"
              className="min-h-[var(--panel-height)]"
            />
          </FadeIn>
        </div>

        <StaggerChildren className="contents">
          {galleryCloser.points.flatMap((point) => [
            <StaggerItem key={`${point.title}-headline`} className="contents">
              <TwoGridCard
                size="headline"
                content={point.title}
                gradient={point.gradient}
              />
            </StaggerItem>,
            <StaggerItem key={`${point.title}-body`} className="contents">
              <TwoGridCard
                size="body"
                content={point.description}
                gradient={point.gradient}
              />
            </StaggerItem>,
          ])}
        </StaggerChildren>
      </GridContainer>
    </>
  );
}
