import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  content: z.literal(true).optional(),
  view: z.literal(true).optional(),
  published: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const BlogMaxAggregateInputObjectSchema: z.ZodType<Prisma.BlogMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BlogMaxAggregateInputType>;
export const BlogMaxAggregateInputObjectZodSchema = makeSchema();
