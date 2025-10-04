import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogCreateManyInputObjectSchema as BlogCreateManyInputObjectSchema } from './objects/BlogCreateManyInput.schema';

export const BlogCreateManySchema: z.ZodType<Prisma.BlogCreateManyArgs> = z.object({ data: z.union([ BlogCreateManyInputObjectSchema, z.array(BlogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BlogCreateManyArgs>;

export const BlogCreateManyZodSchema = z.object({ data: z.union([ BlogCreateManyInputObjectSchema, z.array(BlogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();