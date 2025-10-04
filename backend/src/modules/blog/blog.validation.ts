import z from "zod";

export const BlogCreateAPISchema = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
});

export const BlogUpdateAPISchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  published: z.boolean().optional(),
});
