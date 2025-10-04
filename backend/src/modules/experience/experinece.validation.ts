import z from "zod";

export const ExperienceCreateAPISchema = z.object({
  company: z.string(),
  position: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
});

export const ExperienceUpdateAPISchema = z.object({
  company: z.string().optional(),
  position: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});
