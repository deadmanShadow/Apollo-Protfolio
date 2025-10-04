import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutUserInputObjectSchema as ProjectUpdateWithoutUserInputObjectSchema } from './ProjectUpdateWithoutUserInput.schema';
import { ProjectUncheckedUpdateWithoutUserInputObjectSchema as ProjectUncheckedUpdateWithoutUserInputObjectSchema } from './ProjectUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProjectUpdateWithoutUserInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ProjectUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutUserInput>;
export const ProjectUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
