import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkExperienceSelectObjectSchema as WorkExperienceSelectObjectSchema } from './objects/WorkExperienceSelect.schema';
import { WorkExperienceIncludeObjectSchema as WorkExperienceIncludeObjectSchema } from './objects/WorkExperienceInclude.schema';
import { WorkExperienceCreateInputObjectSchema as WorkExperienceCreateInputObjectSchema } from './objects/WorkExperienceCreateInput.schema';
import { WorkExperienceUncheckedCreateInputObjectSchema as WorkExperienceUncheckedCreateInputObjectSchema } from './objects/WorkExperienceUncheckedCreateInput.schema';

export const WorkExperienceCreateOneSchema: z.ZodType<Prisma.WorkExperienceCreateArgs> = z.object({ select: WorkExperienceSelectObjectSchema.optional(), include: WorkExperienceIncludeObjectSchema.optional(), data: z.union([WorkExperienceCreateInputObjectSchema, WorkExperienceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WorkExperienceCreateArgs>;

export const WorkExperienceCreateOneZodSchema = z.object({ select: WorkExperienceSelectObjectSchema.optional(), include: WorkExperienceIncludeObjectSchema.optional(), data: z.union([WorkExperienceCreateInputObjectSchema, WorkExperienceUncheckedCreateInputObjectSchema]) }).strict();