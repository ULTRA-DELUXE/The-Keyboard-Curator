import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { projectSchema } from '@/lib/validations/project'
import { apiError, apiSuccess } from '@/lib/api-response'

export async function GET() {
  try {
    const projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } })
    return apiSuccess(projects)
  } catch {
    return apiError('Failed to fetch projects', 500)
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = projectSchema.safeParse(body)

    if (!parsed.success) {
      return apiError(JSON.stringify(parsed.error.flatten()), 400)
    }

    const project = await prisma.project.create({ data: parsed.data })
    return apiSuccess(project, 201)
  } catch {
    return apiError('Failed to create project', 500)
  }
}
