import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/orders";

export const getDataOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, {
      headers: {
        Authorization: `Bearer 7|kcFNjVhRi8GtHCHTJUFdz6Qm3JXc8tmLZJ839BFbf1168b67`,
      },
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
