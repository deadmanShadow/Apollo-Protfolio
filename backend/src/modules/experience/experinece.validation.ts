import z from "zod";

export const ExperienceCreateAPISchema = z.object({
  company: z.string(),
  position: z.string(),
  startDate: z.preprocess((val) => {
    if (typeof val === "string" || typeof val === "number")
      return new Date(val);
    return val;
  }, z.date()),
  endDate: z.preprocess((val) => {
    if (val === undefined || val === null) return undefined;
    if (typeof val === "string" || typeof val === "number")
      return new Date(val);
    return val;
  }, z.date().optional()),
});

export const ExperienceUpdateAPISchema = z.object({
  company: z.string().optional(),
  position: z.string().optional(),

  startDate: z.preprocess((val) => {
    if (typeof val === "string" || typeof val === "number")
      return new Date(val);
    return val;
  }, z.date().optional()),
  endDate: z.preprocess((val) => {
    if (val === undefined || val === null) return undefined;
    if (typeof val === "string" || typeof val === "number")
      return new Date(val);
    return val;
  }, z.date().optional()),
});
