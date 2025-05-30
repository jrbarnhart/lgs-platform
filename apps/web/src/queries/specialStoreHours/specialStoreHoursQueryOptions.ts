import { queryOptions } from "@tanstack/react-query";
import {
  fetchSpecialStoreHourById,
  fetchSpecialStoreHours,
} from "./specialStoreHours";

export const specialStoreHoursKey = "special-store-hours";

export const specialStoreHoursQueryOptions = () =>
  queryOptions({
    queryKey: [specialStoreHoursKey],
    queryFn: () => fetchSpecialStoreHours(),
  });

export const specialStoreHourByIdQueryOptions = (id: number | string) =>
  queryOptions({
    queryKey: [specialStoreHoursKey.concat(id.toString())],
    queryFn: () => fetchSpecialStoreHourById(id),
  });
