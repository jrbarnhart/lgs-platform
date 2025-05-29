import { z } from "zod";
import { zId, zString128 } from "./sharedSchemas";

export const newsUpdateDto = z.object({
  id: zId,
  title: zString128,
  content: z.string().trim().min(1, "Must not be empty"),
  published: z.boolean().optional(),
});

export type NewsUpdateDto = z.infer<typeof newsUpdateDto>;
