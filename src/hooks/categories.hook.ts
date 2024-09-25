import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/Categories";

export const useGetAllCategories =  () => {
  return useQuery({
    queryKey: ["ALL_CATEGORY"],
    queryFn: async () => await getCategories(),
  });
};
