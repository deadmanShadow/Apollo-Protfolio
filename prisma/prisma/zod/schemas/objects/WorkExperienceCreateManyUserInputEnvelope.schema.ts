import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkExperienceCreateManyUserInputObjectSchema as WorkExperienceCreateManyUserInputObjectSchema } from './WorkExperienceCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkExperienceCreateManyUserInputObjectSchema), z.lazy(() => WorkExperienceCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkExperienceCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkExperienceCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceCreateManyUserInputEnvelope>;
export const WorkExperienceCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
