import { NextRequest } from 'next/server'
import { Prisma } from '@/generated/prisma/client'
import { prisma } from '@/lib/prisma'
import { projectSchema } from '@/lib/validations/project'
import { apiError, apiSuccess } from '@/lib/api-response'

type RouteParams = { params: Promise<{ id: string }> }

function isNotFoundError(error: unknown): boolean {
  return (
    error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025'
  )
}

export async function GET(_req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params
    const project = await prisma.project.findUnique({ where: { id } })
    if (!project) return apiError('Project not found', 404)
    return apiSuccess(project)
  } catch {
    return apiError('Failed to fetch project', 500)
  }
}

export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params
    const body = await req.json()
    const parsed = projectSchema.partial().safeParse(body)

    if (!parsed.success) {
      return apiError(JSON.stringify(parsed.error.flatten()), 400)
    }

    const project = await prisma.project.update({
      where: { id },
      data: parsed.data,
    })
    return apiSuccess(project)
  } catch (error) {
    if (isNotFoundError(error)) return apiError('Project not found', 404)
    return apiError('Failed to update project', 500)
  }
}

export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params
    await prisma.project.delete({ where: { id } })
    return apiSuccess({ message: 'Deleted' })
  } catch (error) {
    if (isNotFoundError(error)) return apiError('Project not found', 404)
    return apiError('Failed to delete project', 500)
  }
}
