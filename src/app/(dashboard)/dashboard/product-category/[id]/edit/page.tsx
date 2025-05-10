"use client";
import { FormInput } from "@/components/ui/Input";
import {
  showDataProductCaregory,
  updateDataProductCaregory,
} from "@/lib/api/productCategory";
import { ProductCategory } from "@/types/interface/ProductCategories";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditProductCategory = () => {
  const id = useParams().id;
  const [formData, setFormData] = useState({
    name: "",
  });
  const [productCategory, setProductCategory] = useState<ProductCategory>();

  const fetchProductCayegory = async () => {
    try {
      const data = await showDataProductCaregory({ id });
      //   setProductCategory(data);
      setFormData({
        name: data.name,
      });
    } catch (error) {}
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateDataProductCaregory({ id, ...formData });
    } catch (error) {
      console.error(error);
      alert("Failed to update product.");
    }
  };

  useEffect(() => {
    fetchProductCayegory();
  }, [id]);
  return (
    <main>
      <section className="bg-white rounded-lg shadow-md p-4">
        <h1 className="text-3xl text-gray-900 font-semibold ">Edit Product</h1>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              id="name"
              name="name"
              title="Product Name"
              placeholder="Product Name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-5 text-white bg-orange-500 py-2 px-5 rounded-md cursor-pointer"
            >
              Update Product Category
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default EditProductCategory;
