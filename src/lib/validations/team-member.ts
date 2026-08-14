import { z } from 'zod'

export const teamMemberSchema = z.object({
  name: z.string().min(2).max(100),
  role: z.string().min(2).max(100),
  photoUrl: z.string().url(),
  bio: z.string().optional(),
})

export type TeamMemberInput = z.infer<typeof teamMemberSchema>
