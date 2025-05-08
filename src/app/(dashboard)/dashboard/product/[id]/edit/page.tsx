"use client";
import { FormInput, FormInputTextArea } from "@/components/ui/Input";
import { showDataProduct, updateDataProduct } from "@/lib/api/products";
import { Product } from "@/types/interface/Produtcs";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditProduct = () => {
  const id = useParams().id;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category_id: "",
    category_name: "",
    image_url: "",
    status: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(
    formData.image_url
  );

  const fetchProduct = async () => {
    try {
      const data = await showDataProduct({ id });

      setFormData({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
        category_id: data.category_id,
        category_name: data.category_name,
        image_url: data.image_url,
        status: data.status,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewImage(fileUrl);
      setFormData((prev) => ({ ...prev, image_url: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateDataProduct({ id, ...formData });
    } catch (error) {
      console.error(error);
      alert("Failed to update product.");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
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
          <FormInput
            id="price"
            name="price"
            title="Price"
            placeholder="0"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
          <FormInput
            id="stock"
            name="stock"
            title="Stok"
            placeholder="0"
            type="number"
            value={formData.stock}
            onChange={handleInputChange}
            required
          />
          <FormInput
            id="category_id"
            name="category_id"
            title="Category ID"
            placeholder="0"
            type="text"
            value={formData.category_name}
            onChange={handleInputChange}
            required
          />
          <FormInput
            id="status"
            name="status"
            title="Status"
            placeholder="active"
            type="text"
            value={formData.status}
            onChange={handleInputChange}
            required
          />
          <FormInputTextArea
            id="description"
            name="description"
            title="Description"
            placeholder="Product description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />

          <div className="flex flex-col items-center">
            <label
              htmlFor="image"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              Product Image
            </label>
            <div className="w-32 h-32 border border-gray-300 rounded-lg overflow-hidden mb-2">
              <img
                src={previewImage || formData.image_url || "/image.jpeg"}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*" // Hanya menerima file gambar
              onChange={handleFileChange}
              className="text-sm"
            />
          </div>
        </div>
        <button type="submit">Update Product</button>
      </form>
    </section>
  );
};

export default EditProduct;
