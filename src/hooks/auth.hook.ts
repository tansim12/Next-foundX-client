import { useMutation } from "@tanstack/react-query";
import { createRegister } from "../services/register";
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
