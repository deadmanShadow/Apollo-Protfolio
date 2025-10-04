import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogSelectObjectSchema as BlogSelectObjectSchema } from './objects/BlogSelect.schema';
import { BlogIncludeObjectSchema as BlogIncludeObjectSchema } from './objects/BlogInclude.schema';
import { BlogCreateInputObjectSchema as BlogCreateInputObjectSchema } from './objects/BlogCreateInput.schema';
import { BlogUncheckedCreateInputObjectSchema as BlogUncheckedCreateInputObjectSchema } from './objects/BlogUncheckedCreateInput.schema';

export const BlogCreateOneSchema: z.ZodType<Prisma.BlogCreateArgs> = z.object({ select: BlogSelectObjectSchema.optional(), include: BlogIncludeObjectSchema.optional(), data: z.union([BlogCreateInputObjectSchema, BlogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BlogCreateArgs>;

export const BlogCreateOneZodSchema = z.object({ select: BlogSelectObjectSchema.optional(), include: BlogIncludeObjectSchema.optional(), data: z.union([BlogCreateInputObjectSchema, BlogUncheckedCreateInputObjectSchema]) }).strict();