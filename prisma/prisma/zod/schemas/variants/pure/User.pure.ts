import * as z from 'zod';

// prettier-ignore
export const UserModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string(),
    picture: z.string().nullable(),
    password: z.string(),
    phone: z.string().nullable(),
    bio: z.string().nullable(),
    skills: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
    blogs: z.array(z.unknown()),
    projects: z.array(z.unknown()),
    workExperiences: z.array(z.unknown())
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
