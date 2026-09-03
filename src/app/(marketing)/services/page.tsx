import type { Metadata } from "next";
import ServicesContent from "@/components/sections/services/ServicesContent";

export const metadata: Metadata = {
  title: "The Keyboard Curator | Services",
  description:
    "Professional keyboard assembly, switch lubing, stabilizer tuning, tape mods, QMK flashing, and group buy concierge for enthusiasts.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesContent />
    </main>
  );
}
