import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BlogFindManySchema as BlogFindManySchema } from '../findManyBlog.schema';
import { ProjectFindManySchema as ProjectFindManySchema } from '../findManyProject.schema';
import { WorkExperienceFindManySchema as WorkExperienceFindManySchema } from '../findManyWorkExperience.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  picture: z.boolean().optional(),
  password: z.boolean().optional(),
  phone: z.boolean().optional(),
  bio: z.boolean().optional(),
  skills: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  blogs: z.union([z.boolean(), z.lazy(() => BlogFindManySchema)]).optional(),
  projects: z.union([z.boolean(), z.lazy(() => ProjectFindManySchema)]).optional(),
  workExperiences: z.union([z.boolean(), z.lazy(() => WorkExperienceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
