import * as z from 'zod';
export const UserUpsertResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string(),
  picture: z.string().optional(),
  password: z.string(),
  phone: z.string().optional(),
  bio: z.string().optional(),
  skills: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  blogs: z.array(z.unknown()),
  projects: z.array(z.unknown()),
  workExperiences: z.array(z.unknown())
});