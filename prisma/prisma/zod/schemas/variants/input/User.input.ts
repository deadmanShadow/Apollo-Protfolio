import * as z from 'zod';

// prettier-ignore
export const UserInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string(),
    picture: z.string().optional().nullable(),
    password: z.string(),
    phone: z.string().optional().nullable(),
    bio: z.string().optional().nullable(),
    skills: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
    blogs: z.array(z.unknown()),
    projects: z.array(z.unknown()),
    workExperiences: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
