import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const WorkExperienceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.WorkExperienceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceOrderByRelationAggregateInput>;
export const WorkExperienceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
