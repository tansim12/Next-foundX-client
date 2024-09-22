"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { axiosInstance } from "../lib/axiosInstance";
import { jwtDecode } from "jwt-decode";
export const createRegister = async (payload: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", payload);
    if (data?.success) {
      const cookieStore = cookies(); // Use cookies in server-side context
      cookieStore.set("accessToken", data?.data?.accessToken);
      cookieStore.set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const createLogin = async (payload: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", payload);
    if (data?.success) {
      const cookieStore = cookies(); // Use cookies in server-side context
      cookieStore.set("accessToken", data?.data?.accessToken);
      cookieStore.set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getCurrentUser = async (): Promise<any | null> => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      console.warn("No access token found.");
      return null;
    }

    const decodedToken = await jwtDecode(accessToken);
    return decodedToken;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

export const logoutFn = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};
