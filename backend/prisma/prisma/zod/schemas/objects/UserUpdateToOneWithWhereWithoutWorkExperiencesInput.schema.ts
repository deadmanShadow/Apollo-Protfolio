import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutWorkExperiencesInputObjectSchema as UserUpdateWithoutWorkExperiencesInputObjectSchema } from './UserUpdateWithoutWorkExperiencesInput.schema';
import { UserUncheckedUpdateWithoutWorkExperiencesInputObjectSchema as UserUncheckedUpdateWithoutWorkExperiencesInputObjectSchema } from './UserUncheckedUpdateWithoutWorkExperiencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutWorkExperiencesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkExperiencesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutWorkExperiencesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWorkExperiencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWorkExperiencesInput>;
export const UserUpdateToOneWithWhereWithoutWorkExperiencesInputObjectZodSchema = makeSchema();
