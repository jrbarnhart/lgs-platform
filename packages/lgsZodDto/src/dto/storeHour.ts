import { z } from "zod";
import { zDayInt, zId, zString64 } from "./sharedSchemas";

export const storeHourEntity = z.object({
  id: zId,
  dayOfWeek: zDayInt,
  openTime: zString64.optional(),
  closeTime: zString64.optional(),
  isClosed: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createStoreHourDto = storeHourEntity.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateStoreHourDto = storeHourEntity
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial({
    dayOfWeek: true,
  });

export type StoreHourEntity = z.infer<typeof storeHourEntity>;
export type CreateStoreHourDto = z.infer<typeof createStoreHourDto>;
export type UpdateStoreHourDto = z.infer<typeof updateStoreHourDto>;
