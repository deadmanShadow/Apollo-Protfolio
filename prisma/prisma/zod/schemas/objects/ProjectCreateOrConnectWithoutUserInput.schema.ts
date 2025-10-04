import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutUserInputObjectSchema as ProjectCreateWithoutUserInputObjectSchema } from './ProjectCreateWithoutUserInput.schema';
import { ProjectUncheckedCreateWithoutUserInputObjectSchema as ProjectUncheckedCreateWithoutUserInputObjectSchema } from './ProjectUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutUserInput>;
export const ProjectCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
