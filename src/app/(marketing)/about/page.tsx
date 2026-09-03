import type { Metadata } from "next";
import AboutContent from "@/components/sections/about/AboutContent";

export const metadata: Metadata = {
  title: "The Keyboard Curator | About",
  description:
    "Meet the keyboard enthusiasts behind The Keyboard Curator & Co.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}
