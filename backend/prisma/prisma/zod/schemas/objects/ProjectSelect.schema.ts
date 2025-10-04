import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  thumbnail: z.boolean().optional(),
  projectLink: z.boolean().optional(),
  liveSite: z.boolean().optional(),
  description: z.boolean().optional(),
  features: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const ProjectSelectObjectSchema: z.ZodType<Prisma.ProjectSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSelect>;
export const ProjectSelectObjectZodSchema = makeSchema();
