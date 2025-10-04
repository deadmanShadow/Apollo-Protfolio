import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BlogWhereInputObjectSchema as BlogWhereInputObjectSchema } from './BlogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BlogWhereInputObjectSchema).optional(),
  some: z.lazy(() => BlogWhereInputObjectSchema).optional(),
  none: z.lazy(() => BlogWhereInputObjectSchema).optional()
}).strict();
export const BlogListRelationFilterObjectSchema: z.ZodType<Prisma.BlogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BlogListRelationFilter>;
export const BlogListRelationFilterObjectZodSchema = makeSchema();
