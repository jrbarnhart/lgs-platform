import type { NewsUpdateEntity } from "lgs-zod-dto";
import { axiosClient } from "../axiosClient";
import axios from "axios";

export async function fetchNewsUpdates() {
  try {
    const newsUpdateQuery = await axiosClient.get<NewsUpdateEntity[]>(
      "/news-updates"
    );

    return newsUpdateQuery.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error(
        "An unexpected error occurred in /news-updates fetch function"
      );
    }
  }
}

export async function fetchNewsUpdateById(id: string | number) {
  try {
    const newsUpdateQuery = await axiosClient.get<NewsUpdateEntity>(
      `/news-updates/${id.toString()}`
    );

    return newsUpdateQuery.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error(
        "An unexpected error occurred in /news-updates/:id fetch function"
      );
    }
  }
}
