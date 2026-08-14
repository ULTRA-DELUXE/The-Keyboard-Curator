import FooterCard from "@/components/layout/FooterCard";
import HeroBanner from "@/components/sections/home/HeroBanner";
import HomeCardLayout from "@/components/sections/home/HomeCardLayout";
import LoopBanner from "@/components/sections/home/LoopBanner";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <HeroBanner />
        <LoopBanner />
        <HomeCardLayout />
      </main>
      <FooterCard />
    </div>
  );
}
