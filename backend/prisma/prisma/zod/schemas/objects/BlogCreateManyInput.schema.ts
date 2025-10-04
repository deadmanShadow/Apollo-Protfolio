import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  view: z.number().int().optional(),
  published: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  userId: z.number().int()
}).strict();
export const BlogCreateManyInputObjectSchema: z.ZodType<Prisma.BlogCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogCreateManyInput>;
export const BlogCreateManyInputObjectZodSchema = makeSchema();
