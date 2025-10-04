import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkExperienceSelectObjectSchema as WorkExperienceSelectObjectSchema } from './objects/WorkExperienceSelect.schema';
import { WorkExperienceIncludeObjectSchema as WorkExperienceIncludeObjectSchema } from './objects/WorkExperienceInclude.schema';
import { WorkExperienceUpdateInputObjectSchema as WorkExperienceUpdateInputObjectSchema } from './objects/WorkExperienceUpdateInput.schema';
import { WorkExperienceUncheckedUpdateInputObjectSchema as WorkExperienceUncheckedUpdateInputObjectSchema } from './objects/WorkExperienceUncheckedUpdateInput.schema';
import { WorkExperienceWhereUniqueInputObjectSchema as WorkExperienceWhereUniqueInputObjectSchema } from './objects/WorkExperienceWhereUniqueInput.schema';

export const WorkExperienceUpdateOneSchema: z.ZodType<Prisma.WorkExperienceUpdateArgs> = z.object({ select: WorkExperienceSelectObjectSchema.optional(), include: WorkExperienceIncludeObjectSchema.optional(), data: z.union([WorkExperienceUpdateInputObjectSchema, WorkExperienceUncheckedUpdateInputObjectSchema]), where: WorkExperienceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkExperienceUpdateArgs>;

export const WorkExperienceUpdateOneZodSchema = z.object({ select: WorkExperienceSelectObjectSchema.optional(), include: WorkExperienceIncludeObjectSchema.optional(), data: z.union([WorkExperienceUpdateInputObjectSchema, WorkExperienceUncheckedUpdateInputObjectSchema]), where: WorkExperienceWhereUniqueInputObjectSchema }).strict();