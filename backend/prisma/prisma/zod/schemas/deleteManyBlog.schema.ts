import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogWhereInputObjectSchema as BlogWhereInputObjectSchema } from './objects/BlogWhereInput.schema';

export const BlogDeleteManySchema: z.ZodType<Prisma.BlogDeleteManyArgs> = z.object({ where: BlogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BlogDeleteManyArgs>;

export const BlogDeleteManyZodSchema = z.object({ where: BlogWhereInputObjectSchema.optional() }).strict();