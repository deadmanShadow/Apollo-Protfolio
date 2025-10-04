import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectScalarWhereInputObjectSchema as ProjectScalarWhereInputObjectSchema } from './ProjectScalarWhereInput.schema';
import { ProjectUpdateManyMutationInputObjectSchema as ProjectUpdateManyMutationInputObjectSchema } from './ProjectUpdateManyMutationInput.schema';
import { ProjectUncheckedUpdateManyWithoutUserInputObjectSchema as ProjectUncheckedUpdateManyWithoutUserInputObjectSchema } from './ProjectUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProjectUpdateManyMutationInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ProjectUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateManyWithWhereWithoutUserInput>;
export const ProjectUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
