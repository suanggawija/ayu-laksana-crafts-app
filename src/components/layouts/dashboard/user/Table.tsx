"use client";

import { ButtonPrimary, ButtonWarning } from "@/components/ui/Button";
import { getDataUsers } from "@/lib/api/users";
import { Users } from "@/types/interface/Users";
import { useEffect, useState } from "react";
import { GoEye, GoPencil, GoSearch } from "react-icons/go";

const Table = () => {
  const [users, setUsers] = useState<Users[]>([]);

  const fetchUsers = async () => {
    try {
      const data = await getDataUsers();
      setUsers(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section className="mt-1 bg-white rounded-lg shadow-sm">
      <div className="p-5">
        <div className=" flex w-full justify-between items-center">
          <h2 className="text-semibold text-lg text-gray-800 font-semibold">
            Product Categories
          </h2>
          <ButtonPrimary
            href="/dashboard/product-category/create"
            title="Create Product"
          />
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
                <th className="py-4">#</th>

                <th className="py-4">Name</th>
                <th className="py-4">Username</th>
                <th className="py-4">Role</th>

                <th className="py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr
                    key={user.id}
                    className="border-b-1 border-gray-300 items-center"
                  >
                    <td>{index + 1}</td>

                    <td className="">{user.name}</td>
                    <td className="">{user.username}</td>
                    <td className="">{user.role}</td>

                    <td className="h-full">
                      <div className="flex gap-2 items-center h-full my-2">
                        <ButtonPrimary
                          href={`/dashboard/user/${user.id}`}
                          title={<GoEye />}
                          className="h-[40px] w-[40px] flex justify-center items-center"
                        />
                        <ButtonWarning
                          href={`/dashboard/user/${user.id}/edit`}
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
      </div>
    </section>
  );
};

export default Table;
