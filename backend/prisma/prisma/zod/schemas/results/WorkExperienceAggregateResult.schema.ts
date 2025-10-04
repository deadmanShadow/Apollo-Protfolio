import * as z from 'zod';
export const WorkExperienceAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});