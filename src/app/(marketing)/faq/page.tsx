import type { Metadata } from "next";
import FAQContent from "@/components/sections/faq/FAQContent";

export const metadata: Metadata = {
  title: "The Keyboard Curator | FAQ",
  description:
    "Answers about custom builds, switch lubing, worldwide shipping, group buys, and the workbench oath.",
};

export default function FaqPage() {
  return (
    <main>
      <FAQContent />
    </main>
  );
}
