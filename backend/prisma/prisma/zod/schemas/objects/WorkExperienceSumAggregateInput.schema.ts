import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const WorkExperienceSumAggregateInputObjectSchema: z.ZodType<Prisma.WorkExperienceSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceSumAggregateInputType>;
export const WorkExperienceSumAggregateInputObjectZodSchema = makeSchema();
