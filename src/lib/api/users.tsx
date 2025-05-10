import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/users";

// Get Data ==========================================================
export const getDataUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, {
      headers: {
        Authorization: `Bearer 7|kcFNjVhRi8GtHCHTJUFdz6Qm3JXc8tmLZJ839BFbf1168b67`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

// Create Data =======================================================
export const createDataUser = async ({
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
        "Content-Type": "multipart/form-data",
      },
    });
    alert("User created successfully!");
    window.location.href = "/dashboard/user";
  } catch (error: any) {
    if (error.response) {
      const { status, data } = error.response;
      alert(`Error ${status}: ${data.message || "An error occurred"}`);
    } else {
      console.error("Error updating user:", error);
      alert("An unexpected error occurred.");
    }
  }
};

// Show Data ==========================================================
export const showDataUser = async ({ id }: { id: any }) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer 7|kcFNjVhRi8GtHCHTJUFdz6Qm3JXc8tmLZJ839BFbf1168b67`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

// Update Data =======================================================
export const updateDataUser = async ({
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
      `${API_BASE_URL}/${id}?_method=PUT`,
      form,
      {
        headers: {
          Authorization: `Bearer 7|kcFNjVhRi8GtHCHTJUFdz6Qm3JXc8tmLZJ839BFbf1168b67`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert("User updated successfully!");
    window.location.href = "/dashboard/user";
  } catch (error: any) {
    if (error.response) {
      const { status, data } = error.response;
      alert(`Error ${status}: ${data.message || "An error occurred"}`);
    } else {
      console.error("Error updating user:", error);
      alert("An unexpected error occurred.");
    }
  }
};

// Delete Data =======================================================
export const deleteDataUser = async ({ id }: { id: any }) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`, {
      headers: {
        Authorization:
          "Bearer 7|kcFNjVhRi8GtHCHTJUFdz6Qm3JXc8tmLZJ839BFbf1168b67",
      },
    });
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
