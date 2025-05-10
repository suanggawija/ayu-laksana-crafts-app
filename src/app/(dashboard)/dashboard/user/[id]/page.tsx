"use client";
import { ButtonDanger, ButtonPrimary } from "@/components/ui/Button";
import { deleteDataUser, showDataUser } from "@/lib/api/users";
import { User } from "@/types/interface/Users";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserDetail = () => {
  const id = useParams().id;
  const [user, setUser] = useState<User>();

  const fetchProduct = async () => {
    try {
      const data = await showDataUser({ id });
      setUser(data);
    } catch (error) {
    } finally {
    }
  };

  const deleteUser = async () => {
    try {
      const confirmed = confirm(
        "Are you sure you want to delete this product?"
      );
      if (!confirmed) return;

      await deleteDataUser({ id: Number(id) });
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <main>
      <section className="grid grid-cols-3 gap-4">
        {/* image */}
        <div className="bg-white w-full rounded-lg shadow-md">
          <img
            src={user?.profile_picture || "/image.jpeg"}
            alt={user?.name}
            className="rounded-lg object-cover w-full"
          />
        </div>
        {/* Product */}
        <div className="col-span-2 bg-white w-full rounded-lg p-4 shadow-md flex flex-col">
          {/* Data */}
          <div className="">
            <div className="flex justify-between w-full border-b-2 border-gray-500 pb-2">
              <h1 className="text-3xl text-gray-900 font-semibold mt-2 uppercase">
                {user?.username}
              </h1>
              <div className="className font-semibold text-xs py-1 px-5 rounded-sm bg-gray-100 mt-2 flex justify-center items-center ">
                {user?.role}
              </div>
            </div>
            <div className="grid grid-cols-12 mt-3">
              <div className="col-span-2 flex flex-col gap-2 text-gray-600 text-sm ">
                <div>Full Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Address</div>
                <div>City</div>
                <div>State</div>
                <div>County</div>
                <div>Postal Code</div>
              </div>
              <div className="">
                <div className="">:</div>
                <div className="">:</div>
                <div className="">:</div>
                <div className="">:</div>
                <div className="">:</div>
                <div className="">:</div>
                <div className="">:</div>
                <div className="">:</div>
                <div className="">:</div>
              </div>
              <div className="col-span-9 flex flex-col gap-2 text-gray-800 text-sm font-semibold">
                <div>{user?.name}</div>
                <div>{user?.email}</div>
                <div>{user?.phone}</div>
                <div>{user?.address}</div>
                <div>{user?.city}</div>
                <div>{user?.state}</div>
                <div>{user?.country}</div>
                <div>{user?.postal_code}</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-end justify-end gap-2">
            <ButtonPrimary href={`${user?.id}/edit`} title="Edit" />
            <ButtonDanger href="" title="delete" onClick={deleteUser} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserDetail;
