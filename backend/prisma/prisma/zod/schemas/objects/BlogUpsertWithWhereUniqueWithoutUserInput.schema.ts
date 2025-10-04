import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BlogWhereUniqueInputObjectSchema as BlogWhereUniqueInputObjectSchema } from './BlogWhereUniqueInput.schema';
import { BlogUpdateWithoutUserInputObjectSchema as BlogUpdateWithoutUserInputObjectSchema } from './BlogUpdateWithoutUserInput.schema';
import { BlogUncheckedUpdateWithoutUserInputObjectSchema as BlogUncheckedUpdateWithoutUserInputObjectSchema } from './BlogUncheckedUpdateWithoutUserInput.schema';
import { BlogCreateWithoutUserInputObjectSchema as BlogCreateWithoutUserInputObjectSchema } from './BlogCreateWithoutUserInput.schema';
import { BlogUncheckedCreateWithoutUserInputObjectSchema as BlogUncheckedCreateWithoutUserInputObjectSchema } from './BlogUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BlogUpdateWithoutUserInputObjectSchema), z.lazy(() => BlogUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => BlogCreateWithoutUserInputObjectSchema), z.lazy(() => BlogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const BlogUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.BlogUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogUpsertWithWhereUniqueWithoutUserInput>;
export const BlogUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
