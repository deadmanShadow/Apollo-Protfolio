import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BlogCreateWithoutUserInputObjectSchema as BlogCreateWithoutUserInputObjectSchema } from './BlogCreateWithoutUserInput.schema';
import { BlogUncheckedCreateWithoutUserInputObjectSchema as BlogUncheckedCreateWithoutUserInputObjectSchema } from './BlogUncheckedCreateWithoutUserInput.schema';
import { BlogCreateOrConnectWithoutUserInputObjectSchema as BlogCreateOrConnectWithoutUserInputObjectSchema } from './BlogCreateOrConnectWithoutUserInput.schema';
import { BlogUpsertWithWhereUniqueWithoutUserInputObjectSchema as BlogUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './BlogUpsertWithWhereUniqueWithoutUserInput.schema';
import { BlogCreateManyUserInputEnvelopeObjectSchema as BlogCreateManyUserInputEnvelopeObjectSchema } from './BlogCreateManyUserInputEnvelope.schema';
import { BlogWhereUniqueInputObjectSchema as BlogWhereUniqueInputObjectSchema } from './BlogWhereUniqueInput.schema';
import { BlogUpdateWithWhereUniqueWithoutUserInputObjectSchema as BlogUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './BlogUpdateWithWhereUniqueWithoutUserInput.schema';
import { BlogUpdateManyWithWhereWithoutUserInputObjectSchema as BlogUpdateManyWithWhereWithoutUserInputObjectSchema } from './BlogUpdateManyWithWhereWithoutUserInput.schema';
import { BlogScalarWhereInputObjectSchema as BlogScalarWhereInputObjectSchema } from './BlogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BlogCreateWithoutUserInputObjectSchema), z.lazy(() => BlogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => BlogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => BlogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BlogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => BlogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BlogUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => BlogUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BlogCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BlogWhereUniqueInputObjectSchema), z.lazy(() => BlogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BlogWhereUniqueInputObjectSchema), z.lazy(() => BlogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BlogWhereUniqueInputObjectSchema), z.lazy(() => BlogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BlogWhereUniqueInputObjectSchema), z.lazy(() => BlogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BlogUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => BlogUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BlogUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => BlogUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BlogScalarWhereInputObjectSchema), z.lazy(() => BlogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BlogUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.BlogUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogUncheckedUpdateManyWithoutUserNestedInput>;
export const BlogUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
