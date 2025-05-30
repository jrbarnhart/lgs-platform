import { z } from "zod";
import { zId, zString128 } from "./sharedSchemas";

export const offerEntitySchema = z.object({
  id: zId,
  title: zString128,
  description: z.string().trim().optional(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createOfferDtoSchema = offerEntitySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateOfferDtoSchema = offerEntitySchema
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial({ title: true, startDate: true, isActive: true })
  .refine(
    (schema) => Object.keys(schema).length > 0,
    "At least one valid property required for update"
  );

export type OfferEntity = z.infer<typeof offerEntitySchema>;
export type CreateOfferDto = z.infer<typeof createOfferDtoSchema>;
export type UpdateOfferDto = z.infer<typeof updateOfferDtoSchema>;
