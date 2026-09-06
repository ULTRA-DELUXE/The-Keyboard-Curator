"use client";

import HeroBannerCard from "@/components/cards/HeroBannerCard";
import type { Banner } from "@/types/content";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroBanner({ banners }: { banners: Banner[] }) {
  if (banners.length === 0) {
    return (
      <section className="relative min-h-0 w-full flex-1 overflow-hidden bg-black" />
    );
  }

  return (
    <section className="relative min-h-0 w-full flex-1 overflow-hidden bg-black">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={banners.length > 1}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        observer
        observeParents
        watchOverflow
        className="hero-swiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner.imageUrl} className="h-full">
            <HeroBannerCard
              title={banner.title}
              content={banner.content}
              imageUrl={banner.imageUrl}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
