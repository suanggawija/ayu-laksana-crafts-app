"use client";
import { FormInput } from "@/components/ui/Input";
import { showDataUser, updateDataUser } from "@/lib/api/users";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditUser = () => {
  const id = useParams().id;
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    profile_picture: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(
    formData.profile_picture
  );

  const fetchUser = async () => {
    try {
      const data = await showDataUser({ id });

      setFormData({
        name: data.name,
        username: data.username,
        email: data.email,
        role: data.role,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        country: data.country,
        postal_code: data.postal_code,
        profile_picture: data.profile_picture,
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
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateDataUser({ id, ...formData });
    } catch (error) {
      console.error(error);
      alert("Failed to update product.");
    }
  };

  useEffect(() => {
    fetchUser();
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
            <FormInput
              id="username"
              name="username"
              title="Username"
              placeholder="Username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <FormInput
              id="email"
              name="email"
              title="Email"
              placeholder="mail@exaple.com"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <div className="flex flex-col">
              <label
                htmlFor="role"
                className="text-sm font-semibold text-gray-600"
              >
                Role
                <span className="text-red-500">*</span>
              </label>

              <select
                className="text-sm p-2 mt-1 border border-gray-300 rounded"
                name="role"
                id="role"
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select a Role
                </option>
                <option key="admin" value="admin">
                  admin
                </option>
                <option key="user" value="user">
                  user
                </option>
              </select>
            </div>

            <FormInput
              id="phone"
              name="phone"
              title="Phone"
              placeholder="08999999999"
              type="text"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <FormInput
              id="address"
              name="address"
              title="Address"
              placeholder="Address"
              type="text"
              value={formData.address}
              onChange={handleInputChange}
              required={false}
            />

            <FormInput
              id="city"
              name="city"
              title="City"
              placeholder="City"
              type="text"
              value={formData.city}
              onChange={handleInputChange}
              required={false}
            />

            <FormInput
              id="state"
              name="state"
              title="State"
              placeholder="State"
              type="text"
              value={formData.state}
              onChange={handleInputChange}
              required={false}
            />

            <FormInput
              id="country"
              name="country"
              title="Country"
              placeholder="Country"
              type="text"
              value={formData.country}
              onChange={handleInputChange}
              required={false}
            />

            <FormInput
              id="postal_code"
              name="postal_code"
              title="Postal Code"
              placeholder="Postal Code"
              type="text"
              value={formData.postal_code}
              onChange={handleInputChange}
              required={false}
            />

            <div className="flex flex-col items-center">
              <label
                htmlFor="profile_picture"
                className="text-sm font-semibold text-gray-600 mb-2"
              >
                Product Image
              </label>
              <div className="w-[300px] h-[300px] border border-gray-300 rounded-lg overflow-hidden mb-2">
                <img
                  src={
                    previewImage || formData.profile_picture || "/image.jpeg"
                  }
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <input
                className="text-sm p-2 mt-1 border border-gray-300 rounded"
                type="file"
                id="profile_picture"
                name="profile_picture"
                accept="profile_picture/*"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-5 text-white bg-orange-500 py-2 px-5 rounded-md cursor-pointer"
            >
              Update User
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default EditUser;
