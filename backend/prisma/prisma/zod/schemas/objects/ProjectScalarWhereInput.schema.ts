import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const projectscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectScalarWhereInputObjectSchema), z.lazy(() => ProjectScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectScalarWhereInputObjectSchema), z.lazy(() => ProjectScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  thumbnail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  projectLink: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  liveSite: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  features: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ProjectScalarWhereInputObjectSchema: z.ZodType<Prisma.ProjectScalarWhereInput> = projectscalarwhereinputSchema as unknown as z.ZodType<Prisma.ProjectScalarWhereInput>;
export const ProjectScalarWhereInputObjectZodSchema = projectscalarwhereinputSchema;
