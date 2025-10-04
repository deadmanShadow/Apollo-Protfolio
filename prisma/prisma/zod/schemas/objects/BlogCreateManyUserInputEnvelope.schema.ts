import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BlogCreateManyUserInputObjectSchema as BlogCreateManyUserInputObjectSchema } from './BlogCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BlogCreateManyUserInputObjectSchema), z.lazy(() => BlogCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BlogCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.BlogCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BlogCreateManyUserInputEnvelope>;
export const BlogCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
