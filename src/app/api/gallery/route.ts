import { getGalleryPage } from "@/lib/content";
import { apiError, apiSuccess } from "@/lib/api-response";

export async function GET() {
  try {
    const data = await getGalleryPage();
    if (!data.page) return apiError("Gallery page not found", 404);
    return apiSuccess(data);
  } catch {
    return apiError("Failed to fetch gallery", 500);
  }
}
