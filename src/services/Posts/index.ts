"use server";

import { axiosInstance } from "@/src/lib/axiosInstance";

export const createPost = async (payload: any) => {
  try {
    const { data } = await axiosInstance.post("/items", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error: any) {
    console.log(error?.message);
  }
};
