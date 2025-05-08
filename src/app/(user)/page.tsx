"use client";
import { getDataProduct, showDataProduct } from "@/lib/api/products";
import { Product } from "@/types/interface/Produtcs";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const data = await getDataProduct();
      setProducts(data);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {/* {loading ? (
        <div>loading ....</div>
      ) : products && products.length > 0 ? (
        products.map((product: { name: string }, index: number) => {
          return <div key={index}>{product.name}</div>;
        })
      ) : (
        <div>No products available</div>
      )}

      <br /> */}
      isian
    </div>
  );
}
