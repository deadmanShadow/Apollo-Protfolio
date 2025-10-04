import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogSelectObjectSchema as BlogSelectObjectSchema } from './objects/BlogSelect.schema';
import { BlogIncludeObjectSchema as BlogIncludeObjectSchema } from './objects/BlogInclude.schema';
import { BlogWhereUniqueInputObjectSchema as BlogWhereUniqueInputObjectSchema } from './objects/BlogWhereUniqueInput.schema';

export const BlogFindUniqueSchema: z.ZodType<Prisma.BlogFindUniqueArgs> = z.object({ select: BlogSelectObjectSchema.optional(), include: BlogIncludeObjectSchema.optional(), where: BlogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BlogFindUniqueArgs>;

export const BlogFindUniqueZodSchema = z.object({ select: BlogSelectObjectSchema.optional(), include: BlogIncludeObjectSchema.optional(), where: BlogWhereUniqueInputObjectSchema }).strict();