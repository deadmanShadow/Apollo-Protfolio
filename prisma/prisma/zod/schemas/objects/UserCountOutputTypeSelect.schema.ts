import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  blogs: z.boolean().optional(),
  projects: z.boolean().optional(),
  workExperiences: z.boolean().optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
