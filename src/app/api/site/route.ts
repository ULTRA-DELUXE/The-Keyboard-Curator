import { getSite } from "@/lib/content";
import { apiError, apiSuccess } from "@/lib/api-response";

export async function GET() {
  try {
    const site = await getSite();
    if (!site.settings) return apiError("Site settings not found", 404);
    return apiSuccess(site);
  } catch {
    return apiError("Failed to fetch site", 500);
  }
}
