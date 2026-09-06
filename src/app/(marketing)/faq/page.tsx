import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FAQContent from "@/components/sections/faq/FAQContent";
import { getFaqs, getPage, pageMetadata } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("faq");
}

export default async function FaqPage() {
  const [page, faqs] = await Promise.all([getPage("faq"), getFaqs()]);
  if (!page) notFound();

  return (
    <main>
      <FAQContent heading={page.copy.heading} items={faqs} />
    </main>
  );
}
