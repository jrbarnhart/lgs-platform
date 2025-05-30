import { queryOptions } from "@tanstack/react-query";
import { fetchOfferById, fetchOffers } from "./offers";

export const offersKey = "offers";

export const offersQueryOptions = () =>
  queryOptions({
    queryKey: [offersKey],
    queryFn: () => fetchOffers(),
  });

export const offerByIdQueryOptions = (id: number | string) =>
  queryOptions({
    queryKey: [offersKey.concat(id.toString())],
    queryFn: () => fetchOfferById(id),
  });
