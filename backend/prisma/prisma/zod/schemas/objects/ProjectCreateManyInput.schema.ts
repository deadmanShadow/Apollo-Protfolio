import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  thumbnail: z.string().optional().nullable(),
  projectLink: z.string(),
  liveSite: z.string().optional().nullable(),
  description: z.string(),
  features: z.string(),
  userId: z.number().int()
}).strict();
export const ProjectCreateManyInputObjectSchema: z.ZodType<Prisma.ProjectCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateManyInput>;
export const ProjectCreateManyInputObjectZodSchema = makeSchema();
