import { useMutation } from "@tanstack/react-query";
import { createLogin, createRegister } from "../services/auth.service";
import toast from "react-hot-toast";

export const useUserRegister = () => {
  return useMutation({
    mutationKey: ["USER_REGISTER"],
    mutationFn: async (payload) => await createRegister(payload as any),
    onSuccess: () => {
      toast.success("User registered successfully");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Registration failed");
    },
  });
};
export const useUserLogin = () => {
  return useMutation({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (payload) => await createLogin(payload as any),
    onSuccess: () => {
      toast.success("User Login successfully");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Registration failed");
    },
  });
};
