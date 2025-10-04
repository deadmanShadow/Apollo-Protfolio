import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BlogListRelationFilterObjectSchema as BlogListRelationFilterObjectSchema } from './BlogListRelationFilter.schema';
import { ProjectListRelationFilterObjectSchema as ProjectListRelationFilterObjectSchema } from './ProjectListRelationFilter.schema';
import { WorkExperienceListRelationFilterObjectSchema as WorkExperienceListRelationFilterObjectSchema } from './WorkExperienceListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  picture: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  bio: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  skills: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  blogs: z.lazy(() => BlogListRelationFilterObjectSchema).optional(),
  projects: z.lazy(() => ProjectListRelationFilterObjectSchema).optional(),
  workExperiences: z.lazy(() => WorkExperienceListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
