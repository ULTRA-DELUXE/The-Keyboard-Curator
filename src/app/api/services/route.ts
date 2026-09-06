import { getServicesPage } from "@/lib/content";
import { apiError, apiSuccess } from "@/lib/api-response";

export async function GET() {
  try {
    const data = await getServicesPage();
    if (!data.page) return apiError("Services page not found", 404);
    return apiSuccess(data);
  } catch {
    return apiError("Failed to fetch services", 500);
  }
}
