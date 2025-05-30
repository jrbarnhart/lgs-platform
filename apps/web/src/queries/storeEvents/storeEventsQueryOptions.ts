import { queryOptions } from "@tanstack/react-query";
import { fetchStoreEventById, fetchStoreEvents } from "./storeEvents";

export const storeEventsKey = "store-events";

export const storeEventsQueryOptions = () =>
  queryOptions({
    queryKey: [storeEventsKey],
    queryFn: () => fetchStoreEvents(),
  });

export const storeEventByIdQueryOptions = (id: number | string) =>
  queryOptions({
    queryKey: [storeEventsKey.concat(id.toString())],
    queryFn: () => fetchStoreEventById(id),
  });
