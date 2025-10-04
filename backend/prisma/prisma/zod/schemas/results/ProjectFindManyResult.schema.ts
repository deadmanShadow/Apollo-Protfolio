import * as z from 'zod';
export const ProjectFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  title: z.string(),
  thumbnail: z.string().optional(),
  projectLink: z.string(),
  liveSite: z.string().optional(),
  description: z.string(),
  features: z.string(),
  userId: z.number().int(),
  user: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});