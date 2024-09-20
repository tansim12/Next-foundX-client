import axios from "axios";
import { envConfig } from "../config/envConfig";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    // baseURL: envConfig.backendUrl,
  });