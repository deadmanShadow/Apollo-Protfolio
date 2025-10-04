import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutBlogsInputObjectSchema as UserCreateNestedOneWithoutBlogsInputObjectSchema } from './UserCreateNestedOneWithoutBlogsInput.schema'

const makeSchema = () => z.object({
  title: z.string(),
  content: z.string(),
  view: z.number().int().optional(),
  published: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutBlogsInputObjectSchema)
}).strict();
export const BlogCreateInputObjectSchema: z.ZodType<Prisma.BlogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogCreateInput>;
export const BlogCreateInputObjectZodSchema = makeSchema();
