import { NextRequest } from "next/server";
import { getPage, isPageSlug } from "@/lib/content";
import { apiError, apiSuccess } from "@/lib/api-response";

type RouteParams = { params: Promise<{ slug: string }> };

export async function GET(_req: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = await params;
    if (!isPageSlug(slug)) return apiError("Unknown page", 404);

    const page = await getPage(slug);
    if (!page) return apiError("Page not found", 404);
    return apiSuccess(page);
  } catch {
    return apiError("Failed to fetch page", 500);
  }
}
