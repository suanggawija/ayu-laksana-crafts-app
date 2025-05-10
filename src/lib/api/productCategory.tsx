import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/product-categories";

// Get Data ===========================================================
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

// Create Data ========================================================
export const createDataProductCaregory = async ({
  ...formData
}: {
  [key: string]: any;
}) => {
  try {
    const form = new FormData();

    for (const key in formData) {
      form.append(key, formData[key]);
    }
    const response = await axios.post(`${API_BASE_URL}`, form, {
      headers: {
        Authorization: `Bearer 7|kcFNjVhRi8GtHCHTJUFdz6Qm3JXc8tmLZJ839BFbf1168b67`,
        "Content-Type": "application/json",
      },
    });
    alert("Product category updated successfully!");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Show Data ==========================================================
export const showDataProductCaregory = async ({ id }: { id: any }) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer 7|kcFNjVhRi8GtHCHTJUFdz6Qm3JXc8tmLZJ839BFbf1168b67`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Update Data =======================================================
export const updateDataProductCaregory = async ({
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
    const response = await axios.put(`${API_BASE_URL}/${id}`, form, {
      headers: {
        Authorization: `Bearer 7|kcFNjVhRi8GtHCHTJUFdz6Qm3JXc8tmLZJ839BFbf1168b67`,
        "Content-Type": "application/json",
      },
    });
    alert("Product category updated successfully!");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Delete Data =======================================================
export const deleteDataProductCaregory = async ({ id }: { id: any }) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer 7|kcFNjVhRi8GtHCHTJUFdz6Qm3JXc8tmLZJ839BFbf1168b67`,
      },
    });
    alert("Product deleted successfully!");
    window.location.href = "/dashboard/product-category";
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
