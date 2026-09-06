"use client";

import TwoGridCard from "@/components/cards/TwoGridCard";
import SideHeading from "@/components/layout/SideHeading";
import { highlightAt } from "@/data/highlights";
import type { Testimonial } from "@/types/content";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface TestimonySectionProps {
  leftText: string;
  rightCardContents: Testimonial[];
}

export default function TestimonySection({
  leftText,
  rightCardContents,
}: TestimonySectionProps) {
  return (
    <div className="span-full grid grid-cols-1 items-stretch gap-[var(--grid-gap)] pt-[var(--space-4)] lg:grid-cols-4 lg:items-center">
      <div className="flex items-center justify-end lg:col-span-2">
        <SideHeading text={leftText} />
      </div>

      <div className="min-h-0 lg:col-span-2 lg:min-h-[var(--panel-height)]">
        <Swiper
          modules={[Autoplay, EffectCreative]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          slidesPerView={1}
          loop
          className="h-full min-h-0 lg:min-h-[var(--panel-height)]"
        >
          {rightCardContents.map((content, index) => (
            <SwiperSlide
              key={index}
              className="!h-auto min-h-0 lg:min-h-[var(--panel-height)]"
            >
              <TwoGridCard
                layout="block"
                content={{ quote: content.quote, name: content.name }}
                highlight={highlightAt(index)}
                className="md:min-h-[var(--panel-height)]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
