"use client";

import FourGridCard from "@/components/cards/FourGridCard";
import LargeCard from "@/components/cards/LargeCard";
import SplitGridCard from "@/components/cards/SplitGridCard";
import TwoGridCard from "@/components/cards/TwoGridCard";
import GridContainer from "@/components/containers/GridContainer";
import SideHeading from "@/components/layout/SideHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { highlightAt } from "@/data/highlights";
import type { AboutPageCopy } from "@/types/content";
import { motion } from "framer-motion";
import LoopBanner from "@/components/sections/home/LoopBanner";

export default function AboutContent({ copy }: { copy: AboutPageCopy }) {
  return (
    <>
      <GridContainer className="pb-0">
        <StaggerChildren className="contents">
          <StaggerItem className="contents">
            <FourGridCard title={copy.heroTitle} subtitle={copy.heroSubtitle} />
          </StaggerItem>
        </StaggerChildren>
      </GridContainer>

      <LoopBanner text={copy.marquee.join("  ·  ")} />

      <GridContainer className="pt-0">
        <StaggerChildren className="contents">
        <StaggerItem className="contents">
          <TwoGridCard
            size="headline"
            content={copy.familyTitle}
            highlight={highlightAt(0)}
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <TwoGridCard
            size="body"
            content={copy.familyBody}
            highlight={highlightAt(1)}
          />
        </StaggerItem>

        <StaggerItem className="contents">
          <LargeCard
            imageSrc={copy.familyImage}
            imageAlt="Keyboard workbench"
            highlight={highlightAt(2)}
            className="min-h-[var(--card-height-4col)]"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <LargeCard
            content={copy.familyCard}
            highlight={highlightAt(3)}
            className="min-h-[var(--card-height-4col)]"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <LargeCard
            imageSrc={copy.casesImage}
            imageAlt="Five anodized keyboard cases in silver, blue, purple, orange, and black"
            highlight={highlightAt(4)}
            className="min-h-[var(--card-height-4col)]"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <LargeCard
            content={copy.oath}
            highlight={highlightAt(5)}
            className="min-h-[var(--card-height-4col)]"
          />
        </StaggerItem>
      </StaggerChildren>

      <div className="span-full grid grid-cols-1 items-stretch gap-[var(--grid-gap)] pt-[var(--space-4)] lg:grid-cols-4 lg:items-center">
        <FadeIn
          className="flex items-center justify-end lg:col-span-2"
          direction="right"
        >
          <SideHeading text={copy.pledgeHeading} />
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
            content={copy.pledgeBody}
            className="md:min-h-[var(--panel-height)]"
          />
        </motion.div>
      </div>

      <StaggerChildren className="contents">
        {copy.closers.map((item, index) => (
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
    </>
  );
}
