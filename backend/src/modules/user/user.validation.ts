import z from "zod";

export const UserUpdateAPISchema = z.object({
  name: z.string().optional(),
  picture: z.string().optional(),
  phone: z.string().optional(),
  bio: z.string().optional(),
  skills: z.array(z.string()).optional(),
});
