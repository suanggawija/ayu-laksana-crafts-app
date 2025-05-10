"use client";
import { FormInput } from "@/components/ui/Input";
import { createDataProductCaregory } from "@/lib/api/productCategory";
import React, { useState } from "react";

const CreateProductCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createDataProductCaregory({ ...formData });
    } catch (error) {
      console.error(error);
      alert("Failed to update product.");
    }
  };

  return (
    <main>
      <section className="bg-white rounded-lg shadow-md p-4">
        <h1 className="text-3xl text-gray-900 font-semibold ">
          Create Product
        </h1>
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
              Create Product Category
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateProductCategory;
