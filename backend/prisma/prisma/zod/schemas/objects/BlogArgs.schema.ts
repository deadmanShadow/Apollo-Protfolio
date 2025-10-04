import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BlogSelectObjectSchema as BlogSelectObjectSchema } from './BlogSelect.schema';
import { BlogIncludeObjectSchema as BlogIncludeObjectSchema } from './BlogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BlogSelectObjectSchema).optional(),
  include: z.lazy(() => BlogIncludeObjectSchema).optional()
}).strict();
export const BlogArgsObjectSchema = makeSchema();
export const BlogArgsObjectZodSchema = makeSchema();
