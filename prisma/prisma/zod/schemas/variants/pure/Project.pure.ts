import * as z from 'zod';

// prettier-ignore
export const ProjectModelSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    thumbnail: z.string().nullable(),
    projectLink: z.string(),
    liveSite: z.string().nullable(),
    description: z.string(),
    features: z.string(),
    userId: z.number().int(),
    user: z.unknown()
}).strict();

export type ProjectPureType = z.infer<typeof ProjectModelSchema>;
