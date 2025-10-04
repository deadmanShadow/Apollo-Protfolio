import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogWhereInputObjectSchema as BlogWhereInputObjectSchema } from './objects/BlogWhereInput.schema';
import { BlogOrderByWithAggregationInputObjectSchema as BlogOrderByWithAggregationInputObjectSchema } from './objects/BlogOrderByWithAggregationInput.schema';
import { BlogScalarWhereWithAggregatesInputObjectSchema as BlogScalarWhereWithAggregatesInputObjectSchema } from './objects/BlogScalarWhereWithAggregatesInput.schema';
import { BlogScalarFieldEnumSchema } from './enums/BlogScalarFieldEnum.schema';
import { BlogCountAggregateInputObjectSchema as BlogCountAggregateInputObjectSchema } from './objects/BlogCountAggregateInput.schema';
import { BlogMinAggregateInputObjectSchema as BlogMinAggregateInputObjectSchema } from './objects/BlogMinAggregateInput.schema';
import { BlogMaxAggregateInputObjectSchema as BlogMaxAggregateInputObjectSchema } from './objects/BlogMaxAggregateInput.schema';
import { BlogAvgAggregateInputObjectSchema as BlogAvgAggregateInputObjectSchema } from './objects/BlogAvgAggregateInput.schema';
import { BlogSumAggregateInputObjectSchema as BlogSumAggregateInputObjectSchema } from './objects/BlogSumAggregateInput.schema';

export const BlogGroupBySchema: z.ZodType<Prisma.BlogGroupByArgs> = z.object({ where: BlogWhereInputObjectSchema.optional(), orderBy: z.union([BlogOrderByWithAggregationInputObjectSchema, BlogOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BlogScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BlogScalarFieldEnumSchema), _count: z.union([ z.literal(true), BlogCountAggregateInputObjectSchema ]).optional(), _min: BlogMinAggregateInputObjectSchema.optional(), _max: BlogMaxAggregateInputObjectSchema.optional(), _avg: BlogAvgAggregateInputObjectSchema.optional(), _sum: BlogSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BlogGroupByArgs>;

export const BlogGroupByZodSchema = z.object({ where: BlogWhereInputObjectSchema.optional(), orderBy: z.union([BlogOrderByWithAggregationInputObjectSchema, BlogOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BlogScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BlogScalarFieldEnumSchema), _count: z.union([ z.literal(true), BlogCountAggregateInputObjectSchema ]).optional(), _min: BlogMinAggregateInputObjectSchema.optional(), _max: BlogMaxAggregateInputObjectSchema.optional(), _avg: BlogAvgAggregateInputObjectSchema.optional(), _sum: BlogSumAggregateInputObjectSchema.optional() }).strict();