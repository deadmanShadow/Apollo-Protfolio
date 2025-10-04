import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkExperienceCreateManyInputObjectSchema as WorkExperienceCreateManyInputObjectSchema } from './objects/WorkExperienceCreateManyInput.schema';

export const WorkExperienceCreateManySchema: z.ZodType<Prisma.WorkExperienceCreateManyArgs> = z.object({ data: z.union([ WorkExperienceCreateManyInputObjectSchema, z.array(WorkExperienceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkExperienceCreateManyArgs>;

export const WorkExperienceCreateManyZodSchema = z.object({ data: z.union([ WorkExperienceCreateManyInputObjectSchema, z.array(WorkExperienceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();