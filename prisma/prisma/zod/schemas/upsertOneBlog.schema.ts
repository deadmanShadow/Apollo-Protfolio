import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogSelectObjectSchema as BlogSelectObjectSchema } from './objects/BlogSelect.schema';
import { BlogIncludeObjectSchema as BlogIncludeObjectSchema } from './objects/BlogInclude.schema';
import { BlogWhereUniqueInputObjectSchema as BlogWhereUniqueInputObjectSchema } from './objects/BlogWhereUniqueInput.schema';
import { BlogCreateInputObjectSchema as BlogCreateInputObjectSchema } from './objects/BlogCreateInput.schema';
import { BlogUncheckedCreateInputObjectSchema as BlogUncheckedCreateInputObjectSchema } from './objects/BlogUncheckedCreateInput.schema';
import { BlogUpdateInputObjectSchema as BlogUpdateInputObjectSchema } from './objects/BlogUpdateInput.schema';
import { BlogUncheckedUpdateInputObjectSchema as BlogUncheckedUpdateInputObjectSchema } from './objects/BlogUncheckedUpdateInput.schema';

export const BlogUpsertOneSchema: z.ZodType<Prisma.BlogUpsertArgs> = z.object({ select: BlogSelectObjectSchema.optional(), include: BlogIncludeObjectSchema.optional(), where: BlogWhereUniqueInputObjectSchema, create: z.union([ BlogCreateInputObjectSchema, BlogUncheckedCreateInputObjectSchema ]), update: z.union([ BlogUpdateInputObjectSchema, BlogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BlogUpsertArgs>;

export const BlogUpsertOneZodSchema = z.object({ select: BlogSelectObjectSchema.optional(), include: BlogIncludeObjectSchema.optional(), where: BlogWhereUniqueInputObjectSchema, create: z.union([ BlogCreateInputObjectSchema, BlogUncheckedCreateInputObjectSchema ]), update: z.union([ BlogUpdateInputObjectSchema, BlogUncheckedUpdateInputObjectSchema ]) }).strict();