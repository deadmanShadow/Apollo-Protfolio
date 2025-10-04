import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  company: z.string(),
  position: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional().nullable(),
  userId: z.number().int()
}).strict();
export const WorkExperienceCreateManyInputObjectSchema: z.ZodType<Prisma.WorkExperienceCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceCreateManyInput>;
export const WorkExperienceCreateManyInputObjectZodSchema = makeSchema();
