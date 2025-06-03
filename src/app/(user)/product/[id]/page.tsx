"use client";
import { ButtonDanger, ButtonPrimary } from "@/components/ui/Button";
import { deleteDataProduct, showDataProduct } from "@/lib/api/products";
import { Product } from "@/types/interface/Produtcs";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { StoreDataToCart } from "@/lib/api/carts";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";

const ProductDetail = () => {
  const id = useParams().id;
  const [product, setProduct] = useState<Product>();
  const [counter, setCounter] = useState(1);

  const [loadingAddToCart, setLoadingAddToCart] = useState(false);

  const AddProductToCart = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    const token = Cookies.get("token");
    if (!token) {
      alert("Please login first!");
      return;
    }
    try {
      setLoadingAddToCart(true);
      await StoreDataToCart(token, id, counter);
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    } finally {
      setLoadingAddToCart(false);
    }
  };

  const fetchProduct = async () => {
    try {
      const data = await showDataProduct({ id });
      setProduct(data);
    } catch (error) {
    } finally {
    }
  };

  const handeIncrement = () => {
    if (!product) return;
    if (counter >= product.stock) return;
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (counter <= 0) return;
    setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <main className="px-8 pt-18">
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
              Description Product : {product?.description}
            </div>
            {/* Counter */}
            <div className="flex justofy-center items-center gap-6 mt-5 flex w-full justify-end">
              <button
                onClick={handleDecrement}
                className={`${
                  counter == 0
                    ? "bg-gray-600"
                    : "bg-orange-500 hover:bg-orange-600 "
                }  text-white px-4 py-2 rounded-lg shadow-md transition-colors`}
              >
                -
              </button>

              <span className="text-lg font-semibold">{counter}</span>
              <button
                onClick={handeIncrement}
                className={`${
                  counter == product?.stock
                    ? "bg-gray-600"
                    : "bg-orange-500 hover:bg-orange-600 "
                }  text-white px-4 py-2 rounded-lg shadow-md transition-colors`}
              >
                +
              </button>
            </div>
            {/* End Counter */}
          </div>
          <div className="flex-1 flex items-end justify-end gap-2"></div>
        </div>
      </section>
      <div className="fixed button bottom-12 mx-8 left-0 right-0 bg-white p-4 rounded-lg shadow-md flex flex-col items-end gap-2">
        <div className="flex w-full justify-end items-center">
          {/* Total Price */}
          <div className="text-2xl text-orange-500 font-bold">
            <span className="text-xl text-gray-600 me-3">Total</span>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(product?.price * counter)}
          </div>
          {/* End Total Price */}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={AddProductToCart}
          className={`w-[200px] h-10 flex justify-center items-center text-white text-lg rounded-full mt-4 ${
            loadingAddToCart ? "bg-gray-600" : "bg-orange-500"
          }`}
          type="button"
          disabled={loadingAddToCart}
        >
          {loadingAddToCart ? (
            <span className="animate-spin">
              <AiOutlineLoading3Quarters />
            </span>
          ) : (
            <span className="flex items-center gap-4">
              <HiOutlineShoppingCart /> Add To Cart
            </span>
          )}
        </button>
        {/* End Add to Cart Button */}
      </div>
    </main>
  );
};

export default ProductDetail;
