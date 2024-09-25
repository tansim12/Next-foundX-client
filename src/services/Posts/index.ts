"use server";

import { axiosInstance } from "@/src/lib/axiosInstance";
import { revalidateTag } from "next/cache";

export const createPost = async (payload: any) => {
  try {
    const { data } = await axiosInstance.post("/items", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    revalidateTag("post");
    return data;
  } catch (error: any) {
    console.log(error?.message);
  }
};
