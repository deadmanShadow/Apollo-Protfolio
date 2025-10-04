import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutWorkExperiencesInputObjectSchema as UserCreateWithoutWorkExperiencesInputObjectSchema } from './UserCreateWithoutWorkExperiencesInput.schema';
import { UserUncheckedCreateWithoutWorkExperiencesInputObjectSchema as UserUncheckedCreateWithoutWorkExperiencesInputObjectSchema } from './UserUncheckedCreateWithoutWorkExperiencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutWorkExperiencesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkExperiencesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutWorkExperiencesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWorkExperiencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutWorkExperiencesInput>;
export const UserCreateOrConnectWithoutWorkExperiencesInputObjectZodSchema = makeSchema();
