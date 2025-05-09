"use client";
import { showDataOrder } from "@/lib/api/orders";
import { Order } from "@/types/interface/Orders";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrderDetail = () => {
  const id = useParams().id;
  const [order, setOrder] = useState<Order>();

  const fetchOrder = async () => {
    try {
      const data = await showDataOrder({ id });
      setOrder(data);
      // console.log(order?.order_detail);
    } catch (error) {}
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);
  return (
    <main>
      <section>
        <div className="bg-white w-full px-4 py-2 rounded rounded-lg">
          <h1>Order Detail</h1>
          <div className="">Number: {order?.order_number}</div>
          <div className="">Status: {order?.status}</div>
          <div className="">Shipped At: {order?.shipped_at}</div>
          <div className="">
            Delivered At:{" "}
            {order?.delivered_at == null ? "-" : order?.delivered_at}
          </div>
          <div className="">
            Completed At:{" "}
            {order?.completed_at == null ? "-" : order?.completed_at}
          </div>
          <div className="">
            Cencelled At:{" "}
            {order?.cancelled_at == null ? "-" : order?.cancelled_at}
          </div>
          <div className="">
            Notes: {order?.notes == null ? "-" : order?.notes}
          </div>
          <br />
          <div className="">Name: {order?.username}</div>
          <div className="">Address: {order?.shipping_address}</div>
          <div className="">City: {order?.shipping_city}</div>
          <div className="">State: {order?.shipping_state}</div>
          <div className="">Country: {order?.shipping_country}</div>
          <div className="">Postal Code: {order?.shipping_postal_code}</div>
          <br />
          OrderDetail {id}
          {order?.order_detail.map((detail) => {
            return (
              <div className="" key={detail.product_id}>
                <div className="">Product Name: {detail.product_name}</div>
                <div className="">
                  Price:{" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(detail.price)}
                </div>
                <div className="">Quantity: {detail.quantity}</div>
                <div className="">
                  Total:{" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(detail.subtotal)}
                </div>
              </div>
            );
          })}
          <br />
          <div className="">Payment Status: {order?.payment_status}</div>
          <div className="">Payment Method: {order?.payment_method}</div>
          <div className="">
            Total Amount:{" "}
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(order?.total_amount)}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderDetail;
