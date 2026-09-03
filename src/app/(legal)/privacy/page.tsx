import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: "The Keyboard Curator | Privacy Policy",
  description:
    "How The Keyboard Curator & Co. handles information when you use this website.",
};

export default function PrivacyPage() {
  return (
    <main>
      <LegalDocument {...privacyPolicy} />
    </main>
  );
}
