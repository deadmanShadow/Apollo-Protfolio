import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkExperienceCountOrderByAggregateInputObjectSchema as WorkExperienceCountOrderByAggregateInputObjectSchema } from './WorkExperienceCountOrderByAggregateInput.schema';
import { WorkExperienceAvgOrderByAggregateInputObjectSchema as WorkExperienceAvgOrderByAggregateInputObjectSchema } from './WorkExperienceAvgOrderByAggregateInput.schema';
import { WorkExperienceMaxOrderByAggregateInputObjectSchema as WorkExperienceMaxOrderByAggregateInputObjectSchema } from './WorkExperienceMaxOrderByAggregateInput.schema';
import { WorkExperienceMinOrderByAggregateInputObjectSchema as WorkExperienceMinOrderByAggregateInputObjectSchema } from './WorkExperienceMinOrderByAggregateInput.schema';
import { WorkExperienceSumOrderByAggregateInputObjectSchema as WorkExperienceSumOrderByAggregateInputObjectSchema } from './WorkExperienceSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  startDate: SortOrderSchema.optional(),
  endDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => WorkExperienceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WorkExperienceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WorkExperienceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WorkExperienceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WorkExperienceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WorkExperienceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WorkExperienceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceOrderByWithAggregationInput>;
export const WorkExperienceOrderByWithAggregationInputObjectZodSchema = makeSchema();
