import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateskillsInputObjectSchema as UserUpdateskillsInputObjectSchema } from './UserUpdateskillsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BlogUncheckedUpdateManyWithoutUserNestedInputObjectSchema as BlogUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './BlogUncheckedUpdateManyWithoutUserNestedInput.schema';
import { WorkExperienceUncheckedUpdateManyWithoutUserNestedInputObjectSchema as WorkExperienceUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './WorkExperienceUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  picture: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bio: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  skills: z.union([z.lazy(() => UserUpdateskillsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  blogs: z.lazy(() => BlogUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  workExperiences: z.lazy(() => WorkExperienceUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutProjectsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutProjectsInput>;
export const UserUncheckedUpdateWithoutProjectsInputObjectZodSchema = makeSchema();
