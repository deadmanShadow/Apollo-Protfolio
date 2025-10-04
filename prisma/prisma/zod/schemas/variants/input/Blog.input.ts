import * as z from 'zod';

// prettier-ignore
export const BlogInputSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    content: z.string(),
    view: z.number().int(),
    published: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.number().int(),
    user: z.unknown()
}).strict();

export type BlogInputType = z.infer<typeof BlogInputSchema>;
