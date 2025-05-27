"use client";
import { getDataCarts } from "@/lib/api/carts";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { CartCard, CartCardLoading } from "@/components/ui/Cart";

interface CartItem {
  id: number;
  product_id: number;
  quantity: number;
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
  };
}
const Cart = () => {
  const token = Cookies.get("token");
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState<
    { product_id: number; quantity: number }[]
  >([]);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const data = await getDataCarts(token);
      // console.log(data);
      if (data) {
        setCartItems(data);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchCartItems();
    }
  }, []);

  const handleCheck = (
    product_id: number,
    quantity: number,
    checked: boolean
  ) => {
    setSelectedItems((prev) => {
      let updated;
      if (checked) {
        // Tambahkan jika dicentang
        updated = [...prev, { product_id, quantity }];
      } else {
        // Hapus jika tidak dicentang
        updated = prev.filter((item) => item.product_id !== product_id);
      }
      console.log("Selected Items:", updated);
      return updated;
    });
  };

  const totalPrice = selectedItems.reduce((sum, item) => {
    const cartItem = cartItems.find((ci) => ci.product_id === item.product_id);
    return sum + (cartItem ? cartItem.product.price * item.quantity : 0);
  }, 0);

  return (
    <main>
      <section className="px-12 w-full flex justify-center mt-18 relative">
        <div className="absolute border-b-4 border-gray-300 top-2 w-[350px] h-4 z-0"></div>
        <div className="flex gap-32">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[40px] h-[40px] rounded-full  flex justify-center items-center bg-orange-500 text-white font-semibold z-10">
              1
            </div>
            <span className="font-semibold text-gray-600">Cart</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[40px] h-[40px] rounded-full  flex justify-center items-center bg-white font-semibold text-gray-600 z-10">
              2
            </div>
            <span className="font-semibold text-gray-600">Order</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[40px] h-[40px] rounded-full  flex justify-center items-center bg-white font-semibold text-gray-600 z-10">
              3
            </div>
            <span className="font-semibold text-gray-600">Patment</span>
          </div>
        </div>
      </section>

      <section className="px-12">
        <h1 className="text-3xl text-orange-500 font-semibold">Cart</h1>
      </section>
      <section className="grid grid-cols-3 px-12 gap-4 mt-4">
        <div className="col-span-2 flex flex-col gap-4">
          <h5>Items</h5>
          {loading ? (
            <CartCardLoading />
          ) : cartItems.length === 0 ? (
            <div className="text-gray-500 text-center py-8">
              Keranjang belanja kosong.
            </div>
          ) : (
            cartItems.map((item) => (
              <CartCard
                key={item.id}
                id={item.id}
                product_id={item.product_id}
                quantity={item.quantity}
                product={item.product}
                token={token}
                onCartChange={fetchCartItems}
                checked={selectedItems.some(
                  (i) => i.product_id === item.product_id
                )}
                onCheckChange={(checked) =>
                  handleCheck(item.product_id, item.quantity, checked)
                }
              />
            ))
          )}
        </div>
        <div className="">
          <h5>Price Detail</h5>
          <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <div className="flex justify-between mt-2">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-bold">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(totalPrice)}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
