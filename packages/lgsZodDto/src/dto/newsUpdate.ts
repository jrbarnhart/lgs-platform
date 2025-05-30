import { z } from "zod";
import { zId, zString128 } from "./sharedSchemas";

export const newsUpdateEntity = z.object({
  id: zId,
  title: zString128,
  content: z.string().trim().min(1, "Must not be empty"),
  published: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createNewsUpdateDto = newsUpdateEntity.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateNewsUpdateDto = newsUpdateEntity
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial({
    title: true,
    content: true,
  })
  .refine(
    (schema) => Object.keys(schema).length > 0,
    "At least one valid property required for update"
  );

export type NewsUpdateEntity = z.infer<typeof newsUpdateEntity>;
export type CreateNewsUpdateDto = z.infer<typeof createNewsUpdateDto>;
export type UpdateNewsUpdateDto = z.infer<typeof updateNewsUpdateDto>;
