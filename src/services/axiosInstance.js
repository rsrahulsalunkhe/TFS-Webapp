// src/services/axiosInstance.js
import axios from "axios";

const API_BASE_URL = "https://grainmarket.in/anaj-admin/Apiweb"; // Replace with your API
const token = "7733aeef73f32ab344531979deb827a1adeffca62a04e1a3d6e5242eb3fd2c2761ad75c84cb807e09cfe20bed88c3df77d88250e410f2ea2b67c68e9"
const user_uid = "01JNENTT93D37B6D371CVQJZW2"
const id = 49

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("authToken"); // Get token from storage
    // const lang = localStorage.getItem("lang") || "en"; // Default language

    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
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
