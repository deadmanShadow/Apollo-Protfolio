import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  startDate: SortOrderSchema.optional(),
  endDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WorkExperienceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkExperienceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceOrderByWithRelationInput>;
export const WorkExperienceOrderByWithRelationInputObjectZodSchema = makeSchema();
