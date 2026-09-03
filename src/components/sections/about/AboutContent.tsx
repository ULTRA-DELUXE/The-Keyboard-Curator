"use client";

import FourGridCard from "@/components/cards/FourGridCard";
import LargeCard from "@/components/cards/LargeCard";
import TwoGridCard from "@/components/cards/TwoGridCard";
import GridContainer from "@/components/containers/GridContainer";
import SideHeading from "@/components/layout/SideHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { aboutCasesImage, aboutMarqueeItems, aboutOath } from "@/data/about";
import { motion } from "framer-motion";
import LoopBanner from "@/components/sections/home/LoopBanner";

export default function AboutContent() {
  return (
    <>
      <GridContainer className="pb-0">
        <StaggerChildren className="contents">
          <StaggerItem className="contents">
            <FourGridCard
              title="About the Curator."
              subtitle="A workbench, not a factory."
            />
          </StaggerItem>
        </StaggerChildren>
      </GridContainer>

      <LoopBanner text={aboutMarqueeItems.join("  ·  ")} />

      <GridContainer className="pt-0">
        <StaggerChildren className="contents">
        <StaggerItem className="contents">
          <TwoGridCard
            size="headline"
            content="What we do here as a family of nerds."
            gradient="bg-gradient-to-l from-de-gold to-transparent"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <TwoGridCard
            size="body"
            content="In a cozy basement, three keyboard enthusiasts turned an obsession into a workbench. Energy drinks, spare stems, and a lot of thock later — The Keyboard Curator & Co. was a shop instead of a joke."
            gradient="bg-gradient-to-l from-de-gold to-transparent"
          />
        </StaggerItem>

        <StaggerItem className="contents">
          <LargeCard
            imageSrc="https://mechaland.id/cdn/shop/files/2066030799upload_1800x1350.jpg?v=1714569416"
            gradient="bg-gradient-to-l from-de-blue to-transparent"
            className="min-h-[var(--card-height-4col)]"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <LargeCard
            content="Family is the secret ingredient. Kids orbit the office, cats claim the desk mats, and snack breaks turn into switch debates. We design and build with that same care — a tight-knit bench where every clack is supposed to feel like it belongs to someone."
            gradient="bg-gradient-to-l from-de-red to-transparent"
            className="min-h-[var(--card-height-4col)]"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <LargeCard
            imageSrc={aboutCasesImage}
            imageAlt="Five anodized keyboard cases in silver, blue, purple, orange, and black"
            gradient="bg-gradient-to-l from-de-gold to-transparent"
            className="min-h-[var(--card-height-4col)]"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <LargeCard
            content={aboutOath}
            gradient="bg-gradient-to-r from-de-red via-de-gold to-de-blue"
            className="min-h-[var(--card-height-4col)]"
          />
        </StaggerItem>
      </StaggerChildren>

      <div className="span-full grid grid-cols-1 items-stretch gap-[var(--grid-gap)] pt-[var(--space-4)] lg:grid-cols-4 lg:items-center">
        <FadeIn
          className="flex items-center justify-end lg:col-span-2 lg:pr-[var(--space-4)]"
          direction="right"
        >
          <SideHeading text="By nerds, for nerds." />
        </FadeIn>

        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <TwoGridCard
            layout="block"
            size="body"
            content="We only curate what we would type on. If it is on this site, someone on this bench has lubed it, hated a stab on it, or shipped it across an ocean."
            gradient="bg-gradient-to-l from-de-gold to-transparent"
            className="min-h-[var(--panel-height)]"
          />
        </motion.div>
      </div>

      <StaggerChildren className="contents">
        <StaggerItem className="contents">
          <TwoGridCard
            size="headline"
            content="Competitive yet pocket-friendly."
            gradient="bg-gradient-to-l from-de-blue to-transparent"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <TwoGridCard
            size="body"
            content="Enthusiasts should not pay a museum tax. We price the work we actually do — lube, build, tune — not a lifestyle markup."
            gradient="bg-gradient-to-l from-de-blue to-transparent"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <TwoGridCard
            size="headline"
            content="We deliver to literally anywhere."
            gradient="bg-gradient-to-l from-de-red to-transparent"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <TwoGridCard
            size="body"
            content="Worldwide shipping is not a slogan. From this basement to your desk — bubble-wrapped, insured, and sound-tested."
            gradient="bg-gradient-to-l from-de-red to-transparent"
          />
        </StaggerItem>
      </StaggerChildren>
    </GridContainer>
    </>
  );
}
