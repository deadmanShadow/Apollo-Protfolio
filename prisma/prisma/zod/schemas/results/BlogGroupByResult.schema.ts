import * as z from 'zod';
export const BlogGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
  view: z.number().int(),
  published: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int(),
  _count: z.object({
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
  }).nullable().optional()
}));