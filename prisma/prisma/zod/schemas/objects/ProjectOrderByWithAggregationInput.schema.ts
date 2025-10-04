import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjectCountOrderByAggregateInputObjectSchema as ProjectCountOrderByAggregateInputObjectSchema } from './ProjectCountOrderByAggregateInput.schema';
import { ProjectAvgOrderByAggregateInputObjectSchema as ProjectAvgOrderByAggregateInputObjectSchema } from './ProjectAvgOrderByAggregateInput.schema';
import { ProjectMaxOrderByAggregateInputObjectSchema as ProjectMaxOrderByAggregateInputObjectSchema } from './ProjectMaxOrderByAggregateInput.schema';
import { ProjectMinOrderByAggregateInputObjectSchema as ProjectMinOrderByAggregateInputObjectSchema } from './ProjectMinOrderByAggregateInput.schema';
import { ProjectSumOrderByAggregateInputObjectSchema as ProjectSumOrderByAggregateInputObjectSchema } from './ProjectSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  thumbnail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  projectLink: SortOrderSchema.optional(),
  liveSite: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: SortOrderSchema.optional(),
  features: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => ProjectCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProjectAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProjectMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProjectMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProjectSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProjectOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectOrderByWithAggregationInput>;
export const ProjectOrderByWithAggregationInputObjectZodSchema = makeSchema();
