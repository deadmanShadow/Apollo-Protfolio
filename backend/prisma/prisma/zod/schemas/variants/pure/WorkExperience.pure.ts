import * as z from 'zod';

// prettier-ignore
export const WorkExperienceModelSchema = z.object({
    id: z.number().int(),
    company: z.string(),
    position: z.string(),
    startDate: z.date(),
    endDate: z.date().nullable(),
    userId: z.number().int(),
    user: z.unknown()
}).strict();

export type WorkExperiencePureType = z.infer<typeof WorkExperienceModelSchema>;
