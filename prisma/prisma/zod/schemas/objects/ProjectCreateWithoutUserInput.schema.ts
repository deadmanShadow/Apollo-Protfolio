import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  title: z.string(),
  thumbnail: z.string().optional().nullable(),
  projectLink: z.string(),
  liveSite: z.string().optional().nullable(),
  description: z.string(),
  features: z.string()
}).strict();
export const ProjectCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateWithoutUserInput>;
export const ProjectCreateWithoutUserInputObjectZodSchema = makeSchema();
