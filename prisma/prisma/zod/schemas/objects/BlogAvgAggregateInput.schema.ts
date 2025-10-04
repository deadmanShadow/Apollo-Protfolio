import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  view: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const BlogAvgAggregateInputObjectSchema: z.ZodType<Prisma.BlogAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BlogAvgAggregateInputType>;
export const BlogAvgAggregateInputObjectZodSchema = makeSchema();
