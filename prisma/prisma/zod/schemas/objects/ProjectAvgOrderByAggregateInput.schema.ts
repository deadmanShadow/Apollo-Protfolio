import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const ProjectAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectAvgOrderByAggregateInput>;
export const ProjectAvgOrderByAggregateInputObjectZodSchema = makeSchema();
