"use server"

import { cookies } from 'next/headers';
import { FieldValues } from "react-hook-form";
import { axiosInstance } from "../lib/axiosInstance";

export const createRegister = async (payload: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", payload);
    if (data?.success) {
      const cookieStore = cookies(); // Use cookies in server-side context
      cookieStore.set("accessToken", data?.data?.accessToken);
      cookieStore.set("refreshToken", data?.data?.refreshToken);
    }
    return data
  } catch (error: any) {
    throw new Error(error);
  }
};
