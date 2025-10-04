import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutBlogsInputObjectSchema as UserCreateWithoutBlogsInputObjectSchema } from './UserCreateWithoutBlogsInput.schema';
import { UserUncheckedCreateWithoutBlogsInputObjectSchema as UserUncheckedCreateWithoutBlogsInputObjectSchema } from './UserUncheckedCreateWithoutBlogsInput.schema';
import { UserCreateOrConnectWithoutBlogsInputObjectSchema as UserCreateOrConnectWithoutBlogsInputObjectSchema } from './UserCreateOrConnectWithoutBlogsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBlogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBlogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBlogsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutBlogsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBlogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutBlogsInput>;
export const UserCreateNestedOneWithoutBlogsInputObjectZodSchema = makeSchema();
