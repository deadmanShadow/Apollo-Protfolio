import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutWorkExperiencesInputObjectSchema as UserCreateWithoutWorkExperiencesInputObjectSchema } from './UserCreateWithoutWorkExperiencesInput.schema';
import { UserUncheckedCreateWithoutWorkExperiencesInputObjectSchema as UserUncheckedCreateWithoutWorkExperiencesInputObjectSchema } from './UserUncheckedCreateWithoutWorkExperiencesInput.schema';
import { UserCreateOrConnectWithoutWorkExperiencesInputObjectSchema as UserCreateOrConnectWithoutWorkExperiencesInputObjectSchema } from './UserCreateOrConnectWithoutWorkExperiencesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWorkExperiencesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkExperiencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkExperiencesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutWorkExperiencesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutWorkExperiencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutWorkExperiencesInput>;
export const UserCreateNestedOneWithoutWorkExperiencesInputObjectZodSchema = makeSchema();
