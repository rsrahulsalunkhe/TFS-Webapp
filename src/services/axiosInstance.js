// src/services/axiosInstance.js
import axios from "axios";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const token = import.meta.env.VITE_API_TOKEN;
// const user_uid = import.meta.env.VITE_API_USER_UID;
// const id = import.meta.env.VITE_API_USER_ID;

const API_BASE_URL = 'http://grainmarket.in/anaj-admin/Apiweb';
const token = '7733aeef73f32ab344531979deb827a1adeffca62a04e1a3d6e5242eb3fd2c2761ad75c84cb807e09cfe20bed88c3df77d88250e410f2ea2b67c68e9'
const user_uid = '01JNENTT93D37B6D371CVQJZW2'
const id = 49;

// VITE_API_BASE_URL=https://grainmarket.in/anaj-admin/Apiweb
// VITE_API_TOKEN=7733aeef73f32ab344531979deb827a1adeffca62a04e1a3d6e5242eb3fd2c2761ad75c84cb807e09cfe20bed88c3df77d88250e410f2ea2b67c68e9
// VITE_API_USER_UID=01JNENTT93D37B6D371CVQJZW2
// VITE_API_USER_ID=49

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