import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkExperienceSelectObjectSchema as WorkExperienceSelectObjectSchema } from './WorkExperienceSelect.schema';
import { WorkExperienceIncludeObjectSchema as WorkExperienceIncludeObjectSchema } from './WorkExperienceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WorkExperienceSelectObjectSchema).optional(),
  include: z.lazy(() => WorkExperienceIncludeObjectSchema).optional()
}).strict();
export const WorkExperienceArgsObjectSchema = makeSchema();
export const WorkExperienceArgsObjectZodSchema = makeSchema();
