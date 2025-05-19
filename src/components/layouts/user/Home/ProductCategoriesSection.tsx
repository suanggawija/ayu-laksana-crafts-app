import { ButtonPrimary } from "@/components/ui/Button";
import React from "react";

const ProductCategoriesSection = () => {
  return (
    <section className="mt-24 w-full px-12">
      <div className="">
        <h2 className="text-xl font-semibold capitalize mb-1 text-gray-900">
          Kategori Produk
        </h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex gap-4 mt-2">
        <div className="w-full h-[450px] bg-white flex gap-4 items-center rounded-lg p-4">
          <div className="w-[400px] h-[400px] bg-black rounded-lg"></div>
          <div className="w-1/2">
            <h3 className="text-orange-500 text-2xl font-semibold">
              Category 1
            </h3>
            <p className="text-gray-500 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              placeat molestias odio impedit consequuntur eveniet iure commodi
              rem omnis dolorem.
            </p>
            <ButtonPrimary title="show product" />
          </div>
        </div>
        <div className="grid grid-rows-4 gap-4">
          <button className="">
            <div className="w-[300px] h-[100px] rounded-md flex gap-4 items-center bg-white">
              <div className="w-[120px] h-[100px] bg-black rounded-s-md"></div>
              <h5 className="text-gray-900 text-lg">Kategori 1</h5>
            </div>
          </button>
          <button className="">
            <div className="w-[300px] h-[100px] rounded-md flex gap-4 items-center bg-white">
              <div className="w-[120px] h-[100px] bg-black rounded-s-md"></div>
              <h5 className="text-gray-900 text-lg">Kategori 1</h5>
            </div>
          </button>
          <button className="">
            <div className="w-[300px] h-[100px] rounded-md flex gap-4 items-center bg-white">
              <div className="w-[120px] h-[100px] bg-black rounded-s-md"></div>
              <h5 className="text-gray-900 text-lg">Kategori 1</h5>
            </div>
          </button>
          <button className="">
            <div className="w-[300px] h-[100px] rounded-md flex gap-4 items-center bg-white">
              <div className="w-[120px] h-[100px] bg-black rounded-s-md"></div>
              <h5 className="text-gray-900 text-lg">Kategori 1</h5>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
