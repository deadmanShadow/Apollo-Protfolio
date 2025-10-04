import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutWorkExperiencesNestedInputObjectSchema as UserUpdateOneRequiredWithoutWorkExperiencesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutWorkExperiencesNestedInput.schema'

const makeSchema = () => z.object({
  company: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutWorkExperiencesNestedInputObjectSchema).optional()
}).strict();
export const WorkExperienceUpdateInputObjectSchema: z.ZodType<Prisma.WorkExperienceUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceUpdateInput>;
export const WorkExperienceUpdateInputObjectZodSchema = makeSchema();
