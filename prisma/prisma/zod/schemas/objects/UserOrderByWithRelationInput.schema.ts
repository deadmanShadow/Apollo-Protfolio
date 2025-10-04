import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BlogOrderByRelationAggregateInputObjectSchema as BlogOrderByRelationAggregateInputObjectSchema } from './BlogOrderByRelationAggregateInput.schema';
import { ProjectOrderByRelationAggregateInputObjectSchema as ProjectOrderByRelationAggregateInputObjectSchema } from './ProjectOrderByRelationAggregateInput.schema';
import { WorkExperienceOrderByRelationAggregateInputObjectSchema as WorkExperienceOrderByRelationAggregateInputObjectSchema } from './WorkExperienceOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  picture: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  password: SortOrderSchema.optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bio: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  skills: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  blogs: z.lazy(() => BlogOrderByRelationAggregateInputObjectSchema).optional(),
  projects: z.lazy(() => ProjectOrderByRelationAggregateInputObjectSchema).optional(),
  workExperiences: z.lazy(() => WorkExperienceOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
