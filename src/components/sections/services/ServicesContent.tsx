"use client";

import FourGridCard from "@/components/cards/FourGridCard";
import LargeCard from "@/components/cards/LargeCard";
import ServiceCard from "@/components/cards/ServiceCard";
import TwoGridCard from "@/components/cards/TwoGridCard";
import GridContainer from "@/components/containers/GridContainer";
import SideHeading from "@/components/layout/SideHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { services, workbenchOath } from "@/data/services";
import { motion } from "framer-motion";
import ServicesMarquee from "./ServicesMarquee";
import ServicesProcess from "./ServicesProcess";

export default function ServicesContent() {
  return (
    <GridContainer>
      <StaggerChildren className="contents">
        <StaggerItem className="contents">
          <FourGridCard
            title="Services for the Clacky."
            subtitle="We speak thock fluently."
          />
        </StaggerItem>
      </StaggerChildren>

      <ServicesMarquee />

      <StaggerChildren className="contents">
        {services.map((service) => (
          <StaggerItem key={service.id} className="contents">
            <ServiceCard
              title={service.title}
              tagline={service.tagline}
              description={service.description}
              price={service.price}
              gradient={service.gradient}
            />
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeIn className="span-full">
        <LargeCard
          content={workbenchOath}
          gradient="bg-gradient-to-r from-de-red via-de-gold to-de-blue"
          className="min-h-[var(--card-height-4col)] w-full"
        />
      </FadeIn>

      <ServicesProcess />

      <div className="span-full grid grid-cols-1 items-stretch gap-[var(--grid-gap)] pt-[var(--space-4)] lg:grid-cols-4 lg:items-center">
        <FadeIn
          className="flex items-center justify-end lg:col-span-2 lg:pr-[var(--space-4)]"
          direction="right"
        >
          <SideHeading text="Ready to send your kit?" />
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
            content="Drop us a line with your board model, switch count, and mod wishlist. We reply within 24 hours — faster during GB season, because we know the anxiety."
            gradient="bg-gradient-to-l from-de-gold to-transparent"
            className="min-h-[var(--panel-height)]"
          />
        </motion.div>
      </div>

      <StaggerChildren className="contents">
        <StaggerItem className="contents">
          <TwoGridCard
            size="headline"
            content="KBDfans kits welcome."
            gradient="bg-gradient-to-l from-de-blue to-transparent"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <TwoGridCard
            size="body"
            content="In-stock boards, GB arrivals, and salvage jobs — if it has MX-style switches and a USB port, we have probably touched something like it before."
            gradient="bg-gradient-to-l from-de-blue to-transparent"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <TwoGridCard
            size="headline"
            content="Insured worldwide return shipping."
            gradient="bg-gradient-to-l from-de-red to-transparent"
          />
        </StaggerItem>
        <StaggerItem className="contents">
          <TwoGridCard
            size="body"
            content="Your board ships back bubble-wrapped, foam-packed, and sound-tested. From Jakarta to Oslo — we have sent thock across oceans."
            gradient="bg-gradient-to-l from-de-red to-transparent"
          />
        </StaggerItem>
      </StaggerChildren>
    </GridContainer>
  );
}
