import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkExperienceUpdateManyMutationInputObjectSchema as WorkExperienceUpdateManyMutationInputObjectSchema } from './objects/WorkExperienceUpdateManyMutationInput.schema';
import { WorkExperienceWhereInputObjectSchema as WorkExperienceWhereInputObjectSchema } from './objects/WorkExperienceWhereInput.schema';

export const WorkExperienceUpdateManySchema: z.ZodType<Prisma.WorkExperienceUpdateManyArgs> = z.object({ data: WorkExperienceUpdateManyMutationInputObjectSchema, where: WorkExperienceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkExperienceUpdateManyArgs>;

export const WorkExperienceUpdateManyZodSchema = z.object({ data: WorkExperienceUpdateManyMutationInputObjectSchema, where: WorkExperienceWhereInputObjectSchema.optional() }).strict();