import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkExperienceSelectObjectSchema as WorkExperienceSelectObjectSchema } from './objects/WorkExperienceSelect.schema';
import { WorkExperienceIncludeObjectSchema as WorkExperienceIncludeObjectSchema } from './objects/WorkExperienceInclude.schema';
import { WorkExperienceWhereUniqueInputObjectSchema as WorkExperienceWhereUniqueInputObjectSchema } from './objects/WorkExperienceWhereUniqueInput.schema';

export const WorkExperienceFindUniqueOrThrowSchema: z.ZodType<Prisma.WorkExperienceFindUniqueOrThrowArgs> = z.object({ select: WorkExperienceSelectObjectSchema.optional(), include: WorkExperienceIncludeObjectSchema.optional(), where: WorkExperienceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkExperienceFindUniqueOrThrowArgs>;

export const WorkExperienceFindUniqueOrThrowZodSchema = z.object({ select: WorkExperienceSelectObjectSchema.optional(), include: WorkExperienceIncludeObjectSchema.optional(), where: WorkExperienceWhereUniqueInputObjectSchema }).strict();