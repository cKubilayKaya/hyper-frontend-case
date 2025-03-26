import axios from "axios";

const API_URL = "https://api.hyperteknoloji.com.tr";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMb2dpblR5cGUiOiIxIiwiQ3VzdG9tZXJJRCI6IjU1NzI0IiwiRmlyc3ROYW1lIjoiRGVtbyIsIkxhc3ROYW1lIjoiSHlwZXIiLCJFbWFpbCI6ImRlbW9AaHlwZXIuY29tIiwiQ3VzdG9tZXJUeXBlSUQiOiIzMiIsIklzUmVzZWxsZXIiOiIwIiwiSXNBUEkiOiIxIiwiUmVmZXJhbmNlSUQiOiIiLCJSZWdpc3RlckRhdGUiOiIzLzI1LzIwMjUgMTowMDo0OCBQTSIsImV4cCI6MjA1NDAxNjI0MSwiaXNzIjoiaHR0cHM6Ly9oeXBlcnRla25vbG9qaS5jb20iLCJhdWQiOiJodHRwczovL2h5cGVydGVrbm9sb2ppLmNvbSJ9.0msslXtuCsv9S_9EDd9T9wzN4Q0CZiZuxIP0srYCygU";

console.log("API_URL", API_URL);
console.log("API_TOKEN", API_TOKEN);

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
