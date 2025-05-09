"use client";
import { ButtonPrimary } from "@/components/ui/Button";
import { getDataOrders } from "@/lib/api/orders";
import { Orders } from "@/types/interface/Orders";
import React, { useEffect, useState } from "react";
import { GoEye, GoSearch } from "react-icons/go";

const Table = () => {
  const [orders, setOrders] = useState<Orders[]>([]);

  const fetchOrders = async () => {
    try {
      const data = await getDataOrders();
      setOrders(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <section className="mt-1 bg-white rounded-lg shadow-sm">
      <div className="p-5">
        <div className=" flex w-full justify-between items-center">
          <h2 className="text-semibold text-lg text-gray-800 font-semibold">
            Ordered
          </h2>
        </div>
        <div
          className="flex gap-2 items-center px-2 py-2 mt-3 text-gray-700 rounded border border-gray-500 w-[250px] focus-within:ring-1 focus-within:ring-gray-500"
          tabIndex={-1}
        >
          <GoSearch />
          <input type="text" placeholder="search" className="outline-none" />
        </div>
        <div className="mt-3">
          <table className="table-auto w-full">
            <thead className="">
              <tr className="text-left border-b-2 border-gray-300 text-gray-500 text-sm uppercase">
                <th className="py-4 px-2">#</th>
                <th className="py-4">Ordered Number</th>
                <th className="py-4">Order Status</th>
                <th className="py-4">Payment Status</th>
                <th className="py-4">Total Amount</th>
                <th className="py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr
                    key={order.id}
                    className="border-b-1 border-gray-300 items-center"
                  >
                    <td className="px-2">{index + 1}</td>
                    <td>{order.order_number}</td>
                    <td>{order.status}</td>
                    <td>{order.payment_status}</td>
                    <td>
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(order.total_amount)}
                    </td>
                    <td className="h-full">
                      <div className="flex gap-2 items-center h-full my-2">
                        <ButtonPrimary
                          href={`/dashboard/ordered/${order.id}`}
                          title={<GoEye />}
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
      </div>
    </section>
  );
};

export default Table;
