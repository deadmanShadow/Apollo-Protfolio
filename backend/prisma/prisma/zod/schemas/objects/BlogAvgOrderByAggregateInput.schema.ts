import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  view: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const BlogAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BlogAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogAvgOrderByAggregateInput>;
export const BlogAvgOrderByAggregateInputObjectZodSchema = makeSchema();
