"use client";
import { ButtonPrimary, ButtonWarning } from "@/components/ui/Button";
import { getDataProduct } from "@/lib/api/products";
import { Product } from "@/types/interface/Produtcs";
import React, { useEffect, useState } from "react";
import { GoSearch, GoPencil, GoEye } from "react-icons/go";

const Table = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getDataProduct({
        per_page: perPage,
        page: page,
        search,
      });
      setProducts(data);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const nextPage = () => {
    if (products.length === perPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchProducts();
    }, 400);
    return () => clearTimeout(timeout);
  }, [page, perPage, search]);

  return (
    <section className="mt-1 bg-white rounded-lg shadow-sm">
      <div className="p-5">
        <div className=" flex w-full justify-between items-center">
          <h2 className="text-semibold text-lg text-gray-800 font-semibold">
            Products
          </h2>
          <ButtonPrimary
            href="/dashboard/product/create"
            title="Create Product"
          />
        </div>
        <div
          className="flex gap-2 items-center px-2 py-2 mt-3 text-gray-700 rounded border border-gray-500 w-[250px] focus-within:ring-1 focus-within:ring-gray-500"
          tabIndex={-1}
        >
          <GoSearch />
          <input
            type="text"
            className="outline-none"
            placeholder="Cari Produk"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <table className="table-auto w-full">
            <thead className="">
              <tr className="text-left border-b-2 border-gray-300 text-gray-500 text-sm uppercase">
                <th className="py-4">#</th>
                <th className="text-center py-4">Image</th>
                <th className="py-4">Name</th>
                <th className="py-4">Price</th>
                <th className="py-4">Status</th>
                <th className="py-4">Stock</th>
                <th className="py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr
                    key={product.id}
                    className="border-b-1 border-gray-300 items-center"
                  >
                    <td>{index + 1}</td>
                    <td className="text-center">
                      <img
                        src={product.image_url || "/image.jpeg"}
                        alt={product.name}
                        className="w-[80px] h-[80px] object-cover rounded inline-block my-3"
                      />
                    </td>
                    <td className=" font-bold text-lg">{product.name}</td>
                    <td className=" font-bold text-gray-600">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(product.price)}
                    </td>
                    <td
                      className={`${
                        product.status == "active"
                          ? "text-green-500"
                          : "text-red-500"
                      } font-bold `}
                    >
                      {product.status}
                    </td>
                    <td className=" font-bold text-gray-600">
                      {product.stock}
                    </td>
                    <td className="h-full">
                      <div className="flex gap-2 items-center h-full">
                        <ButtonPrimary
                          href={`/dashboard/product/${product.id}`}
                          title={<GoEye />}
                          className="h-[40px] w-[40px] flex justify-center items-center"
                        />
                        <ButtonWarning
                          href={`/dashboard/product/${product.id}/edit`}
                          title={<GoPencil />}
                          className="h-[40px] w-[40px] flex justify-center items-center"
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="">
          {/* <button onClick={() => nextPage()}>next</button> */}
          <button
            disabled={loading || page === 1}
            onClick={() => prevPage()}
            className={`${
              loading || page === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white px-4 py-2 rounded mr-2`}
          >
            {loading ? "Loading..." : "Prev"}
          </button>

          <span className="text-gray-600">
            Page {page} of {Math.ceil(products.length / perPage)}
          </span>
          <button
            disabled={loading || products.length < perPage}
            onClick={() => nextPage()}
            className={`${
              loading || products.length < perPage
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white px-4 py-2 rounded mr-2`}
          >
            {loading ? "Loading..." : "Next"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Table;
