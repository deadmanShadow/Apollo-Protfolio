import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  view: z.boolean().optional(),
  published: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const BlogSelectObjectSchema: z.ZodType<Prisma.BlogSelect> = makeSchema() as unknown as z.ZodType<Prisma.BlogSelect>;
export const BlogSelectObjectZodSchema = makeSchema();
