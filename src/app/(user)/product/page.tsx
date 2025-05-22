"use client";
import SidebarCategory from "@/components/layouts/user/Product/SidebarCategory";
import { ProductCart, ProductCartLoading } from "@/components/ui/Cart";
import { getDataProduct } from "@/lib/api/products";
import type { Product } from "@/types/interface/Produtcs";
import React, { useCallback, useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [perPage, setPerPage] = useState(8);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      if (perPage === 8) {
        setLoading(true);
      } else {
        setIsLoadingMore(true);
      }
      const data = await getDataProduct({ per_page: perPage, search });
      setProducts(data);
    } catch (err: any) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  }, [perPage, search]);

  const LoadMoreProducts = () => {
    setIsLoadingMore(true);
    setPerPage((prevPerPage) => prevPerPage + 8);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchProducts();
    }, 400); // delay 400ms

    return () => clearTimeout(timeout);
  }, [fetchProducts]);

  return (
    <main>
      <section className="px-8 min-h-screen grid grid-cols-6 gap-8 pt-18">
        <div className="col-span-1">
          <SidebarCategory />
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {loading
              ? Array.from({ length: 8 }).map((_, idx) => (
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
            {/* Loading skeleton hanya saat load more */}
            {isLoadingMore &&
              Array.from({ length: 8 }).map((_, idx) => (
                <ProductCartLoading key={`loading-${idx}`} />
              ))}
          </div>
          <div className="flex justify-end w-full">
            <button
              disabled={loading || products.length < perPage}
              onClick={() => LoadMoreProducts()}
              className={`${
                loading || products.length < perPage
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white px-4 py-2 rounded mr-2 mt-5`}
            >
              {loading
                ? "Loading..."
                : products.length < perPage
                ? "No More Products"
                : "Load More"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
