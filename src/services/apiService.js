// src/services/apiService.js
import axiosInstance from "./axiosInstance";

export const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    console.log('responser from backend side ', response);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", {
      message: error.message,
      status: error?.response?.status,
      data: error?.response?.data,
    });
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const putData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const deleteData = async (endpoint) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};