import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutProjectsInputObjectSchema as UserCreateNestedOneWithoutProjectsInputObjectSchema } from './UserCreateNestedOneWithoutProjectsInput.schema'

const makeSchema = () => z.object({
  title: z.string(),
  thumbnail: z.string().optional().nullable(),
  projectLink: z.string(),
  liveSite: z.string().optional().nullable(),
  description: z.string(),
  features: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutProjectsInputObjectSchema)
}).strict();
export const ProjectCreateInputObjectSchema: z.ZodType<Prisma.ProjectCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateInput>;
export const ProjectCreateInputObjectZodSchema = makeSchema();
