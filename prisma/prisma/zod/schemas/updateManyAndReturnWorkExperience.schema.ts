import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkExperienceSelectObjectSchema as WorkExperienceSelectObjectSchema } from './objects/WorkExperienceSelect.schema';
import { WorkExperienceUpdateManyMutationInputObjectSchema as WorkExperienceUpdateManyMutationInputObjectSchema } from './objects/WorkExperienceUpdateManyMutationInput.schema';
import { WorkExperienceWhereInputObjectSchema as WorkExperienceWhereInputObjectSchema } from './objects/WorkExperienceWhereInput.schema';

export const WorkExperienceUpdateManyAndReturnSchema: z.ZodType<Prisma.WorkExperienceUpdateManyAndReturnArgs> = z.object({ select: WorkExperienceSelectObjectSchema.optional(), data: WorkExperienceUpdateManyMutationInputObjectSchema, where: WorkExperienceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkExperienceUpdateManyAndReturnArgs>;

export const WorkExperienceUpdateManyAndReturnZodSchema = z.object({ select: WorkExperienceSelectObjectSchema.optional(), data: WorkExperienceUpdateManyMutationInputObjectSchema, where: WorkExperienceWhereInputObjectSchema.optional() }).strict();