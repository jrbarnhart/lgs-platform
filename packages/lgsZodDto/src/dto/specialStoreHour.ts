import { z } from "zod";
import { zDayInt, zId, zString64 } from "./sharedSchemas";

export const specialStoreHourEntity = z.object({
  id: zId,
  date: z.date(),
  description: zString64.optional(),
  dayOfWeek: zDayInt,
  openTime: zString64.optional(),
  closeTime: zString64.optional(),
  isClosed: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createSpecialStoreHourDto = specialStoreHourEntity.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateSpecialStoreHourDto = specialStoreHourEntity
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  })
  .partial({ date: true, dayOfWeek: true })
  .refine(
    (schema) => Object.keys(schema).length > 0,
    "At least one valid property required for update"
  );

export type SpecialStoreHourEntity = z.infer<typeof specialStoreHourEntity>;
export type CreateSpecialStoreHourDto = z.infer<
  typeof createSpecialStoreHourDto
>;
export type UpdateSpecialStoreHourDto = z.infer<
  typeof updateSpecialStoreHourDto
>;
