"use client";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { ButtonPrimary } from "./Button";
import Link from "next/link";
import { deleteDataCarts, StoreDataToCart } from "@/lib/api/carts";
import Cookies from "js-cookie";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ProductCartProps {
  id: number;
  name: string;
  price: number;
  image_url: string;
}
export const ProductCart: React.FC<ProductCartProps> = ({
  id,
  name,
  price,
  image_url,
}) => {
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
      await StoreDataToCart(token, id, 1);
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    } finally {
      setLoadingAddToCart(false);
    }
  };

  return (
    <Link
      href={`/product/${id}`}
      className="bg-white w-full p-3 rounded-lg flex flex-col justify-center item-center relative cursor-pointer hover:scale-101  hover:z-10 hover:shadow-lg  transition-all duration-300"
    >
      <div className="w-full h-[250px] rounded-md relative overflow-hidden">
        <Image
          alt={name}
          src={image_url || "/banner.png"}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="mt-2">
        <h5 className=" font-bold text-lg">{name}</h5>
        <div className="text-orange-500 font-semibold mb-2 ">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(price)}
        </div>
        <div className="w-full flex justify-end">
          <button
            onClick={AddProductToCart}
            className={`w-10 h-10 flex justify-center items-center text-white text-lg rounded-full ${
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
              <HiOutlineShoppingCart />
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};

// Loading skeleton for ProductCart
export const ProductCartLoading: React.FC = () => (
  <div className="bg-white w-full p-3 rounded-lg flex flex-col justify-center item-center relative animate-pulse">
    <div className="w-full h-[250px] rounded-md bg-gray-200 mb-2" />
    <div className="mt-2">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-5 bg-gray-200 rounded w-1/2 mb-4" />
      <div className="w-full flex justify-end">
        <div className="w-10 h-10 bg-gray-200 rounded-full" />
      </div>
    </div>
  </div>
);

export const CartCard = (props: any) => {
  const [removeCartItemLoading, setRemoveCartItemLoading] = useState(false);
  const removeCartItem = async (productId: number) => {
    try {
      setRemoveCartItemLoading(true);
      await deleteDataCarts(props.token, productId);
      if (props.onCartChange) {
        props.onCartChange();
      }
    } catch (error) {
      console.error("Error removing cart item:", error);
    } finally {
      setRemoveCartItemLoading(false);
    }
  };
  return (
    <div
      key={props.id}
      className="bg-white p-4 rounded-lg shadow-md flex gap-4 w-full items-center"
    >
      <input
        type="checkbox"
        checked={props.checked}
        onChange={(e) => props.onCheckChange(e.target.checked)}
      />
      <div className="relative w-[150px] h-[120px] rounded-md overflow-hidden">
        <Image
          src={props.product.image_url || "/banner.png"}
          alt=""
          fill
          className="w-[150px] h-[120px] rounded-md object-cover"
          priority
        />
      </div>
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-2">{props.product.name}</h2>
        <p className="text-gray-600 mb-4">{props.product.description}</p>
        <div className="">Quantity: {props.quantity}</div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{props.product.price}</span>
          <button
            onClick={() => removeCartItem(props.id)}
            disabled={removeCartItemLoading}
            className={`${
              removeCartItemLoading
                ? "bg-gray-600"
                : "bg-orange-500 hover:bg-orange-600 "
            }  text-white px-4 py-2 rounded transition`}
          >
            {removeCartItemLoading ? "Removing..." : "Remove"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Loading skeleton for CartCard
export const CartCardLoading: React.FC = () => (
  <div className="bg-white p-4 rounded-lg shadow-md flex gap-4 w-full items-center animate-pulse">
    <div className="w-5 h-5 bg-gray-200 rounded" />
    <div className="w-[120px] h-[120px] bg-gray-200 rounded" />
    <div className="w-full">
      <div className="h-6 bg-gray-200 rounded w-2/3 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
      <div className="flex justify-between items-center">
        <div className="h-5 bg-gray-200 rounded w-1/4" />
        <div className="h-8 bg-gray-200 rounded w-20" />
      </div>
    </div>
  </div>
);
