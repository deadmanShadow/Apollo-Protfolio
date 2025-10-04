import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogSelectObjectSchema as BlogSelectObjectSchema } from './objects/BlogSelect.schema';
import { BlogIncludeObjectSchema as BlogIncludeObjectSchema } from './objects/BlogInclude.schema';
import { BlogWhereUniqueInputObjectSchema as BlogWhereUniqueInputObjectSchema } from './objects/BlogWhereUniqueInput.schema';

export const BlogDeleteOneSchema: z.ZodType<Prisma.BlogDeleteArgs> = z.object({ select: BlogSelectObjectSchema.optional(), include: BlogIncludeObjectSchema.optional(), where: BlogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BlogDeleteArgs>;

export const BlogDeleteOneZodSchema = z.object({ select: BlogSelectObjectSchema.optional(), include: BlogIncludeObjectSchema.optional(), where: BlogWhereUniqueInputObjectSchema }).strict();