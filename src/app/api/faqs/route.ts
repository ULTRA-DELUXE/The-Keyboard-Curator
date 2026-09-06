import { getFaqs } from "@/lib/content";
import { apiError, apiSuccess } from "@/lib/api-response";

export async function GET() {
  try {
    const faqs = await getFaqs();
    return apiSuccess(faqs);
  } catch {
    return apiError("Failed to fetch FAQs", 500);
  }
}
