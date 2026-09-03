import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { termsAndConditions } from "@/data/legal";

export const metadata: Metadata = {
  title: "The Keyboard Curator | Terms and Conditions",
  description:
    "Terms and conditions for using The Keyboard Curator & Co. website.",
};

export default function TermsPage() {
  return (
    <main>
      <LegalDocument {...termsAndConditions} />
    </main>
  );
}
