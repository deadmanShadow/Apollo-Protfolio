import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBlogsInputObjectSchema as UserUpdateWithoutBlogsInputObjectSchema } from './UserUpdateWithoutBlogsInput.schema';
import { UserUncheckedUpdateWithoutBlogsInputObjectSchema as UserUncheckedUpdateWithoutBlogsInputObjectSchema } from './UserUncheckedUpdateWithoutBlogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutBlogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBlogsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutBlogsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBlogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBlogsInput>;
export const UserUpdateToOneWithWhereWithoutBlogsInputObjectZodSchema = makeSchema();
