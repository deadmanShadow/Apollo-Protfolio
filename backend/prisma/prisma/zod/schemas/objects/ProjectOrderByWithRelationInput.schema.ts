import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  thumbnail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  projectLink: SortOrderSchema.optional(),
  liveSite: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: SortOrderSchema.optional(),
  features: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ProjectOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectOrderByWithRelationInput>;
export const ProjectOrderByWithRelationInputObjectZodSchema = makeSchema();
