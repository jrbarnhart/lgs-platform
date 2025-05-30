import { queryOptions } from "@tanstack/react-query";
import { fetchStoreHourById, fetchStoreHours } from "./storeHours";

export const storeHoursKey = "store-hours";

export const storeHoursQueryOptions = () =>
  queryOptions({
    queryKey: [storeHoursKey],
    queryFn: () => fetchStoreHours(),
  });

export const storeHourByIdQueryOptions = (id: number | string) =>
  queryOptions({
    queryKey: [storeHoursKey.concat(id.toString())],
    queryFn: () => fetchStoreHourById(id),
  });
