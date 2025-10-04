import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  view: z.number().int().optional(),
  published: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date()
}).strict();
export const BlogCreateManyUserInputObjectSchema: z.ZodType<Prisma.BlogCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogCreateManyUserInput>;
export const BlogCreateManyUserInputObjectZodSchema = makeSchema();
