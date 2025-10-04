import * as z from 'zod';
export const WorkExperienceGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  company: z.string(),
  position: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  userId: z.number().int(),
  _count: z.object({
    id: z.number(),
    company: z.number(),
    position: z.number(),
    startDate: z.number(),
    endDate: z.number(),
    userId: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    company: z.string().nullable(),
    position: z.string().nullable(),
    startDate: z.date().nullable(),
    endDate: z.date().nullable(),
    userId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    company: z.string().nullable(),
    position: z.string().nullable(),
    startDate: z.date().nullable(),
    endDate: z.date().nullable(),
    userId: z.number().int().nullable()
  }).nullable().optional()
}));