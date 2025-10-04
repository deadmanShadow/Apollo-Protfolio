import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogOrderByWithRelationInputObjectSchema as BlogOrderByWithRelationInputObjectSchema } from './objects/BlogOrderByWithRelationInput.schema';
import { BlogWhereInputObjectSchema as BlogWhereInputObjectSchema } from './objects/BlogWhereInput.schema';
import { BlogWhereUniqueInputObjectSchema as BlogWhereUniqueInputObjectSchema } from './objects/BlogWhereUniqueInput.schema';
import { BlogCountAggregateInputObjectSchema as BlogCountAggregateInputObjectSchema } from './objects/BlogCountAggregateInput.schema';
import { BlogMinAggregateInputObjectSchema as BlogMinAggregateInputObjectSchema } from './objects/BlogMinAggregateInput.schema';
import { BlogMaxAggregateInputObjectSchema as BlogMaxAggregateInputObjectSchema } from './objects/BlogMaxAggregateInput.schema';
import { BlogAvgAggregateInputObjectSchema as BlogAvgAggregateInputObjectSchema } from './objects/BlogAvgAggregateInput.schema';
import { BlogSumAggregateInputObjectSchema as BlogSumAggregateInputObjectSchema } from './objects/BlogSumAggregateInput.schema';

export const BlogAggregateSchema: z.ZodType<Prisma.BlogAggregateArgs> = z.object({ orderBy: z.union([BlogOrderByWithRelationInputObjectSchema, BlogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlogWhereInputObjectSchema.optional(), cursor: BlogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BlogCountAggregateInputObjectSchema ]).optional(), _min: BlogMinAggregateInputObjectSchema.optional(), _max: BlogMaxAggregateInputObjectSchema.optional(), _avg: BlogAvgAggregateInputObjectSchema.optional(), _sum: BlogSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BlogAggregateArgs>;

export const BlogAggregateZodSchema = z.object({ orderBy: z.union([BlogOrderByWithRelationInputObjectSchema, BlogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlogWhereInputObjectSchema.optional(), cursor: BlogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BlogCountAggregateInputObjectSchema ]).optional(), _min: BlogMinAggregateInputObjectSchema.optional(), _max: BlogMaxAggregateInputObjectSchema.optional(), _avg: BlogAvgAggregateInputObjectSchema.optional(), _sum: BlogSumAggregateInputObjectSchema.optional() }).strict();