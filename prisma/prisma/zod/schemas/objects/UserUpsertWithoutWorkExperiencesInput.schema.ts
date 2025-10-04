import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutWorkExperiencesInputObjectSchema as UserUpdateWithoutWorkExperiencesInputObjectSchema } from './UserUpdateWithoutWorkExperiencesInput.schema';
import { UserUncheckedUpdateWithoutWorkExperiencesInputObjectSchema as UserUncheckedUpdateWithoutWorkExperiencesInputObjectSchema } from './UserUncheckedUpdateWithoutWorkExperiencesInput.schema';
import { UserCreateWithoutWorkExperiencesInputObjectSchema as UserCreateWithoutWorkExperiencesInputObjectSchema } from './UserCreateWithoutWorkExperiencesInput.schema';
import { UserUncheckedCreateWithoutWorkExperiencesInputObjectSchema as UserUncheckedCreateWithoutWorkExperiencesInputObjectSchema } from './UserUncheckedCreateWithoutWorkExperiencesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutWorkExperiencesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkExperiencesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutWorkExperiencesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkExperiencesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutWorkExperiencesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutWorkExperiencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutWorkExperiencesInput>;
export const UserUpsertWithoutWorkExperiencesInputObjectZodSchema = makeSchema();
