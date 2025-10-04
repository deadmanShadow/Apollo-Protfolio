import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogUpdateManyMutationInputObjectSchema as BlogUpdateManyMutationInputObjectSchema } from './objects/BlogUpdateManyMutationInput.schema';
import { BlogWhereInputObjectSchema as BlogWhereInputObjectSchema } from './objects/BlogWhereInput.schema';

export const BlogUpdateManySchema: z.ZodType<Prisma.BlogUpdateManyArgs> = z.object({ data: BlogUpdateManyMutationInputObjectSchema, where: BlogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BlogUpdateManyArgs>;

export const BlogUpdateManyZodSchema = z.object({ data: BlogUpdateManyMutationInputObjectSchema, where: BlogWhereInputObjectSchema.optional() }).strict();