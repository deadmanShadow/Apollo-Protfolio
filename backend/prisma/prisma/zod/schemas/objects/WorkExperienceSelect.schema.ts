import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  company: z.boolean().optional(),
  position: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const WorkExperienceSelectObjectSchema: z.ZodType<Prisma.WorkExperienceSelect> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceSelect>;
export const WorkExperienceSelectObjectZodSchema = makeSchema();
