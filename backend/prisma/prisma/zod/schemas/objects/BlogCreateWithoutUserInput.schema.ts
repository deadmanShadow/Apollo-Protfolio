import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  title: z.string(),
  content: z.string(),
  view: z.number().int().optional(),
  published: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date()
}).strict();
export const BlogCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.BlogCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogCreateWithoutUserInput>;
export const BlogCreateWithoutUserInputObjectZodSchema = makeSchema();
