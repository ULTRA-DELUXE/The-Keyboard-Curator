import type { Metadata } from "next";
import FooterCard from "@/components/layout/FooterCard";
import AboutContent from "@/components/sections/about/AboutContent";

export const metadata: Metadata = {
  title: "The Keyboard Curator | About",
  description:
    "Meet the keyboard enthusiasts behind The Keyboard Curator & Co.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <AboutContent />
      </main>
      <FooterCard />
    </div>
  );
}
