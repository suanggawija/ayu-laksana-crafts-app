import axios from "axios";
import setCookie from "../hooks/setCookie";
import Cookies from "js-cookie";

const API_BASE_URL = "http://localhost:8000/api";
const token = Cookies.get("token");

export const login = async (formData: { [key: string]: any }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Login successfully!");
    console.log(response.data);
    setCookie(response.data.token);
    return response.data;
  } catch (error) {
    alert("Login failed!");
    throw error;
  }
};

export const user = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
