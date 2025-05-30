import { z } from "zod";
import { zDayInt, zId, zString64 } from "./sharedSchemas";

export const specialStoreHourEntitySchema = z.object({
  id: zId,
  date: z.coerce.date(),
  description: zString64.optional(),
  openTime: zString64.optional(),
  closeTime: zString64.optional(),
  isClosed: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createSpecialStoreHourDtoSchema =
  specialStoreHourEntitySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  });

export const updateSpecialStoreHourDtoSchema = specialStoreHourEntitySchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  })
  .partial({ date: true })
  .refine(
    (schema) => Object.keys(schema).length > 0,
    "At least one valid property required for update"
  );

export type SpecialStoreHourEntity = z.infer<
  typeof specialStoreHourEntitySchema
>;
export type CreateSpecialStoreHourDto = z.infer<
  typeof createSpecialStoreHourDtoSchema
>;
export type UpdateSpecialStoreHourDto = z.infer<
  typeof updateSpecialStoreHourDtoSchema
>;
