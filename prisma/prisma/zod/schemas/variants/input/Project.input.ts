import * as z from 'zod';

// prettier-ignore
export const ProjectInputSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    thumbnail: z.string().optional().nullable(),
    projectLink: z.string(),
    liveSite: z.string().optional().nullable(),
    description: z.string(),
    features: z.string(),
    userId: z.number().int(),
    user: z.unknown()
}).strict();

export type ProjectInputType = z.infer<typeof ProjectInputSchema>;
