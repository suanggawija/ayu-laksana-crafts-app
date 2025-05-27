"use client";
import SidebarCategory from "@/components/layouts/user/Product/SidebarCategory";
import { ProductCart, ProductCartLoading } from "@/components/ui/Cart";
import { getDataProduct } from "@/lib/api/products";
import type { Product } from "@/types/interface/Produtcs";
import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
    }, 400);

    return () => clearTimeout(timeout);
  }, [fetchProducts]);

  return (
    <main>
      <section className="px-8 min-h-screen grid grid-cols-6 gap-8 pt-18">
        <div className="col-span-1">
          <SidebarCategory />
        </div>
        <div className="col-span-5">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl text-orange-500 font-semibold mb-4"
          >
            Produk
          </motion.h1>

          {/* Search Box with animation */}
          <motion.div
            className="sticky top-18 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <input
              type="text"
              className="bg-white px-4 py-2 mb-4 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Cari Produk"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {loading ? (
              Array.from({ length: 8 }).map((_, idx) => (
                <ProductCartLoading key={idx} />
              ))
            ) : products.length === 0 ? (
              <div className="col-span-4 flex flex-col items-center text-center mt-8">
                <p className="text-gray-500 text-lg mt-4">
                  Produk tidak ditemukan
                </p>
                <Image
                  src="/images/no-data.png"
                  alt="No Product"
                  width={300}
                  height={300}
                />
              </div>
            ) : (
              <AnimatePresence>
                {products.map((product: Product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProductCart
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image_url={product.image_url}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}

            {isLoadingMore &&
              Array.from({ length: 8 }).map((_, idx) => (
                <AnimatePresence key={`loading-${idx}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProductCartLoading />
                  </motion.div>
                </AnimatePresence>
              ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            className={
              products.length === 0 ? "hidden" : "flex justify-end w-full"
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              disabled={loading || products.length < perPage}
              onClick={() => LoadMoreProducts()}
              className={`${
                loading || products.length < perPage
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white px-4 py-2 rounded mr-2 mt-5 transition-all duration-300`}
            >
              {loading
                ? "Loading..."
                : products.length < perPage
                ? "No More Products"
                : "Load More"}
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Product;
