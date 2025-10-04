import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  view: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const BlogMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BlogMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogMaxOrderByAggregateInput>;
export const BlogMaxOrderByAggregateInputObjectZodSchema = makeSchema();
