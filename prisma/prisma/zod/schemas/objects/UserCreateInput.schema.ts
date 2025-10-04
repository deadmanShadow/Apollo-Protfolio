import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateskillsInputObjectSchema as UserCreateskillsInputObjectSchema } from './UserCreateskillsInput.schema';
import { BlogCreateNestedManyWithoutUserInputObjectSchema as BlogCreateNestedManyWithoutUserInputObjectSchema } from './BlogCreateNestedManyWithoutUserInput.schema';
import { ProjectCreateNestedManyWithoutUserInputObjectSchema as ProjectCreateNestedManyWithoutUserInputObjectSchema } from './ProjectCreateNestedManyWithoutUserInput.schema';
import { WorkExperienceCreateNestedManyWithoutUserInputObjectSchema as WorkExperienceCreateNestedManyWithoutUserInputObjectSchema } from './WorkExperienceCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  email: z.string(),
  picture: z.string().optional().nullable(),
  password: z.string(),
  phone: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  skills: z.union([z.lazy(() => UserCreateskillsInputObjectSchema), z.string().array()]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  blogs: z.lazy(() => BlogCreateNestedManyWithoutUserInputObjectSchema),
  projects: z.lazy(() => ProjectCreateNestedManyWithoutUserInputObjectSchema),
  workExperiences: z.lazy(() => WorkExperienceCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
