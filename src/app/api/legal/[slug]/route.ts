import { NextRequest } from "next/server";
import { getLegal, isLegalSlug } from "@/lib/content";
import { apiError, apiSuccess } from "@/lib/api-response";

type RouteParams = { params: Promise<{ slug: string }> };

export async function GET(_req: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = await params;
    if (!isLegalSlug(slug)) return apiError("Unknown document", 404);

    const document = await getLegal(slug);
    if (!document) return apiError("Document not found", 404);
    return apiSuccess(document);
  } catch {
    return apiError("Failed to fetch legal document", 500);
  }
}
