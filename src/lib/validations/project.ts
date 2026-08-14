import { z } from 'zod'

export const projectSchema = z.object({
  title: z.string().min(2).max(100),
  slug: z.string().min(2).regex(/^[a-z0-9-]+$/),
  description: z.string().min(10),
  imageUrl: z.string().url(),
  imagePublicId: z.string().optional(),
})

export type ProjectInput = z.infer<typeof projectSchema>
