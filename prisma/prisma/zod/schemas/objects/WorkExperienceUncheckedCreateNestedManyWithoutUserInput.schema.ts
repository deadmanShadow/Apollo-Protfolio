import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkExperienceCreateWithoutUserInputObjectSchema as WorkExperienceCreateWithoutUserInputObjectSchema } from './WorkExperienceCreateWithoutUserInput.schema';
import { WorkExperienceUncheckedCreateWithoutUserInputObjectSchema as WorkExperienceUncheckedCreateWithoutUserInputObjectSchema } from './WorkExperienceUncheckedCreateWithoutUserInput.schema';
import { WorkExperienceCreateOrConnectWithoutUserInputObjectSchema as WorkExperienceCreateOrConnectWithoutUserInputObjectSchema } from './WorkExperienceCreateOrConnectWithoutUserInput.schema';
import { WorkExperienceCreateManyUserInputEnvelopeObjectSchema as WorkExperienceCreateManyUserInputEnvelopeObjectSchema } from './WorkExperienceCreateManyUserInputEnvelope.schema';
import { WorkExperienceWhereUniqueInputObjectSchema as WorkExperienceWhereUniqueInputObjectSchema } from './WorkExperienceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkExperienceCreateWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceCreateWithoutUserInputObjectSchema).array(), z.lazy(() => WorkExperienceUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkExperienceCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkExperienceCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema), z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkExperienceUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkExperienceUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceUncheckedCreateNestedManyWithoutUserInput>;
export const WorkExperienceUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
