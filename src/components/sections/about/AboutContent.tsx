"use client";

import LargeCard from "@/components/cards/LargeCard";
import TwoGridCard from "@/components/cards/TwoGridCard";
import AboutGridContainer from "@/components/containers/AboutGridContainer";
import SideHeading from "@/components/layout/SideHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";

export default function AboutContent() {
  return (
    <AboutGridContainer>
      <StaggerChildren className="contents">
        <StaggerItem className="contents">
          <TwoGridCard
            size="headline"
            content="What we do here as a family of nerds."
            gradient="bg-gradient-to-r from-transparent to-de-blue"
          />
        </StaggerItem>

        <StaggerItem className="contents">
          <LargeCard
            content={`In a cozy basement, three keyboard enthusiasts known as the "Keybored Bros" decided to turn their obsession into a side hustle. Fueled by energy drinks, they curated the raddest collection of keyboards, spreading joy one keystroke at a time! Each design was infused with magic and meme culture, earning their creations the titles "lit" and "extra." Before long, their quirky passion project exploded, transforming them from basement-dwelling nerds into keyboard moguls, proving that sometimes all it takes to start a revolution is a love for clacky sounds and a dream!`}
            gradient="bg-gradient-to-r from-green-500 to-yellow-500"
            className="min-h-[var(--card-height-4col)]"
          />
        </StaggerItem>

        <StaggerItem className="contents">
          <LargeCard
            imageSrc="https://mechaland.id/cdn/shop/files/2066030799upload_1800x1350.jpg?v=1714569416"
            className="min-h-[var(--card-height-4col)]"
          />
        </StaggerItem>

        <StaggerItem className="contents">
          <LargeCard
            content={`At Keyboard Curator & Co., family is the secret ingredient to their success! Founded by a quirky clan of keyboard enthusiasts, they believe in mixing love with every keystroke. Picture kids running around the office, pet cats lounging on desks, and everyone sharing snack breaks while chatting about their favorite switches. Their motto? "Work hard, play harder!" Infusing that family vibe into their keyboards, they design each one with care and a sprinkle of fun, creating a tight-knit community where every clack feels like a warm hug!`}
            gradient="bg-gradient-to-r from-teal-500 to-cyan-500"
            className="min-h-[var(--card-height-4col)]"
          />
        </StaggerItem>
      </StaggerChildren>

      <FadeIn className="span-full flex items-center justify-end lg:pr-[var(--space-4)]">
        <SideHeading text="By nerds, for nerds." />
      </FadeIn>
    </AboutGridContainer>
  );
}
