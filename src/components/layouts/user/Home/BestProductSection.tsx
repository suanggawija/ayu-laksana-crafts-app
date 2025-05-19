import { ProductCart } from "@/components/ui/Cart";
import React from "react";

const BestProductSection = () => {
  return (
    <section className="mt-42 w-full px-12">
      <div className="">
        <h2 className="text-xl font-semibold capitalize mb-1 text-gray-900">
          Best Product
        </h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </section>
  );
};

export default BestProductSection;
