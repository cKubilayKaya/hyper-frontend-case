import axiosInstance from "@/lib/axiosInstance";

export default async function getProductsService() {
  try {
    const response = await axiosInstance.post("/products/list?page=1&pageSize=8");
    return response.data;
  } catch (error) {
    throw error;
  }
}
