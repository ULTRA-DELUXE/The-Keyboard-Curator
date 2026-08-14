"use client";

import HeroBannerCard from "@/components/cards/HeroBannerCard";
import { banners } from "@/data/banners";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroBanner() {
  return (
    <div className="w-full bg-gray-200">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        className="hero-swiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <HeroBannerCard
              title={banner.title}
              content={banner.content}
              imageUrl={banner.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
