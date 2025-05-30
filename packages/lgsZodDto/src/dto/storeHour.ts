import { z } from "zod";
import { zDayInt, zId, zString64 } from "./sharedSchemas";

export const storeHourEntitySchema = z.object({
  id: zId,
  dayOfWeek: zDayInt,
  openTime: zString64.optional(),
  closeTime: zString64.optional(),
  isClosed: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createStoreHourDtoSchema = storeHourEntitySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateStoreHourDtoSchema = storeHourEntitySchema
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial({
    dayOfWeek: true,
  })
  .refine(
    (schema) => Object.keys(schema).length > 0,
    "At least one valid property required for update"
  );

export type StoreHourEntity = z.infer<typeof storeHourEntitySchema>;
export type CreateStoreHourDto = z.infer<typeof createStoreHourDtoSchema>;
export type UpdateStoreHourDto = z.infer<typeof updateStoreHourDtoSchema>;
