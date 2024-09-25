import { envConfig } from "../config/envConfig";

export const getResentPost = async () => {
  const res = await fetch(
    `${envConfig?.backendUrl}/items?sortBy=-createdAt&limit=5`,
    {
      next: {
        tags: ["post"],
      },
    }
  );
  const data = await res.json();
  return data;
};
