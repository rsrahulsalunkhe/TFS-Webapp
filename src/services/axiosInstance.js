// src/services/axiosInstance.js
import axios from "axios";

const API_BASE_URL = 'https://grainmarket.in/anaj-admin/Apiweb';

// const static_token = '22f323abf26f416b0b098e002d06942f3002e4373739b42e7cf3f4d53aa8d9be64790b1e6026f86234e9198e0ee01771468aaf3afef115faa8fe6b1e'
// const static_user_uid = '01JNENTT93D37B6D371CVQJZW2'
// const static_id = null;
const logout_token = '5K7Pt2YKz7IlGoCOzA1I55dutdAL'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('user_token');
    const user_uid = localStorage.getItem('user_uid');
    const user_id = localStorage.getItem('user_id');
    const language = localStorage.getItem('language') || 'hi';

    config.headers["Token"] = token;
    config.headers["User-Id"] = user_id;
    config.headers["User-Uid"] = user_uid;
    config.headers["language"] = language;

    const currentPath = window.location.pathname;
    config.headers["Logout-Token"] = currentPath === "/mobile-insertion" ? null : logout_token;

    // Set headers if values exist
    // if (token) {
    //   config.headers["Token"] = token;
    // }
    // if (user_id) {
    //   config.headers["User-Id"] = user_id;
    // }
    // if (user_uid) {
    //   config.headers["User-Uid"] = user_uid;
    // }

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
      // Clear all related data
      localStorage.removeItem('user_token');
      localStorage.removeItem('user_uid');
      localStorage.removeItem('user_id');
      localStorage.removeItem('language');
      window.location.href = "/mobile-insertion"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;