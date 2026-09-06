import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { getLegal, legalMetadata } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return legalMetadata("copyright");
}

export default async function CopyrightPage() {
  const document = await getLegal("copyright");
  if (!document) notFound();

  return (
    <main>
      <LegalDocument
        title={document.title}
        lastUpdated={document.lastUpdated}
        intro={document.intro}
        sections={document.sections}
      />
    </main>
  );
}
