import { z } from "zod";
import { zId, zString128 } from "./sharedSchemas";

export const storeEventDto = z.object({
  id: zId,
  title: zString128,
  description: z.string().trim().optional(),
  startDate: z.date(),
  endDate: z.date(),
  published: z.boolean().optional(),
});

export type StoreEventDto = z.infer<typeof storeEventDto>;
