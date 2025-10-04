import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutBlogsInputObjectSchema as UserUpdateWithoutBlogsInputObjectSchema } from './UserUpdateWithoutBlogsInput.schema';
import { UserUncheckedUpdateWithoutBlogsInputObjectSchema as UserUncheckedUpdateWithoutBlogsInputObjectSchema } from './UserUncheckedUpdateWithoutBlogsInput.schema';
import { UserCreateWithoutBlogsInputObjectSchema as UserCreateWithoutBlogsInputObjectSchema } from './UserCreateWithoutBlogsInput.schema';
import { UserUncheckedCreateWithoutBlogsInputObjectSchema as UserUncheckedCreateWithoutBlogsInputObjectSchema } from './UserUncheckedCreateWithoutBlogsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutBlogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBlogsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutBlogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBlogsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutBlogsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutBlogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutBlogsInput>;
export const UserUpsertWithoutBlogsInputObjectZodSchema = makeSchema();
