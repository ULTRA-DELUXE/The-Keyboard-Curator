import { cache } from "react";
import { optimizeCloudinaryUrl } from "@/lib/cloudinary";
import { getPage } from "@/lib/content/pages";

export const getAboutPage = cache(async () => {
  const page = await getPage("about");
  if (!page) return { page };

  return {
    page: {
      ...page,
      copy: {
        ...page.copy,
        familyImage: optimizeCloudinaryUrl(page.copy.familyImage ?? ""),
        casesImage: optimizeCloudinaryUrl(page.copy.casesImage ?? ""),
      },
    },
  };
});
