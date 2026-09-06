import { getAboutPage } from "@/lib/content";
import { apiError, apiSuccess } from "@/lib/api-response";

export async function GET() {
  try {
    const data = await getAboutPage();
    if (!data.page) return apiError("About page not found", 404);
    return apiSuccess(data);
  } catch {
    return apiError("Failed to fetch about", 500);
  }
}
