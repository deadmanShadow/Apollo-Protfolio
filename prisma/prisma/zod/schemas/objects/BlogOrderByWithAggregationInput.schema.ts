import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BlogCountOrderByAggregateInputObjectSchema as BlogCountOrderByAggregateInputObjectSchema } from './BlogCountOrderByAggregateInput.schema';
import { BlogAvgOrderByAggregateInputObjectSchema as BlogAvgOrderByAggregateInputObjectSchema } from './BlogAvgOrderByAggregateInput.schema';
import { BlogMaxOrderByAggregateInputObjectSchema as BlogMaxOrderByAggregateInputObjectSchema } from './BlogMaxOrderByAggregateInput.schema';
import { BlogMinOrderByAggregateInputObjectSchema as BlogMinOrderByAggregateInputObjectSchema } from './BlogMinOrderByAggregateInput.schema';
import { BlogSumOrderByAggregateInputObjectSchema as BlogSumOrderByAggregateInputObjectSchema } from './BlogSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  view: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => BlogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BlogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BlogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BlogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BlogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BlogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BlogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogOrderByWithAggregationInput>;
export const BlogOrderByWithAggregationInputObjectZodSchema = makeSchema();
