import { z } from "zod";
import { zDayInt, zId, zString64 } from "./sharedSchemas";

export const storeHourDto = z.object({
  id: zId,
  dayOfWeek: zDayInt,
  openTime: zString64.optional(),
  closeTime: zString64.optional(),
  isClosed: z.boolean().optional(),
});

export const specialStoreHourDto = z.object({
  id: zId,
  date: z.date(),
  description: zString64.optional(),
  dayOfWeek: zDayInt,
  openTime: zString64.optional(),
  closeTime: zString64.optional(),
  isClosed: z.boolean().optional(),
});

export type StoreHourDto = z.infer<typeof storeHourDto>;
