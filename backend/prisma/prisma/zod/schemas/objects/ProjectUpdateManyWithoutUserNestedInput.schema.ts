import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutUserInputObjectSchema as ProjectCreateWithoutUserInputObjectSchema } from './ProjectCreateWithoutUserInput.schema';
import { ProjectUncheckedCreateWithoutUserInputObjectSchema as ProjectUncheckedCreateWithoutUserInputObjectSchema } from './ProjectUncheckedCreateWithoutUserInput.schema';
import { ProjectCreateOrConnectWithoutUserInputObjectSchema as ProjectCreateOrConnectWithoutUserInputObjectSchema } from './ProjectCreateOrConnectWithoutUserInput.schema';
import { ProjectUpsertWithWhereUniqueWithoutUserInputObjectSchema as ProjectUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ProjectUpsertWithWhereUniqueWithoutUserInput.schema';
import { ProjectCreateManyUserInputEnvelopeObjectSchema as ProjectCreateManyUserInputEnvelopeObjectSchema } from './ProjectCreateManyUserInputEnvelope.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithWhereUniqueWithoutUserInputObjectSchema as ProjectUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ProjectUpdateWithWhereUniqueWithoutUserInput.schema';
import { ProjectUpdateManyWithWhereWithoutUserInputObjectSchema as ProjectUpdateManyWithWhereWithoutUserInputObjectSchema } from './ProjectUpdateManyWithWhereWithoutUserInput.schema';
import { ProjectScalarWhereInputObjectSchema as ProjectScalarWhereInputObjectSchema } from './ProjectScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ProjectUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ProjectCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProjectUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ProjectUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProjectUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ProjectUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProjectUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ProjectUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProjectScalarWhereInputObjectSchema), z.lazy(() => ProjectScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProjectUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateManyWithoutUserNestedInput>;
export const ProjectUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
