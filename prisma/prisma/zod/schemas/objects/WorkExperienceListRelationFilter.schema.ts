import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkExperienceWhereInputObjectSchema as WorkExperienceWhereInputObjectSchema } from './WorkExperienceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WorkExperienceWhereInputObjectSchema).optional(),
  some: z.lazy(() => WorkExperienceWhereInputObjectSchema).optional(),
  none: z.lazy(() => WorkExperienceWhereInputObjectSchema).optional()
}).strict();
export const WorkExperienceListRelationFilterObjectSchema: z.ZodType<Prisma.WorkExperienceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceListRelationFilter>;
export const WorkExperienceListRelationFilterObjectZodSchema = makeSchema();
