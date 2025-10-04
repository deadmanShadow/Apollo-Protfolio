import * as z from 'zod';
export const UserAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    email: z.number(),
    picture: z.number(),
    password: z.number(),
    phone: z.number(),
    bio: z.number(),
    skills: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    blogs: z.number(),
    projects: z.number(),
    workExperiences: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    picture: z.string().nullable(),
    password: z.string().nullable(),
    phone: z.string().nullable(),
    bio: z.string().nullable(),
    skills: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    picture: z.string().nullable(),
    password: z.string().nullable(),
    phone: z.string().nullable(),
    bio: z.string().nullable(),
    skills: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});