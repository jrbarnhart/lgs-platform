import { queryOptions } from "@tanstack/react-query";
import { fetchNewsUpdateById, fetchNewsUpdates } from "./newsUpdates";

export const newsUpdatesKey = "news-updates";

export const newsUpdatesQueryOptions = () =>
  queryOptions({
    queryKey: [newsUpdatesKey],
    queryFn: () => fetchNewsUpdates(),
  });

export const newsUpdateByIdQueryOptions = (id: number | string) =>
  queryOptions({
    queryKey: [newsUpdatesKey.concat(id.toString())],
    queryFn: () => fetchNewsUpdateById(id),
  });
