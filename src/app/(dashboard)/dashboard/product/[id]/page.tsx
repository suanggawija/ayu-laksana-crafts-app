"use client";
import { deleteDataProduct, showDataProduct } from "@/lib/api/products";
import { Product } from "@/types/interface/Produtcs";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetail = () => {
  const id = useParams().id;
  const [product, setProduct] = useState<Product>();

  const fetchProduct = async () => {
    try {
      const data = await showDataProduct({ id });
      setProduct(data);
    } catch (error) {
    } finally {
    }
  };

  const deleteProduct = async () => {
    try {
      const confirmed = confirm(
        "Are you sure you want to delete this product?"
      );
      if (!confirmed) return;

      await deleteDataProduct({ id: Number(id) });
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <main>
      <section className="grid grid-cols-3 gap-4">
        {/* image */}
        <div className="bg-white w-full rounded-lg shadow-md">
          <img
            src={product?.image_url}
            alt={product?.name}
            className="rounded-lg object-cover w-full"
          />
        </div>
        {/* Product */}
        <div className="col-span-2 bg-white w-full rounded-lg p-4 shadow-md flex flex-col">
          {/* Data */}
          <div className="">
            <div
              className={`${
                product?.status == "active" ? "text-green-500" : "text-red-500"
              } font-bold `}
            >
              {product?.status}
            </div>
            <h1 className="text-3xl text-gray-900 font-semibold mt-2">
              {product?.name}
            </h1>
            <div className="text-xl font-semibold mt-1">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(product?.price)}
            </div>

            <div className="className font-semibold text-xs py-1 px-2 rounded-sm bg-gray-100 inline-block mt-2">
              {product?.category_name}
            </div>
            <div className="my-2 border-b-1 border-gray-300"></div>
            <div className="text-sm mt-2 ">Stok : {product?.stock}</div>
            <div className="text-sm mt-1">
              Description Product : {product?.description}
            </div>
          </div>
          <div className="flex-1 flex items-end justify-end gap-2">
            <Link
              href={`${product?.id}/edit`}
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition ease-in duration-200"
            >
              Edit
            </Link>
            <button
              onClick={deleteProduct}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition ease-in duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
