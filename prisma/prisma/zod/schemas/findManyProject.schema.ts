import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectIncludeObjectSchema as ProjectIncludeObjectSchema } from './objects/ProjectInclude.schema';
import { ProjectOrderByWithRelationInputObjectSchema as ProjectOrderByWithRelationInputObjectSchema } from './objects/ProjectOrderByWithRelationInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './objects/ProjectWhereInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema';
import { ProjectScalarFieldEnumSchema } from './enums/ProjectScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectFindManySelectSchema: z.ZodType<Prisma.ProjectSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    thumbnail: z.boolean().optional(),
    projectLink: z.boolean().optional(),
    liveSite: z.boolean().optional(),
    description: z.boolean().optional(),
    features: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProjectSelect>;

export const ProjectFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    thumbnail: z.boolean().optional(),
    projectLink: z.boolean().optional(),
    liveSite: z.boolean().optional(),
    description: z.boolean().optional(),
    features: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const ProjectFindManySchema: z.ZodType<Prisma.ProjectFindManyArgs> = z.object({ select: ProjectFindManySelectSchema.optional(), include: z.lazy(() => ProjectIncludeObjectSchema.optional()), orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectFindManyArgs>;

export const ProjectFindManyZodSchema = z.object({ select: ProjectFindManySelectSchema.optional(), include: z.lazy(() => ProjectIncludeObjectSchema.optional()), orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict();