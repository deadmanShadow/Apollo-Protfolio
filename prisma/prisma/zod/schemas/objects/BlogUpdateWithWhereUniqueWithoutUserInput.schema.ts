import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BlogWhereUniqueInputObjectSchema as BlogWhereUniqueInputObjectSchema } from './BlogWhereUniqueInput.schema';
import { BlogUpdateWithoutUserInputObjectSchema as BlogUpdateWithoutUserInputObjectSchema } from './BlogUpdateWithoutUserInput.schema';
import { BlogUncheckedUpdateWithoutUserInputObjectSchema as BlogUncheckedUpdateWithoutUserInputObjectSchema } from './BlogUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BlogUpdateWithoutUserInputObjectSchema), z.lazy(() => BlogUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const BlogUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.BlogUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogUpdateWithWhereUniqueWithoutUserInput>;
export const BlogUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
