import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_TOKEN;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    //normal senaryoda token localstorage veya cookie'den alınmalı ama giriş yapma senaryomuz olmadığı için .env dosyasından alıyoruz token'ı
    config.headers.Authorization = `Bearer ${API_TOKEN}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response Received:", {
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error("Detailed API Error:", {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers,
      message: error.message,
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;
