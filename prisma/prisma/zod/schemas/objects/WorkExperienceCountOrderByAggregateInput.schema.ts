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
export const WorkExperienceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkExperienceCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceCountOrderByAggregateInput>;
export const WorkExperienceCountOrderByAggregateInputObjectZodSchema = makeSchema();
