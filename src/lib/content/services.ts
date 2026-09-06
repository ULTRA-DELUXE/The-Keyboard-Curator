import { cache } from "react";
import { prisma } from "@/lib/prisma";
import { getPage } from "@/lib/content/pages";

export const getServicesPage = cache(async () => {
  const [page, services, processSteps] = await Promise.all([
    getPage("services"),
    prisma.service.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.processStep.findMany({ orderBy: { step: "asc" } }),
  ]);

  return {
    page,
    services: services.map((service) => ({
      id: service.id,
      title: service.title,
      tagline: service.tagline,
      description: service.description,
      price: service.price,
    })),
    processSteps: processSteps.map((step) => ({
      step: step.step,
      title: step.title,
      description: step.description,
    })),
  };
});
