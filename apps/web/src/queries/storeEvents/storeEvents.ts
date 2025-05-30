import type { StoreEventEntity } from "lgs-zod-dto";
import { axiosClient } from "../axiosClient";
import axios from "axios";

export async function fetchStoreEvents() {
  try {
    const storeEventQuery = await axiosClient.get<StoreEventEntity[]>(
      "/store-events"
    );

    return storeEventQuery.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error(
        "An unexpected error occurred in /store-events fetch function"
      );
    }
  }
}

export async function fetchStoreEventById(id: string | number) {
  try {
    const storeEventQuery = await axiosClient.get<StoreEventEntity>(
      `/store-events/${id.toString()}`
    );

    return storeEventQuery.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error(
        "An unexpected error occurred in /store-events/:id fetch function"
      );
    }
  }
}
