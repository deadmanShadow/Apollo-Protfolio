import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const workexperiencescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkExperienceScalarWhereInputObjectSchema), z.lazy(() => WorkExperienceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkExperienceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkExperienceScalarWhereInputObjectSchema), z.lazy(() => WorkExperienceScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  company: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  startDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  endDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const WorkExperienceScalarWhereInputObjectSchema: z.ZodType<Prisma.WorkExperienceScalarWhereInput> = workexperiencescalarwhereinputSchema as unknown as z.ZodType<Prisma.WorkExperienceScalarWhereInput>;
export const WorkExperienceScalarWhereInputObjectZodSchema = workexperiencescalarwhereinputSchema;
