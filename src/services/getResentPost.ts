import { envConfig } from "../config/envConfig";
import { delay } from "../utils/delay";

export const getResentPost = async () => {
  const res = await fetch(
    `${envConfig?.backendUrl}/items?sortBy=-createdAt&limit=3`
  );
  const data = await res.json();
  return data;
};
