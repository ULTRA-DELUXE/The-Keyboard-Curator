import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeroBanner from "@/components/sections/home/HeroBanner";
import HomeCardLayout from "@/components/sections/home/HomeCardLayout";
import LoopBanner from "@/components/sections/home/LoopBanner";
import { getHomePage, pageMetadata } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("home");
}

export default async function HomePage() {
  const { page, testimonials, homeMarquee, banners, galleryPreview } =
    await getHomePage();
  if (!page) notFound();

  return (
    <main>
      <section className="hero-screen">
        <HeroBanner banners={banners} />
        <LoopBanner text={homeMarquee ?? undefined} />
      </section>
      <HomeCardLayout
        welcomeTitle={page.copy.welcomeTitle}
        welcomeSubtitle={page.copy.welcomeSubtitle}
        closers={page.copy.closers}
        galleryHeading={page.copy.galleryHeading}
        galleryPreview={galleryPreview}
        testimonyHeading={page.copy.testimonyHeading}
        testimonials={testimonials}
      />
    </main>
  );
}
