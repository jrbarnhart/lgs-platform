import type { OfferEntity } from "lgs-zod-dto";
import { axiosClient } from "../axiosClient";
import axios from "axios";

export async function fetchOffers() {
  try {
    const offerQuery = await axiosClient.get<OfferEntity[]>("/offers");

    return offerQuery.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred in /offers fetch function");
    }
  }
}

export async function fetchOfferById(id: string | number) {
  try {
    const offerQuery = await axiosClient.get<OfferEntity>(
      `/offers/${id.toString()}`
    );

    return offerQuery.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error(
        "An unexpected error occurred in /offers/:id fetch function"
      );
    }
  }
}
