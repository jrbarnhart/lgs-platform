import { z } from "zod";
import { zId, zString128 } from "./sharedSchemas";

export const storeEventEntity = z.object({
  id: zId,
  title: zString128,
  description: z.string().trim().optional(),
  startDate: z.date(),
  endDate: z.date(),
  published: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createStoreEventDto = storeEventEntity.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateStoreEventDto = storeEventEntity
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial({
    title: true,
    startDate: true,
    endDate: true,
  });

export type StoreEventDto = z.infer<typeof storeEventEntity>;
export type CreateStoreEventDto = z.infer<typeof createStoreEventDto>;
export type UpdateStoreEventDto = z.infer<typeof updateStoreEventDto>;
