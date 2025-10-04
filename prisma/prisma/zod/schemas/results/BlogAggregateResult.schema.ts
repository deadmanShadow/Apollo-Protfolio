import * as z from 'zod';
export const BlogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    content: z.number(),
    view: z.number(),
    published: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    userId: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    view: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    view: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    content: z.string().nullable(),
    view: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    content: z.string().nullable(),
    view: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.number().int().nullable()
  }).nullable().optional()});