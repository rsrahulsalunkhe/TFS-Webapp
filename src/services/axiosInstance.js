// src/services/axiosInstance.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const token = import.meta.env.VITE_API_TOKEN;
const user_uid = import.meta.env.VITE_API_USER_UID;
const id = import.meta.env.VITE_API_USER_ID;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Token"] = token;
    config.headers["User-Id"] = id;
    config.headers["User-Uid"] = user_uid;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized: Redirecting to login...");
      localStorage.removeItem("authToken");
      window.location.href = "/login"; // Redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;