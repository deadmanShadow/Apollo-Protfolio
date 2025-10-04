import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutUserInputObjectSchema as ProjectUpdateWithoutUserInputObjectSchema } from './ProjectUpdateWithoutUserInput.schema';
import { ProjectUncheckedUpdateWithoutUserInputObjectSchema as ProjectUncheckedUpdateWithoutUserInputObjectSchema } from './ProjectUncheckedUpdateWithoutUserInput.schema';
import { ProjectCreateWithoutUserInputObjectSchema as ProjectCreateWithoutUserInputObjectSchema } from './ProjectCreateWithoutUserInput.schema';
import { ProjectUncheckedCreateWithoutUserInputObjectSchema as ProjectUncheckedCreateWithoutUserInputObjectSchema } from './ProjectUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProjectUpdateWithoutUserInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ProjectUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutUserInput>;
export const ProjectUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
