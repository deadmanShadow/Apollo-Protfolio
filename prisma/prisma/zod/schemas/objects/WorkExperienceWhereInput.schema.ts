import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const workexperiencewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkExperienceWhereInputObjectSchema), z.lazy(() => WorkExperienceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkExperienceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkExperienceWhereInputObjectSchema), z.lazy(() => WorkExperienceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  company: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  startDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  endDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const WorkExperienceWhereInputObjectSchema: z.ZodType<Prisma.WorkExperienceWhereInput> = workexperiencewhereinputSchema as unknown as z.ZodType<Prisma.WorkExperienceWhereInput>;
export const WorkExperienceWhereInputObjectZodSchema = workexperiencewhereinputSchema;
