import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  startDate: SortOrderSchema.optional(),
  endDate: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const WorkExperienceMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkExperienceMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceMaxOrderByAggregateInput>;
export const WorkExperienceMaxOrderByAggregateInputObjectZodSchema = makeSchema();
