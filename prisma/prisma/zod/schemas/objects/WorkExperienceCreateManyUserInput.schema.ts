import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  company: z.string(),
  position: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional().nullable()
}).strict();
export const WorkExperienceCreateManyUserInputObjectSchema: z.ZodType<Prisma.WorkExperienceCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceCreateManyUserInput>;
export const WorkExperienceCreateManyUserInputObjectZodSchema = makeSchema();
