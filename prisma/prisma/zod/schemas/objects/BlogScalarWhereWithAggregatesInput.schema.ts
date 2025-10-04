import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const blogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BlogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BlogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BlogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BlogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BlogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  view: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  published: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const BlogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BlogScalarWhereWithAggregatesInput> = blogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BlogScalarWhereWithAggregatesInput>;
export const BlogScalarWhereWithAggregatesInputObjectZodSchema = blogscalarwherewithaggregatesinputSchema;
