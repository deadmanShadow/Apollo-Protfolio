import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const UserCreateskillsInputObjectSchema: z.ZodType<Prisma.UserCreateskillsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateskillsInput>;
export const UserCreateskillsInputObjectZodSchema = makeSchema();
