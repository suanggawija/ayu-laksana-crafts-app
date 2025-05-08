"use client";

import {
  GoPaperclip,
  GoHomeFill,
  GoContainer,
  GoFileDirectoryFill,
  GoFileSubmodule,
  GoPersonFill,
} from "react-icons/go";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Aside = () => {
  const currentRoute = usePathname();

  const Menus = () => [
    {
      icon: <GoHomeFill />,
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      icon: <GoContainer />,
      name: "Ordered",
      url: "/dashboard/ordered",
    },
    {
      icon: <GoFileDirectoryFill />,
      name: "Product",
      url: "/dashboard/product",
    },
    {
      icon: <GoFileSubmodule />,
      name: "Product Category",
      url: "/dashboard/product-category",
    },
    {
      icon: <GoPersonFill />,
      name: "User",
      url: "/dashboard/user",
    },
  ];

  return (
    <aside className="px-4 py-1">
      <div className="py-4 border-b-1 border-gray-200 text-center text-sm text-gray-700 font-semibold flex justify-center items-center gap-2">
        <div className="text-3xl">
          <GoPaperclip />
        </div>
        Ayu Laksana Craft
      </div>
      <ul className="flex flex-col gap-2 mt-4 w-[200px] text-gray-700">
        {Menus().map((menu, index) => {
          return (
            <li
              key={index}
              className={` ${
                menu.url == currentRoute
                  ? "bg-white shadow-md"
                  : "bg-transparent"
              } rounded-xl text-xs font-semibold `}
            >
              <Link href={menu.url} className="flex items-center p-2 gap-3">
                <div
                  className={`${
                    menu.url == currentRoute
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-900"
                  } w-[32px] h-[32px]  rounded-lg  text-sm flex justify-center items-center shadow-xs`}
                >
                  {menu.icon}
                </div>
                {menu.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Aside;
