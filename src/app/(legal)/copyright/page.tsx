import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { copyrightNotice } from "@/data/legal";

export const metadata: Metadata = {
  title: "The Keyboard Curator | Copyright Notice",
  description:
    "Copyright notice for The Keyboard Curator & Co. website, text, and original design.",
};

export default function CopyrightPage() {
  return (
    <main>
      <LegalDocument {...copyrightNotice} />
    </main>
  );
}
