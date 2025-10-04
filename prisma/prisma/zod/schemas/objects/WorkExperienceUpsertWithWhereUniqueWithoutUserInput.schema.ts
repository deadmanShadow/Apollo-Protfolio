import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkExperienceWhereUniqueInputObjectSchema as WorkExperienceWhereUniqueInputObjectSchema } from './WorkExperienceWhereUniqueInput.schema';
import { WorkExperienceUpdateWithoutUserInputObjectSchema as WorkExperienceUpdateWithoutUserInputObjectSchema } from './WorkExperienceUpdateWithoutUserInput.schema';
import { WorkExperienceUncheckedUpdateWithoutUserInputObjectSchema as WorkExperienceUncheckedUpdateWithoutUserInputObjectSchema } from './WorkExperienceUncheckedUpdateWithoutUserInput.schema';
import { WorkExperienceCreateWithoutUserInputObjectSchema as WorkExperienceCreateWithoutUserInputObjectSchema } from './WorkExperienceCreateWithoutUserInput.schema';
import { WorkExperienceUncheckedCreateWithoutUserInputObjectSchema as WorkExperienceUncheckedCreateWithoutUserInputObjectSchema } from './WorkExperienceUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkExperienceUpdateWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkExperienceCreateWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const WorkExperienceUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkExperienceUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceUpsertWithWhereUniqueWithoutUserInput>;
export const WorkExperienceUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
