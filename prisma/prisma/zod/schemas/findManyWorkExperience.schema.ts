import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkExperienceIncludeObjectSchema as WorkExperienceIncludeObjectSchema } from './objects/WorkExperienceInclude.schema';
import { WorkExperienceOrderByWithRelationInputObjectSchema as WorkExperienceOrderByWithRelationInputObjectSchema } from './objects/WorkExperienceOrderByWithRelationInput.schema';
import { WorkExperienceWhereInputObjectSchema as WorkExperienceWhereInputObjectSchema } from './objects/WorkExperienceWhereInput.schema';
import { WorkExperienceWhereUniqueInputObjectSchema as WorkExperienceWhereUniqueInputObjectSchema } from './objects/WorkExperienceWhereUniqueInput.schema';
import { WorkExperienceScalarFieldEnumSchema } from './enums/WorkExperienceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkExperienceFindManySelectSchema: z.ZodType<Prisma.WorkExperienceSelect> = z.object({
    id: z.boolean().optional(),
    company: z.boolean().optional(),
    position: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkExperienceSelect>;

export const WorkExperienceFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    company: z.boolean().optional(),
    position: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const WorkExperienceFindManySchema: z.ZodType<Prisma.WorkExperienceFindManyArgs> = z.object({ select: WorkExperienceFindManySelectSchema.optional(), include: z.lazy(() => WorkExperienceIncludeObjectSchema.optional()), orderBy: z.union([WorkExperienceOrderByWithRelationInputObjectSchema, WorkExperienceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkExperienceWhereInputObjectSchema.optional(), cursor: WorkExperienceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkExperienceScalarFieldEnumSchema, WorkExperienceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkExperienceFindManyArgs>;

export const WorkExperienceFindManyZodSchema = z.object({ select: WorkExperienceFindManySelectSchema.optional(), include: z.lazy(() => WorkExperienceIncludeObjectSchema.optional()), orderBy: z.union([WorkExperienceOrderByWithRelationInputObjectSchema, WorkExperienceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkExperienceWhereInputObjectSchema.optional(), cursor: WorkExperienceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkExperienceScalarFieldEnumSchema, WorkExperienceScalarFieldEnumSchema.array()]).optional() }).strict();