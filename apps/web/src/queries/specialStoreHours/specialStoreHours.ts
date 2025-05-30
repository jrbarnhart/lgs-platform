import type { SpecialStoreHourEntity } from "lgs-zod-dto";
import { axiosClient } from "../axiosClient";
import axios from "axios";

export async function fetchSpecialStoreHours() {
  try {
    const specialStoreHourQuery = await axiosClient.get<
      SpecialStoreHourEntity[]
    >("/special-store-hours");

    return specialStoreHourQuery.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error(
        "An unexpected error occurred in /special-store-hours fetch function"
      );
    }
  }
}

export async function fetchSpecialStoreHourById(id: string | number) {
  try {
    const specialStoreHourQuery = await axiosClient.get<SpecialStoreHourEntity>(
      `/special-store-hours/${id.toString()}`
    );

    return specialStoreHourQuery.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error(
        "An unexpected error occurred in /special-store-hours/:id fetch function"
      );
    }
  }
}
