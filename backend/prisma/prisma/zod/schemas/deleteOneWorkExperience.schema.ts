import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkExperienceSelectObjectSchema as WorkExperienceSelectObjectSchema } from './objects/WorkExperienceSelect.schema';
import { WorkExperienceIncludeObjectSchema as WorkExperienceIncludeObjectSchema } from './objects/WorkExperienceInclude.schema';
import { WorkExperienceWhereUniqueInputObjectSchema as WorkExperienceWhereUniqueInputObjectSchema } from './objects/WorkExperienceWhereUniqueInput.schema';

export const WorkExperienceDeleteOneSchema: z.ZodType<Prisma.WorkExperienceDeleteArgs> = z.object({ select: WorkExperienceSelectObjectSchema.optional(), include: WorkExperienceIncludeObjectSchema.optional(), where: WorkExperienceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkExperienceDeleteArgs>;

export const WorkExperienceDeleteOneZodSchema = z.object({ select: WorkExperienceSelectObjectSchema.optional(), include: WorkExperienceIncludeObjectSchema.optional(), where: WorkExperienceWhereUniqueInputObjectSchema }).strict();