import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BlogScalarWhereInputObjectSchema as BlogScalarWhereInputObjectSchema } from './BlogScalarWhereInput.schema';
import { BlogUpdateManyMutationInputObjectSchema as BlogUpdateManyMutationInputObjectSchema } from './BlogUpdateManyMutationInput.schema';
import { BlogUncheckedUpdateManyWithoutUserInputObjectSchema as BlogUncheckedUpdateManyWithoutUserInputObjectSchema } from './BlogUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BlogUpdateManyMutationInputObjectSchema), z.lazy(() => BlogUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const BlogUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.BlogUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogUpdateManyWithWhereWithoutUserInput>;
export const BlogUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
