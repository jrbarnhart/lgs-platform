import { z } from "zod";

export const loginDtoSchema = z.object({
  username: z.string().trim().min(1, "Username is required"),
  password: z.string().trim().min(1, "Password is required"),
});

export type LoginDto = z.infer<typeof loginDtoSchema>;

export const JwtEntitySchema = z.object({
  access_token: z.string().jwt(),
});

export type JwtEntity = z.infer<typeof JwtEntitySchema>;
