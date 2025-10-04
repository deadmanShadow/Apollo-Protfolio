import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  thumbnail: SortOrderSchema.optional(),
  projectLink: SortOrderSchema.optional(),
  liveSite: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  features: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const ProjectCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCountOrderByAggregateInput>;
export const ProjectCountOrderByAggregateInputObjectZodSchema = makeSchema();
