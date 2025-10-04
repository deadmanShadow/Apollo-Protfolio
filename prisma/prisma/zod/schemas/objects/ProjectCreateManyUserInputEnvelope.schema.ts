import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateManyUserInputObjectSchema as ProjectCreateManyUserInputObjectSchema } from './ProjectCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProjectCreateManyUserInputObjectSchema), z.lazy(() => ProjectCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProjectCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ProjectCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateManyUserInputEnvelope>;
export const ProjectCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
