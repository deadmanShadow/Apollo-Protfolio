import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const projectscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  thumbnail: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  projectLink: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  liveSite: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  features: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ProjectScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput> = projectscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput>;
export const ProjectScalarWhereWithAggregatesInputObjectZodSchema = projectscalarwherewithaggregatesinputSchema;
