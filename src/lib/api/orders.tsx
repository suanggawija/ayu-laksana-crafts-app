import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const API_BASE_URL = "http://localhost:8000/api/orders";

export const getDataOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const showDataOrder = async ({ id }: { id: any }) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {}
};
