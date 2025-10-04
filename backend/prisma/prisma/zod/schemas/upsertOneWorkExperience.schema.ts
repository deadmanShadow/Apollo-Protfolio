import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkExperienceSelectObjectSchema as WorkExperienceSelectObjectSchema } from './objects/WorkExperienceSelect.schema';
import { WorkExperienceIncludeObjectSchema as WorkExperienceIncludeObjectSchema } from './objects/WorkExperienceInclude.schema';
import { WorkExperienceWhereUniqueInputObjectSchema as WorkExperienceWhereUniqueInputObjectSchema } from './objects/WorkExperienceWhereUniqueInput.schema';
import { WorkExperienceCreateInputObjectSchema as WorkExperienceCreateInputObjectSchema } from './objects/WorkExperienceCreateInput.schema';
import { WorkExperienceUncheckedCreateInputObjectSchema as WorkExperienceUncheckedCreateInputObjectSchema } from './objects/WorkExperienceUncheckedCreateInput.schema';
import { WorkExperienceUpdateInputObjectSchema as WorkExperienceUpdateInputObjectSchema } from './objects/WorkExperienceUpdateInput.schema';
import { WorkExperienceUncheckedUpdateInputObjectSchema as WorkExperienceUncheckedUpdateInputObjectSchema } from './objects/WorkExperienceUncheckedUpdateInput.schema';

export const WorkExperienceUpsertOneSchema: z.ZodType<Prisma.WorkExperienceUpsertArgs> = z.object({ select: WorkExperienceSelectObjectSchema.optional(), include: WorkExperienceIncludeObjectSchema.optional(), where: WorkExperienceWhereUniqueInputObjectSchema, create: z.union([ WorkExperienceCreateInputObjectSchema, WorkExperienceUncheckedCreateInputObjectSchema ]), update: z.union([ WorkExperienceUpdateInputObjectSchema, WorkExperienceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WorkExperienceUpsertArgs>;

export const WorkExperienceUpsertOneZodSchema = z.object({ select: WorkExperienceSelectObjectSchema.optional(), include: WorkExperienceIncludeObjectSchema.optional(), where: WorkExperienceWhereUniqueInputObjectSchema, create: z.union([ WorkExperienceCreateInputObjectSchema, WorkExperienceUncheckedCreateInputObjectSchema ]), update: z.union([ WorkExperienceUpdateInputObjectSchema, WorkExperienceUncheckedUpdateInputObjectSchema ]) }).strict();