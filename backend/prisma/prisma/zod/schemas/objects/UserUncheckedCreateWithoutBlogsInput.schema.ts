import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateskillsInputObjectSchema as UserCreateskillsInputObjectSchema } from './UserCreateskillsInput.schema';
import { ProjectUncheckedCreateNestedManyWithoutUserInputObjectSchema as ProjectUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutUserInput.schema';
import { WorkExperienceUncheckedCreateNestedManyWithoutUserInputObjectSchema as WorkExperienceUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './WorkExperienceUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  picture: z.string().optional().nullable(),
  password: z.string(),
  phone: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  skills: z.union([z.lazy(() => UserCreateskillsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  projects: z.lazy(() => ProjectUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  workExperiences: z.lazy(() => WorkExperienceUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutBlogsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutBlogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutBlogsInput>;
export const UserUncheckedCreateWithoutBlogsInputObjectZodSchema = makeSchema();
