"use client";

import SingleGridCard from "@/components/cards/SingleGridCard";
import SectionHeader from "@/components/layout/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { featuredProducts } from "@/data/product";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeProductSwiper() {
  return (
    <FadeIn className="span-full mb-[var(--space-5)] w-full min-w-0">
      <SectionHeader title="Daily Selections" />

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={13}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        className="custom-swiper w-full"
        breakpoints={{
          480: {
            slidesPerView: 1.15,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 21,
          },
        }}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex justify-center px-1">
              <SingleGridCard
                title={product.title}
                productType={product.productType}
                price={product.price}
                image={product.image}
                className="h-[var(--card-height-product-h)] w-full max-w-[var(--card-width-product)]"
                gradient="bg-gradient-to-r from-transparent to-de-blue"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </FadeIn>
  );
}
