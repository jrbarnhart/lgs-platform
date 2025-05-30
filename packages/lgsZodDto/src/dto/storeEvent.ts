import { z } from "zod";
import { zId, zString128 } from "./sharedSchemas";

export const storeEventEntitySchema = z.object({
  id: zId,
  title: zString128,
  description: z.string().trim().optional(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  published: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createStoreEventDtoSchema = storeEventEntitySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateStoreEventDtoSchema = storeEventEntitySchema
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial({
    title: true,
    startDate: true,
    endDate: true,
  })
  .refine(
    (schema) => Object.keys(schema).length > 0,
    "At least one valid property required for update"
  );

export type StoreEventEntity = z.infer<typeof storeEventEntitySchema>;
export type CreateStoreEventDto = z.infer<typeof createStoreEventDtoSchema>;
export type UpdateStoreEventDto = z.infer<typeof updateStoreEventDtoSchema>;
