import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const ProjectSumAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSumAggregateInputType>;
export const ProjectSumAggregateInputObjectZodSchema = makeSchema();
