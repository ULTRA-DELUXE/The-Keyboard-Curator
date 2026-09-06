import { getBanners } from "@/lib/content";
import { apiError, apiSuccess } from "@/lib/api-response";

export async function GET() {
  try {
    const banners = await getBanners();
    return apiSuccess(banners);
  } catch {
    return apiError("Failed to fetch banners", 500);
  }
}
