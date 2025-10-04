import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateskillsInputObjectSchema as UserCreateskillsInputObjectSchema } from './UserCreateskillsInput.schema';
import { BlogCreateNestedManyWithoutUserInputObjectSchema as BlogCreateNestedManyWithoutUserInputObjectSchema } from './BlogCreateNestedManyWithoutUserInput.schema';
import { WorkExperienceCreateNestedManyWithoutUserInputObjectSchema as WorkExperienceCreateNestedManyWithoutUserInputObjectSchema } from './WorkExperienceCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  email: z.string(),
  picture: z.string().optional().nullable(),
  password: z.string(),
  phone: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  skills: z.union([z.lazy(() => UserCreateskillsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  blogs: z.lazy(() => BlogCreateNestedManyWithoutUserInputObjectSchema).optional(),
  workExperiences: z.lazy(() => WorkExperienceCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutProjectsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutProjectsInput>;
export const UserCreateWithoutProjectsInputObjectZodSchema = makeSchema();
