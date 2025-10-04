import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BlogFindManySchema as BlogFindManySchema } from '../findManyBlog.schema';
import { ProjectFindManySchema as ProjectFindManySchema } from '../findManyProject.schema';
import { WorkExperienceFindManySchema as WorkExperienceFindManySchema } from '../findManyWorkExperience.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  blogs: z.union([z.boolean(), z.lazy(() => BlogFindManySchema)]).optional(),
  projects: z.union([z.boolean(), z.lazy(() => ProjectFindManySchema)]).optional(),
  workExperiences: z.union([z.boolean(), z.lazy(() => WorkExperienceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
