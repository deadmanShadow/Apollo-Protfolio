import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BlogCreateWithoutUserInputObjectSchema as BlogCreateWithoutUserInputObjectSchema } from './BlogCreateWithoutUserInput.schema';
import { BlogUncheckedCreateWithoutUserInputObjectSchema as BlogUncheckedCreateWithoutUserInputObjectSchema } from './BlogUncheckedCreateWithoutUserInput.schema';
import { BlogCreateOrConnectWithoutUserInputObjectSchema as BlogCreateOrConnectWithoutUserInputObjectSchema } from './BlogCreateOrConnectWithoutUserInput.schema';
import { BlogCreateManyUserInputEnvelopeObjectSchema as BlogCreateManyUserInputEnvelopeObjectSchema } from './BlogCreateManyUserInputEnvelope.schema';
import { BlogWhereUniqueInputObjectSchema as BlogWhereUniqueInputObjectSchema } from './BlogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BlogCreateWithoutUserInputObjectSchema), z.lazy(() => BlogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => BlogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => BlogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BlogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => BlogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BlogCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BlogWhereUniqueInputObjectSchema), z.lazy(() => BlogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BlogCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.BlogCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogCreateNestedManyWithoutUserInput>;
export const BlogCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
