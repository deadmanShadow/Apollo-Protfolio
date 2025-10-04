import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogSelectObjectSchema as BlogSelectObjectSchema } from './objects/BlogSelect.schema';
import { BlogUpdateManyMutationInputObjectSchema as BlogUpdateManyMutationInputObjectSchema } from './objects/BlogUpdateManyMutationInput.schema';
import { BlogWhereInputObjectSchema as BlogWhereInputObjectSchema } from './objects/BlogWhereInput.schema';

export const BlogUpdateManyAndReturnSchema: z.ZodType<Prisma.BlogUpdateManyAndReturnArgs> = z.object({ select: BlogSelectObjectSchema.optional(), data: BlogUpdateManyMutationInputObjectSchema, where: BlogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BlogUpdateManyAndReturnArgs>;

export const BlogUpdateManyAndReturnZodSchema = z.object({ select: BlogSelectObjectSchema.optional(), data: BlogUpdateManyMutationInputObjectSchema, where: BlogWhereInputObjectSchema.optional() }).strict();