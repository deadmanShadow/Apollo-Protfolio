import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkExperienceWhereInputObjectSchema as WorkExperienceWhereInputObjectSchema } from './objects/WorkExperienceWhereInput.schema';

export const WorkExperienceDeleteManySchema: z.ZodType<Prisma.WorkExperienceDeleteManyArgs> = z.object({ where: WorkExperienceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkExperienceDeleteManyArgs>;

export const WorkExperienceDeleteManyZodSchema = z.object({ where: WorkExperienceWhereInputObjectSchema.optional() }).strict();