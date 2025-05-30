import { z } from "zod";

export const zString64 = z
  .string()
  .trim()
  .min(0, "Must have at least one character")
  .max(64, "Must be 64 characters or less");

export const zString128 = z
  .string()
  .trim()
  .min(0, "Must have at least one character")
  .max(64, "Must be 128 characters or less");

export const zDayInt = z.number().int().min(0).max(6);

export const zId = z.number().int().positive();
