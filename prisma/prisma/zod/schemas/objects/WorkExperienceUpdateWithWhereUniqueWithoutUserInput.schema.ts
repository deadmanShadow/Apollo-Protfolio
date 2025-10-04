import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkExperienceWhereUniqueInputObjectSchema as WorkExperienceWhereUniqueInputObjectSchema } from './WorkExperienceWhereUniqueInput.schema';
import { WorkExperienceUpdateWithoutUserInputObjectSchema as WorkExperienceUpdateWithoutUserInputObjectSchema } from './WorkExperienceUpdateWithoutUserInput.schema';
import { WorkExperienceUncheckedUpdateWithoutUserInputObjectSchema as WorkExperienceUncheckedUpdateWithoutUserInputObjectSchema } from './WorkExperienceUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkExperienceUpdateWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const WorkExperienceUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkExperienceUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceUpdateWithWhereUniqueWithoutUserInput>;
export const WorkExperienceUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
