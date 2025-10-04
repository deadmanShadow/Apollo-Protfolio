import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogOrderByWithRelationInputObjectSchema as BlogOrderByWithRelationInputObjectSchema } from './objects/BlogOrderByWithRelationInput.schema';
import { BlogWhereInputObjectSchema as BlogWhereInputObjectSchema } from './objects/BlogWhereInput.schema';
import { BlogWhereUniqueInputObjectSchema as BlogWhereUniqueInputObjectSchema } from './objects/BlogWhereUniqueInput.schema';
import { BlogCountAggregateInputObjectSchema as BlogCountAggregateInputObjectSchema } from './objects/BlogCountAggregateInput.schema';

export const BlogCountSchema: z.ZodType<Prisma.BlogCountArgs> = z.object({ orderBy: z.union([BlogOrderByWithRelationInputObjectSchema, BlogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlogWhereInputObjectSchema.optional(), cursor: BlogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BlogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BlogCountArgs>;

export const BlogCountZodSchema = z.object({ orderBy: z.union([BlogOrderByWithRelationInputObjectSchema, BlogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlogWhereInputObjectSchema.optional(), cursor: BlogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BlogCountAggregateInputObjectSchema ]).optional() }).strict();