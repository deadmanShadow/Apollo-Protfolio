import * as z from 'zod';
export const ProjectFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  thumbnail: z.string().optional(),
  projectLink: z.string(),
  liveSite: z.string().optional(),
  description: z.string(),
  features: z.string(),
  userId: z.number().int(),
  user: z.unknown()
}));