import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const API_BASE_URL = "http://localhost:8000/api/products";

export const getDataProduct = async ({
  search = "",
  per_page = 10,
  page = 1,
}: {
  search?: string;
  per_page?: number;
  page?: number;
} = {}) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}?search=${encodeURIComponent(
        search
      )}&per_page=${per_page}&page=${page}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const createDataProduct = async ({
  ...formData
}: {
  [key: string]: any;
}) => {
  try {
    const form = new FormData();

    for (const key in formData) {
      form.append(key, formData[key]);
    }

    const response = await axios.post(
      `http://localhost:8000/api/products`,
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert("Product created successfully!");
    return response.data.data;
  } catch (error: any) {
    if (error.response) {
      const { status, data } = error.response;
      alert(`Error ${status}: ${data.message || "An error occurred"}`);
    } else {
      console.error("Error updating product:", error);
      alert("An unexpected error occurred.");
    }
  }
};

export const showDataProduct = async ({ id }: { id: any }) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/products/${id}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const updateDataProduct = async ({
  id,
  ...formData
}: {
  id: any;
  [key: string]: any;
}) => {
  try {
    const form = new FormData();

    for (const key in formData) {
      form.append(key, formData[key]);
    }

    const response = await axios.post(
      `http://localhost:8000/api/products/${id}?_method=PUT`,
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert("Product updated successfully!");
    return response.data.data;
  } catch (error: any) {
    if (error.response) {
      const { status, data } = error.response;
      alert(`Error ${status}: ${data.message || "An error occurred"}`);
    } else {
      console.error("Error updating product:", error);
      alert("An unexpected error occurred.");
    }
  }
};

export const deleteDataProduct = async ({ id }: { id: any }) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert("Product deleted successfully!");
    window.location.href = "/dashboard/product";
  } catch (error: any) {
    if (error.response) {
      const { status, data } = error.response;
      if (status === 403) {
        alert(
          `Error ${status}: ${
            data.message || "Unauthorized"
          }, Please login with admin role to delete`
        );
      } else {
        alert(`Error ${status}: ${data.message || "An error occurred"}`);
      }
    } else {
      console.error("Error deleting product:", error);
      alert("An unexpected error occurred.");
    }
  }
};

export const getMostOrderedDataProducts = async ({
  limit = 5,
}: {
  limit?: number;
} = {}) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/most-ordered?&limit=${limit}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
