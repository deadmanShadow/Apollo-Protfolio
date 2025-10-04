import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkExperienceWhereUniqueInputObjectSchema as WorkExperienceWhereUniqueInputObjectSchema } from './WorkExperienceWhereUniqueInput.schema';
import { WorkExperienceCreateWithoutUserInputObjectSchema as WorkExperienceCreateWithoutUserInputObjectSchema } from './WorkExperienceCreateWithoutUserInput.schema';
import { WorkExperienceUncheckedCreateWithoutUserInputObjectSchema as WorkExperienceUncheckedCreateWithoutUserInputObjectSchema } from './WorkExperienceUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkExperienceCreateWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const WorkExperienceCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkExperienceCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceCreateOrConnectWithoutUserInput>;
export const WorkExperienceCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
