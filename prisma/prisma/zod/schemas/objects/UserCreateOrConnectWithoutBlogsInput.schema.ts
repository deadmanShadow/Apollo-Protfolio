import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBlogsInputObjectSchema as UserCreateWithoutBlogsInputObjectSchema } from './UserCreateWithoutBlogsInput.schema';
import { UserUncheckedCreateWithoutBlogsInputObjectSchema as UserUncheckedCreateWithoutBlogsInputObjectSchema } from './UserUncheckedCreateWithoutBlogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutBlogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBlogsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutBlogsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBlogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutBlogsInput>;
export const UserCreateOrConnectWithoutBlogsInputObjectZodSchema = makeSchema();
