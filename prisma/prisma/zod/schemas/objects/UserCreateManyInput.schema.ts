import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateskillsInputObjectSchema as UserCreateskillsInputObjectSchema } from './UserCreateskillsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  picture: z.string().optional().nullable(),
  password: z.string(),
  phone: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  skills: z.union([z.lazy(() => UserCreateskillsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date()
}).strict();
export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyInput>;
export const UserCreateManyInputObjectZodSchema = makeSchema();
