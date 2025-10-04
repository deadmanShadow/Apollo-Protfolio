import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BlogWhereUniqueInputObjectSchema as BlogWhereUniqueInputObjectSchema } from './BlogWhereUniqueInput.schema';
import { BlogCreateWithoutUserInputObjectSchema as BlogCreateWithoutUserInputObjectSchema } from './BlogCreateWithoutUserInput.schema';
import { BlogUncheckedCreateWithoutUserInputObjectSchema as BlogUncheckedCreateWithoutUserInputObjectSchema } from './BlogUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BlogCreateWithoutUserInputObjectSchema), z.lazy(() => BlogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const BlogCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.BlogCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogCreateOrConnectWithoutUserInput>;
export const BlogCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
