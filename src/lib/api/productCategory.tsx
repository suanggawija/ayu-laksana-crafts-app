import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/product-categories";

export const getDataProductCategory = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, {
      headers: {
        Authorization: `Bearer 7|kcFNjVhRi8GtHCHTJUFdz6Qm3JXc8tmLZJ839BFbf1168b67`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
