"use client";
import {
  ButtonDanger,
  ButtonPrimary,
  ButtonWarning,
} from "@/components/ui/Button";
import {
  deleteDataProductCaregory,
  getDataProductCategory,
} from "@/lib/api/productCategory";
import { ProductCategory } from "@/types/interface/ProductCategories";
import React, { useEffect, useState } from "react";
import { GoEye, GoPencil, GoSearch, GoTrash } from "react-icons/go";

const Table = () => {
  const [productCategories, setProductCategories] = useState<ProductCategory[]>(
    []
  );

  const fetchProductCategories = async () => {
    try {
      const data = await getDataProductCategory();
      setProductCategories(data);
    } catch (error) {}
  };

  const deleteProduct = async ({ id }: { id: any }) => {
    try {
      const confirmed = confirm(
        "Are you sure you want to delete this product?"
      );
      if (!confirmed) return;

      await deleteDataProductCaregory({ id: Number(id) });
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  };

  useEffect(() => {
    fetchProductCategories();
  }, []);
  return (
    <section className="mt-1 bg-white rounded-lg shadow-sm">
      <div className="p-5">
        <div className=" flex w-full justify-between items-center">
          <h2 className="text-semibold text-lg text-gray-800 font-semibold">
            Product Categories
          </h2>
          <ButtonPrimary
            href="/dashboard/product-category/create"
            title="Create Product"
          />
        </div>
        <div
          className="flex gap-2 items-center px-2 py-2 mt-3 text-gray-700 rounded border border-gray-500 w-[250px] focus-within:ring-1 focus-within:ring-gray-500"
          tabIndex={-1}
        >
          <GoSearch />
          <input type="text" placeholder="search" className="outline-none" />
        </div>
        <div className="mt-3">
          <table className="table-auto w-full">
            <thead className="">
              <tr className="text-left border-b-2 border-gray-300 text-gray-500 text-sm uppercase">
                <th className="py-4">#</th>

                <th className="py-4">Name</th>

                <th className="py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {productCategories.map((category, index) => {
                return (
                  <tr
                    key={category.id}
                    className="border-b-1 border-gray-300 items-center"
                  >
                    <td>{index + 1}</td>

                    <td className="">{category.name}</td>

                    <td className="h-full">
                      <div className="flex gap-2 items-center h-full my-2">
                        <ButtonPrimary
                          href={`/dashboard/product-category/${category.id}`}
                          title={<GoEye />}
                          className="h-[40px] w-[40px] flex justify-center items-center"
                        />
                        <ButtonWarning
                          href={`/dashboard/product-category/${category.id}/edit`}
                          title={<GoPencil />}
                          className="h-[40px] w-[40px] flex justify-center items-center"
                        />
                        <ButtonDanger
                          href=""
                          title={<GoTrash />}
                          className="h-[40px] w-[40px] flex justify-center items-center"
                          onClick={() => deleteProduct({ id: category.id })}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
