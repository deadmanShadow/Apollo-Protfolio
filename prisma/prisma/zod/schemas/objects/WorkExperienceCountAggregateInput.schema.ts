import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  company: z.literal(true).optional(),
  position: z.literal(true).optional(),
  startDate: z.literal(true).optional(),
  endDate: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WorkExperienceCountAggregateInputObjectSchema: z.ZodType<Prisma.WorkExperienceCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceCountAggregateInputType>;
export const WorkExperienceCountAggregateInputObjectZodSchema = makeSchema();
