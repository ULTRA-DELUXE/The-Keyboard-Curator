import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicesContent from "@/components/sections/services/ServicesContent";
import { getServicesPage, pageMetadata } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("services");
}

export default async function ServicesPage() {
  const { page, services, processSteps } = await getServicesPage();
  if (!page) notFound();

  return (
    <main>
      <ServicesContent
        copy={page.copy}
        services={services}
        processSteps={processSteps}
      />
    </main>
  );
}
