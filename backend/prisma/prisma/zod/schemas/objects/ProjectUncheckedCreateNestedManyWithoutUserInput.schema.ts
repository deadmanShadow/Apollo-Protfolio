import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutUserInputObjectSchema as ProjectCreateWithoutUserInputObjectSchema } from './ProjectCreateWithoutUserInput.schema';
import { ProjectUncheckedCreateWithoutUserInputObjectSchema as ProjectUncheckedCreateWithoutUserInputObjectSchema } from './ProjectUncheckedCreateWithoutUserInput.schema';
import { ProjectCreateOrConnectWithoutUserInputObjectSchema as ProjectCreateOrConnectWithoutUserInputObjectSchema } from './ProjectCreateOrConnectWithoutUserInput.schema';
import { ProjectCreateManyUserInputEnvelopeObjectSchema as ProjectCreateManyUserInputEnvelopeObjectSchema } from './ProjectCreateManyUserInputEnvelope.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ProjectUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ProjectCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProjectUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateNestedManyWithoutUserInput>;
export const ProjectUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
