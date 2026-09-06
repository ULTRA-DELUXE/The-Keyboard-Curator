import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AboutContent from "@/components/sections/about/AboutContent";
import { getAboutPage, pageMetadata } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("about");
}

export default async function AboutPage() {
  const { page } = await getAboutPage();
  if (!page) notFound();

  return (
    <main>
      <AboutContent copy={page.copy} />
    </main>
  );
}
