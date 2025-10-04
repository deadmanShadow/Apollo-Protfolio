import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateskillsInputObjectSchema as UserUpdateskillsInputObjectSchema } from './UserUpdateskillsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BlogUpdateManyWithoutUserNestedInputObjectSchema as BlogUpdateManyWithoutUserNestedInputObjectSchema } from './BlogUpdateManyWithoutUserNestedInput.schema';
import { ProjectUpdateManyWithoutUserNestedInputObjectSchema as ProjectUpdateManyWithoutUserNestedInputObjectSchema } from './ProjectUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  picture: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bio: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  skills: z.union([z.lazy(() => UserUpdateskillsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  blogs: z.lazy(() => BlogUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  projects: z.lazy(() => ProjectUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutWorkExperiencesInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutWorkExperiencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutWorkExperiencesInput>;
export const UserUpdateWithoutWorkExperiencesInputObjectZodSchema = makeSchema();
