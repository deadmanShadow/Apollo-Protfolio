import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkExperienceScalarWhereInputObjectSchema as WorkExperienceScalarWhereInputObjectSchema } from './WorkExperienceScalarWhereInput.schema';
import { WorkExperienceUpdateManyMutationInputObjectSchema as WorkExperienceUpdateManyMutationInputObjectSchema } from './WorkExperienceUpdateManyMutationInput.schema';
import { WorkExperienceUncheckedUpdateManyWithoutUserInputObjectSchema as WorkExperienceUncheckedUpdateManyWithoutUserInputObjectSchema } from './WorkExperienceUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkExperienceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkExperienceUpdateManyMutationInputObjectSchema), z.lazy(() => WorkExperienceUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const WorkExperienceUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkExperienceUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceUpdateManyWithWhereWithoutUserInput>;
export const WorkExperienceUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
