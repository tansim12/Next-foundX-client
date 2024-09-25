import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createPost } from "../services/Posts";

export const useCreatePost = () => {
  return useMutation({
    mutationKey: ["USER_CREATE_POST"],
    mutationFn: async (payload) => await createPost(payload as any),
    onSuccess: () => {
      toast.success("Post successfully");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Post failed");
    },
  });
};
