import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkExperienceSelectObjectSchema as WorkExperienceSelectObjectSchema } from './objects/WorkExperienceSelect.schema';
import { WorkExperienceCreateManyInputObjectSchema as WorkExperienceCreateManyInputObjectSchema } from './objects/WorkExperienceCreateManyInput.schema';

export const WorkExperienceCreateManyAndReturnSchema: z.ZodType<Prisma.WorkExperienceCreateManyAndReturnArgs> = z.object({ select: WorkExperienceSelectObjectSchema.optional(), data: z.union([ WorkExperienceCreateManyInputObjectSchema, z.array(WorkExperienceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkExperienceCreateManyAndReturnArgs>;

export const WorkExperienceCreateManyAndReturnZodSchema = z.object({ select: WorkExperienceSelectObjectSchema.optional(), data: z.union([ WorkExperienceCreateManyInputObjectSchema, z.array(WorkExperienceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();