"use client";
import { ButtonDanger, ButtonPrimary } from "@/components/ui/Button";
import {
  deleteDataProductCaregory,
  showDataProductCaregory,
} from "@/lib/api/productCategory";
import { ProductCategory } from "@/types/interface/ProductCategories";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductCategoryDetail = () => {
  const id = useParams().id;
  const [productCategory, setProductCategory] = useState<ProductCategory>();

  const fetchProductCayegory = async () => {
    try {
      const data = await showDataProductCaregory({ id });
      setProductCategory(data);
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
    fetchProductCayegory();
  }, [id]);

  return (
    <main>
      <section className="">
        <div className="bg-white w-full rounded-lg shadow-md p-4">
          <div>Product Category Name</div>
          <h1 className="mt-2 text-3xl text-gray-800 font-semibold">
            {productCategory?.name}
          </h1>

          <div className="flex justify-end gap-2">
            <ButtonPrimary href={`${id}/edit`} title="Edit" />
            <ButtonDanger
              href=""
              title="delete"
              onClick={() => deleteProduct({ id })}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductCategoryDetail;
