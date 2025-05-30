import type { StoreHourEntity } from "lgs-zod-dto";
import { axiosClient } from "../axiosClient";
import axios from "axios";

export async function fetchStoreHours() {
  try {
    const storeHourQuery = await axiosClient.get<StoreHourEntity[]>(
      "/store-hours"
    );

    return storeHourQuery.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error(
        "An unexpected error occurred in /store-hours fetch function"
      );
    }
  }
}

export async function fetchStoreHourById(id: string | number) {
  try {
    const storeHourQuery = await axiosClient.get<StoreHourEntity>(
      `/monsters/${id.toString()}`
    );

    return storeHourQuery.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error(
        "An unexpected error occurred in /store-hours/:id fetch function"
      );
    }
  }
}
