import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const WorkExperienceAvgAggregateInputObjectSchema: z.ZodType<Prisma.WorkExperienceAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceAvgAggregateInputType>;
export const WorkExperienceAvgAggregateInputObjectZodSchema = makeSchema();
