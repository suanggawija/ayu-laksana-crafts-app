import { ProductCart } from "@/components/ui/Cart";
import React from "react";

const Product = () => {
  return (
    <main>
      <section className="px-8 min-h-screen grid grid-cols-6 gap-8 pt-18">
        <div className="col-span-1">
          <div className="bg-white p-4 rounded-lg shadow-md sticky top-18">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Kategori
            </h2>
            <ul className="space-y-2">
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Kategori 1
              </li>
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Kategori 2
              </li>
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Kategori 3
              </li>
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Kategori 4
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-5">
          <h1 className="text-3xl text-orange-500 font-semibold mb-4">
            Produk{" "}
          </h1>
          <div className=" sticky top-18 z-20">
            <input
              type="text"
              className="bg-white px-4 py-2 mb-4 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Cari Produk"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
