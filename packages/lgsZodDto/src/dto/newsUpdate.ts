import { z } from "zod";
import { zId, zString128 } from "./sharedSchemas";

export const newsUpdateEntitySchema = z.object({
  id: zId,
  title: zString128,
  content: z.string().trim().min(1, "Must not be empty"),
  published: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createNewsUpdateDtoSchema = newsUpdateEntitySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateNewsUpdateDtoSchema = newsUpdateEntitySchema
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial({
    title: true,
    content: true,
  })
  .refine(
    (schema) => Object.keys(schema).length > 0,
    "At least one valid property required for update"
  );

export type NewsUpdateEntity = z.infer<typeof newsUpdateEntitySchema>;
export type CreateNewsUpdateDto = z.infer<typeof createNewsUpdateDtoSchema>;
export type UpdateNewsUpdateDto = z.infer<typeof updateNewsUpdateDtoSchema>;
