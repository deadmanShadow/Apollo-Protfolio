import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const projectwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectWhereInputObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectWhereInputObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  thumbnail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  projectLink: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  liveSite: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  features: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const ProjectWhereInputObjectSchema: z.ZodType<Prisma.ProjectWhereInput> = projectwhereinputSchema as unknown as z.ZodType<Prisma.ProjectWhereInput>;
export const ProjectWhereInputObjectZodSchema = projectwhereinputSchema;
