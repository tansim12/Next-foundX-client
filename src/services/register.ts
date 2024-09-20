import { FieldValues } from "react-hook-form";
import { axiosInstance } from "../lib/axiosInstance";

export const createRegister = async (payload: FieldValues) => {
  try {
    console.log(payload);
    
    const res = await axiosInstance.post("/auth/register", payload);
    const data = await res.data;
    console.log(data);
  } catch (error: any) {
    throw new Error(error);
  }
};
