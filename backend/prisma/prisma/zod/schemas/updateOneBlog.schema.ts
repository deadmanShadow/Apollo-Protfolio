import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogSelectObjectSchema as BlogSelectObjectSchema } from './objects/BlogSelect.schema';
import { BlogIncludeObjectSchema as BlogIncludeObjectSchema } from './objects/BlogInclude.schema';
import { BlogUpdateInputObjectSchema as BlogUpdateInputObjectSchema } from './objects/BlogUpdateInput.schema';
import { BlogUncheckedUpdateInputObjectSchema as BlogUncheckedUpdateInputObjectSchema } from './objects/BlogUncheckedUpdateInput.schema';
import { BlogWhereUniqueInputObjectSchema as BlogWhereUniqueInputObjectSchema } from './objects/BlogWhereUniqueInput.schema';

export const BlogUpdateOneSchema: z.ZodType<Prisma.BlogUpdateArgs> = z.object({ select: BlogSelectObjectSchema.optional(), include: BlogIncludeObjectSchema.optional(), data: z.union([BlogUpdateInputObjectSchema, BlogUncheckedUpdateInputObjectSchema]), where: BlogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BlogUpdateArgs>;

export const BlogUpdateOneZodSchema = z.object({ select: BlogSelectObjectSchema.optional(), include: BlogIncludeObjectSchema.optional(), data: z.union([BlogUpdateInputObjectSchema, BlogUncheckedUpdateInputObjectSchema]), where: BlogWhereUniqueInputObjectSchema }).strict();