import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const blogscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BlogScalarWhereInputObjectSchema), z.lazy(() => BlogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BlogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BlogScalarWhereInputObjectSchema), z.lazy(() => BlogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  view: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const BlogScalarWhereInputObjectSchema: z.ZodType<Prisma.BlogScalarWhereInput> = blogscalarwhereinputSchema as unknown as z.ZodType<Prisma.BlogScalarWhereInput>;
export const BlogScalarWhereInputObjectZodSchema = blogscalarwhereinputSchema;
