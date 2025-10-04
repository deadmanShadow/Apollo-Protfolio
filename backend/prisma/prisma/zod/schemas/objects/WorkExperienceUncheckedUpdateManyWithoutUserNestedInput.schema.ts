import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkExperienceCreateWithoutUserInputObjectSchema as WorkExperienceCreateWithoutUserInputObjectSchema } from './WorkExperienceCreateWithoutUserInput.schema';
import { WorkExperienceUncheckedCreateWithoutUserInputObjectSchema as WorkExperienceUncheckedCreateWithoutUserInputObjectSchema } from './WorkExperienceUncheckedCreateWithoutUserInput.schema';
import { WorkExperienceCreateOrConnectWithoutUserInputObjectSchema as WorkExperienceCreateOrConnectWithoutUserInputObjectSchema } from './WorkExperienceCreateOrConnectWithoutUserInput.schema';
import { WorkExperienceUpsertWithWhereUniqueWithoutUserInputObjectSchema as WorkExperienceUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './WorkExperienceUpsertWithWhereUniqueWithoutUserInput.schema';
import { WorkExperienceCreateManyUserInputEnvelopeObjectSchema as WorkExperienceCreateManyUserInputEnvelopeObjectSchema } from './WorkExperienceCreateManyUserInputEnvelope.schema';
import { WorkExperienceWhereUniqueInputObjectSchema as WorkExperienceWhereUniqueInputObjectSchema } from './WorkExperienceWhereUniqueInput.schema';
import { WorkExperienceUpdateWithWhereUniqueWithoutUserInputObjectSchema as WorkExperienceUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './WorkExperienceUpdateWithWhereUniqueWithoutUserInput.schema';
import { WorkExperienceUpdateManyWithWhereWithoutUserInputObjectSchema as WorkExperienceUpdateManyWithWhereWithoutUserInputObjectSchema } from './WorkExperienceUpdateManyWithWhereWithoutUserInput.schema';
import { WorkExperienceScalarWhereInputObjectSchema as WorkExperienceScalarWhereInputObjectSchema } from './WorkExperienceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkExperienceCreateWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceCreateWithoutUserInputObjectSchema).array(), z.lazy(() => WorkExperienceUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkExperienceCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkExperienceUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkExperienceCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema), z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema), z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema), z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema), z.lazy(() => WorkExperienceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkExperienceUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkExperienceUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkExperienceScalarWhereInputObjectSchema), z.lazy(() => WorkExperienceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkExperienceUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.WorkExperienceUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceUncheckedUpdateManyWithoutUserNestedInput>;
export const WorkExperienceUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
