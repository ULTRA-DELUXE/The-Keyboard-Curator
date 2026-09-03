import HeroBanner from "@/components/sections/home/HeroBanner";
import HomeCardLayout from "@/components/sections/home/HomeCardLayout";
import LoopBanner from "@/components/sections/home/LoopBanner";

export default function HomePage() {
  return (
    <main>
      <section className="flex h-[calc(100svh-var(--nav-height))] flex-col">
        <HeroBanner />
        <LoopBanner />
      </section>
      <HomeCardLayout />
    </main>
  );
}
