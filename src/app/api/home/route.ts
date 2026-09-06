import { getHomePage } from "@/lib/content";
import { apiError, apiSuccess } from "@/lib/api-response";

export async function GET() {
  try {
    const data = await getHomePage();
    if (!data.page) return apiError("Home page not found", 404);
    return apiSuccess(data);
  } catch {
    return apiError("Failed to fetch home", 500);
  }
}
