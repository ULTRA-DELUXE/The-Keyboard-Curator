"use client";

import FourGridCard from "@/components/cards/FourGridCard";
import SplitGridCard from "@/components/cards/SplitGridCard";
import GridContainer from "@/components/containers/GridContainer";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { highlightAt } from "@/data/highlights";
import type { CloserItem, GalleryMarqueeRow, Testimonial } from "@/types/content";
import HomeGalleriesPreview from "./HomeGalleriesPreview";
import TestimonySection from "./TestimonySection";

export default function HomeCardLayout({
  welcomeTitle,
  welcomeSubtitle,
  closers,
  galleryHeading,
  galleryPreview,
  testimonyHeading,
  testimonials,
}: {
  welcomeTitle: string;
  welcomeSubtitle: string;
  closers: CloserItem[];
  galleryHeading: string;
  galleryPreview: GalleryMarqueeRow | null;
  testimonyHeading: string;
  testimonials: Testimonial[];
}) {
  return (
    <>
      <GridContainer>
        <StaggerChildren className="contents">
          <StaggerItem className="contents">
            <FourGridCard title={welcomeTitle} subtitle={welcomeSubtitle} />
          </StaggerItem>

          {closers.map((item, index) => (
            <StaggerItem key={item.title} className="contents">
              <SplitGridCard
                title={item.title}
                description={item.description}
                highlight={highlightAt(index)}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </GridContainer>

      {galleryPreview ? (
        <HomeGalleriesPreview heading={galleryHeading} row={galleryPreview} />
      ) : null}

      <GridContainer>
        <TestimonySection
          leftText={testimonyHeading}
          rightCardContents={testimonials}
        />
      </GridContainer>
    </>
  );
}
