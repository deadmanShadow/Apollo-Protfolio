import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const ProjectAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProjectAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectAvgAggregateInputType>;
export const ProjectAvgAggregateInputObjectZodSchema = makeSchema();
