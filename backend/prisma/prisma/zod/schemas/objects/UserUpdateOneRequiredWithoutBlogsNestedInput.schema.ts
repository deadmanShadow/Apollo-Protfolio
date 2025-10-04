import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutBlogsInputObjectSchema as UserCreateWithoutBlogsInputObjectSchema } from './UserCreateWithoutBlogsInput.schema';
import { UserUncheckedCreateWithoutBlogsInputObjectSchema as UserUncheckedCreateWithoutBlogsInputObjectSchema } from './UserUncheckedCreateWithoutBlogsInput.schema';
import { UserCreateOrConnectWithoutBlogsInputObjectSchema as UserCreateOrConnectWithoutBlogsInputObjectSchema } from './UserCreateOrConnectWithoutBlogsInput.schema';
import { UserUpsertWithoutBlogsInputObjectSchema as UserUpsertWithoutBlogsInputObjectSchema } from './UserUpsertWithoutBlogsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBlogsInputObjectSchema as UserUpdateToOneWithWhereWithoutBlogsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBlogsInput.schema';
import { UserUpdateWithoutBlogsInputObjectSchema as UserUpdateWithoutBlogsInputObjectSchema } from './UserUpdateWithoutBlogsInput.schema';
import { UserUncheckedUpdateWithoutBlogsInputObjectSchema as UserUncheckedUpdateWithoutBlogsInputObjectSchema } from './UserUncheckedUpdateWithoutBlogsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBlogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBlogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBlogsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBlogsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutBlogsInputObjectSchema), z.lazy(() => UserUpdateWithoutBlogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBlogsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutBlogsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBlogsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutBlogsNestedInput>;
export const UserUpdateOneRequiredWithoutBlogsNestedInputObjectZodSchema = makeSchema();
