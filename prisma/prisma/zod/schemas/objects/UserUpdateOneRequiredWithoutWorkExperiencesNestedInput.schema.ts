import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutWorkExperiencesInputObjectSchema as UserCreateWithoutWorkExperiencesInputObjectSchema } from './UserCreateWithoutWorkExperiencesInput.schema';
import { UserUncheckedCreateWithoutWorkExperiencesInputObjectSchema as UserUncheckedCreateWithoutWorkExperiencesInputObjectSchema } from './UserUncheckedCreateWithoutWorkExperiencesInput.schema';
import { UserCreateOrConnectWithoutWorkExperiencesInputObjectSchema as UserCreateOrConnectWithoutWorkExperiencesInputObjectSchema } from './UserCreateOrConnectWithoutWorkExperiencesInput.schema';
import { UserUpsertWithoutWorkExperiencesInputObjectSchema as UserUpsertWithoutWorkExperiencesInputObjectSchema } from './UserUpsertWithoutWorkExperiencesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutWorkExperiencesInputObjectSchema as UserUpdateToOneWithWhereWithoutWorkExperiencesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutWorkExperiencesInput.schema';
import { UserUpdateWithoutWorkExperiencesInputObjectSchema as UserUpdateWithoutWorkExperiencesInputObjectSchema } from './UserUpdateWithoutWorkExperiencesInput.schema';
import { UserUncheckedUpdateWithoutWorkExperiencesInputObjectSchema as UserUncheckedUpdateWithoutWorkExperiencesInputObjectSchema } from './UserUncheckedUpdateWithoutWorkExperiencesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWorkExperiencesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkExperiencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkExperiencesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWorkExperiencesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutWorkExperiencesInputObjectSchema), z.lazy(() => UserUpdateWithoutWorkExperiencesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkExperiencesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutWorkExperiencesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWorkExperiencesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutWorkExperiencesNestedInput>;
export const UserUpdateOneRequiredWithoutWorkExperiencesNestedInputObjectZodSchema = makeSchema();
