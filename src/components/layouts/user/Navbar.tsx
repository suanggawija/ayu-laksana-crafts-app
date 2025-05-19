"use client";
import { ButtonPrimary } from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const currentRoute = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Menus = () => [
    { name: "home", url: "/" },
    { name: "product", url: "/product" },
    { name: "about us", url: "/about" },
    { name: "galery", url: "/galery" },
    { name: "blog", url: "/blog" },
    { name: "contact", url: "/contact" },
    { name: "help", url: "/help" },
  ];

  return (
    <nav
      className={`fixed w-full flex justify-between items-center px-12 py-4 z-40 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="">Logo</div>
        <ul className="flex gap-4 text-sm items-center">
          {Menus().map((menu, index) => (
            <li key={index}>
              <Link
                href={menu.url}
                className={`${
                  menu.url == currentRoute
                    ? "text-orange-500  font-semibold"
                    : scrolled
                    ? "text-gray-600"
                    : "text-gray-300"
                } capitalize hover:text-orange-500 transition ease-in duration-200`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <ul className="flex gap-2">
          {/* <li className="border border-1 border-gray-500 rounded-md">
            <input type="text" placeholder="cari product" className="" />
          </li> */}
          <li>
            <ButtonPrimary
              title="Login"
              href=""
              className="text-sm px-4 py-2"
            />
          </li>
          <li>
            <ButtonPrimary
              title="Register"
              href=""
              className="text-sm px-4 py-2"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
