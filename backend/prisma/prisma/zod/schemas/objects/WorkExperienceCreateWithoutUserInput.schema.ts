import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  company: z.string(),
  position: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional().nullable()
}).strict();
export const WorkExperienceCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkExperienceCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceCreateWithoutUserInput>;
export const WorkExperienceCreateWithoutUserInputObjectZodSchema = makeSchema();
