import * as z from 'zod';
export const WorkExperienceCreateResultSchema = z.object({
  id: z.number().int(),
  company: z.string(),
  position: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
  userId: z.number().int(),
  user: z.unknown()
});