"use client";

import FourGridCard from "@/components/cards/FourGridCard";
import TwoGridCard from "@/components/cards/TwoGridCard";
import GridContainer from "@/components/containers/GridContainer";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { testimonials } from "@/data/testimonials";
import HomeGalleriesPreview from "./HomeGalleriesPreview";
import TestimonySection from "./TestimonySection";

export default function HomeCardLayout() {
  return (
    <>
      <GridContainer>
        <StaggerChildren className="contents">
          <StaggerItem className="contents">
            <FourGridCard
              title="Welcome to our curation!"
              subtitle="We only curate the best of keyboards."
            />
          </StaggerItem>

          <StaggerItem className="contents">
            <TwoGridCard
              size="headline"
              content="Curated by enthusiasts for enthusiasts."
              gradient="bg-gradient-to-l from-de-gold to-transparent"
            />
          </StaggerItem>

          <StaggerItem className="contents">
            <TwoGridCard
              size="body"
              gradient="bg-gradient-to-l from-de-gold to-transparent"
              content="We are not ashamed to admit that our team consists of purely nerds. This means that you don't have to worry because we know what we're doing."
            />
          </StaggerItem>

          <StaggerItem className="contents">
            <TwoGridCard
              size="headline"
              content="Competitive yet pocket-friendly pricings."
              gradient="bg-gradient-to-l from-de-red to-transparent"
            />
          </StaggerItem>

          <StaggerItem className="contents">
            <TwoGridCard
              size="body"
              content="We don't want customers to pay more than they have to. If we claim that our products are curated by fellow enthusiasts, then it's only fair."
              gradient="bg-gradient-to-l from-de-red to-transparent"
            />
          </StaggerItem>

          <StaggerItem className="contents">
            <TwoGridCard
              size="headline"
              content="We deliver to literally anywhere."
              gradient="bg-gradient-to-l from-de-blue to-transparent"
            />
          </StaggerItem>

          <StaggerItem className="contents">
            <TwoGridCard
              size="body"
              content="We offer worldwide shipping so that people from every corner of the earth can enjoy their desired keyboards. Everyone deserves a nice, high-quality keyboard."
              gradient="bg-gradient-to-l from-de-blue to-transparent"
            />
          </StaggerItem>
        </StaggerChildren>
      </GridContainer>

      <HomeGalleriesPreview />

      <GridContainer>
        <TestimonySection
          leftText="Testimonies of the Wicked."
          rightCardContents={testimonials}
          rightCardGradient="bg-gradient-to-l from-de-blue to-transparent"
        />
      </GridContainer>
    </>
  );
}
