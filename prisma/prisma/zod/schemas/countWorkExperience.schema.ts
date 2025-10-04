import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkExperienceOrderByWithRelationInputObjectSchema as WorkExperienceOrderByWithRelationInputObjectSchema } from './objects/WorkExperienceOrderByWithRelationInput.schema';
import { WorkExperienceWhereInputObjectSchema as WorkExperienceWhereInputObjectSchema } from './objects/WorkExperienceWhereInput.schema';
import { WorkExperienceWhereUniqueInputObjectSchema as WorkExperienceWhereUniqueInputObjectSchema } from './objects/WorkExperienceWhereUniqueInput.schema';
import { WorkExperienceCountAggregateInputObjectSchema as WorkExperienceCountAggregateInputObjectSchema } from './objects/WorkExperienceCountAggregateInput.schema';

export const WorkExperienceCountSchema: z.ZodType<Prisma.WorkExperienceCountArgs> = z.object({ orderBy: z.union([WorkExperienceOrderByWithRelationInputObjectSchema, WorkExperienceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkExperienceWhereInputObjectSchema.optional(), cursor: WorkExperienceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkExperienceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkExperienceCountArgs>;

export const WorkExperienceCountZodSchema = z.object({ orderBy: z.union([WorkExperienceOrderByWithRelationInputObjectSchema, WorkExperienceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkExperienceWhereInputObjectSchema.optional(), cursor: WorkExperienceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkExperienceCountAggregateInputObjectSchema ]).optional() }).strict();