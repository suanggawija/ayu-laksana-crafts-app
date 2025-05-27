"use client";
import { ProductCart, ProductCartLoading } from "@/components/ui/Cart";
import { getMostOrderedDataProducts } from "@/lib/api/products";
import { Product } from "@/types/interface/Produtcs";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    } catch (err: any) {
      console.error("Error fetching most ordered products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMostOrderedProducts();
  }, [limit]);

  return (
    <section className="mt-12 md:mt-24 w-full px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-2 text-center md:text-left">
          Produk Terlaris Kami
        </h2>
        <p className="text-gray-600 text-lg max-w-xl text-center md:text-left">
          Temukan produk pilihan yang paling diminati pelanggan karena kualitas
          dan keunggulannya.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
        {loading
          ? Array.from({ length: 5 }).map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ProductCartLoading />
              </motion.div>
            ))
          : products.map((product: Product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ProductCart
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image_url={product.image_url}
                />
              </motion.div>
            ))}
      </div>
    </section>
  );
};

export default BestProductSection;
