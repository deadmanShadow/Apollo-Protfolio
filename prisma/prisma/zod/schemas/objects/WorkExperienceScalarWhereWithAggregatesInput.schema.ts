import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const workexperiencescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkExperienceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkExperienceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkExperienceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkExperienceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkExperienceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  company: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  startDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  endDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const WorkExperienceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WorkExperienceScalarWhereWithAggregatesInput> = workexperiencescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WorkExperienceScalarWhereWithAggregatesInput>;
export const WorkExperienceScalarWhereWithAggregatesInputObjectZodSchema = workexperiencescalarwherewithaggregatesinputSchema;
