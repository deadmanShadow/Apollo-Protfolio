import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogSelectObjectSchema as BlogSelectObjectSchema } from './objects/BlogSelect.schema';
import { BlogCreateManyInputObjectSchema as BlogCreateManyInputObjectSchema } from './objects/BlogCreateManyInput.schema';

export const BlogCreateManyAndReturnSchema: z.ZodType<Prisma.BlogCreateManyAndReturnArgs> = z.object({ select: BlogSelectObjectSchema.optional(), data: z.union([ BlogCreateManyInputObjectSchema, z.array(BlogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BlogCreateManyAndReturnArgs>;

export const BlogCreateManyAndReturnZodSchema = z.object({ select: BlogSelectObjectSchema.optional(), data: z.union([ BlogCreateManyInputObjectSchema, z.array(BlogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();