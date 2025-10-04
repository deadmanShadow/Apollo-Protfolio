import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  view: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const BlogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BlogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogOrderByWithRelationInput>;
export const BlogOrderByWithRelationInputObjectZodSchema = makeSchema();
