import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/carts";

// Get Data ===========================================================
export const getDataCarts = async (token: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching carts:", error);
  }
};

export const StoreDataToCart = async (
  token: string,
  product_id: number,
  quantity: number | 1
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}`,
      {
        product_id: product_id,
        quantity: quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error storing cart data:", error);
  }
};

// Get Data ===========================================================
export const deleteDataCarts = async (token: string, product_id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${product_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return alert("Cart item deleted successfully!");
  } catch (error) {
    console.error("Error fetching carts:", error);
  }
};
