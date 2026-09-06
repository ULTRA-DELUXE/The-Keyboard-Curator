"use client";

import FourGridCard from "@/components/cards/FourGridCard";
import LargeCard from "@/components/cards/LargeCard";
import ServiceCard from "@/components/cards/ServiceCard";
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
import type {
  ProcessStep,
  Service,
  ServicesPageCopy,
} from "@/types/content";
import { motion } from "framer-motion";
import LoopBanner from "@/components/sections/home/LoopBanner";
import ServicesProcess from "./ServicesProcess";

export default function ServicesContent({
  copy,
  services,
  processSteps,
}: {
  copy: ServicesPageCopy;
  services: Service[];
  processSteps: ProcessStep[];
}) {
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
        {services.map((service, index) => (
          <StaggerItem key={service.id} className="contents">
            <ServiceCard
              title={service.title}
              tagline={service.tagline}
              description={service.description}
              price={service.price}
              highlight={highlightAt(index)}
            />
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeIn className="span-full">
        <LargeCard
          content={copy.oath}
          className="min-h-[var(--card-height-4col)] w-full"
        />
      </FadeIn>

      <ServicesProcess heading={copy.processHeading} steps={processSteps} />

      <div className="span-full grid grid-cols-1 items-stretch gap-[var(--grid-gap)] pt-[var(--space-4)] lg:grid-cols-4 lg:items-center">
        <FadeIn
          className="flex items-center justify-end lg:col-span-2"
          direction="right"
        >
          <SideHeading text={copy.ctaHeading} />
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
            content={copy.ctaBody}
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
