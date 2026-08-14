import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { teamMemberSchema } from '@/lib/validations/team-member'
import { apiError, apiSuccess } from '@/lib/api-response'

export async function GET() {
  try {
    const team = await prisma.teamMember.findMany({ orderBy: { name: 'asc' } })
    return apiSuccess(team)
  } catch {
    return apiError('Failed to fetch team members', 500)
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = teamMemberSchema.safeParse(body)

    if (!parsed.success) {
      return apiError(JSON.stringify(parsed.error.flatten()), 400)
    }

    const member = await prisma.teamMember.create({ data: parsed.data })
    return apiSuccess(member, 201)
  } catch {
    return apiError('Failed to create team member', 500)
  }
}
