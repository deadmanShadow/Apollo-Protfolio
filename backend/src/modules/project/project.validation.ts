import z from "zod";

export const ProjectCreateAPISchema = z.object({
  title: z.string(),
  thumbnail: z.string().optional(),
  projectLink: z.string(),
  liveSite: z.string().optional(),
  description: z.string(),
  features: z.string(),
});

export const ProjectUpdateAPISchema = z.object({
  title: z.string().optional(),
  thumbnail: z.string().optional(),
  projectLink: z.string().optional(),
  liveSite: z.string().optional(),
  description: z.string().optional(),
  features: z.string().optional(),
});
