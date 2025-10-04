import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  view: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const BlogSumAggregateInputObjectSchema: z.ZodType<Prisma.BlogSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BlogSumAggregateInputType>;
export const BlogSumAggregateInputObjectZodSchema = makeSchema();
