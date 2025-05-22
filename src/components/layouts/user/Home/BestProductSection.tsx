"use client";
import { ProductCart, ProductCartLoading } from "@/components/ui/Cart";
import { getMostOrderedDataProducts } from "@/lib/api/products";
import { Product } from "@/types/interface/Produtcs";
import React, { useEffect, useState } from "react";

const BestProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);

  const fetchMostOrderedProducts = async () => {
    try {
      setLoading(true);
      setLimit(5);
      const data = await getMostOrderedDataProducts({ limit });
      console.log("Most Ordered Products:", data);
      setProducts(data);
      setLoading(false);
    } catch (err: any) {
      console.error("Error fetching most ordered products:", err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMostOrderedProducts();
  }, [limit]);
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
        {loading
          ? Array.from({ length: 5 }).map((_, idx) => (
              <ProductCartLoading key={idx} />
            ))
          : products.map((product: Product) => (
              <ProductCart
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image_url={product.image_url}
              />
            ))}
      </div>
    </section>
  );
};

export default BestProductSection;
