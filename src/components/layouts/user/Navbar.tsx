"use client";
import { ButtonPrimary } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import {
  HiOutlineShoppingCart,
  HiArchive,
  HiMenuAlt3,
  HiX,
  HiOutlineUser,
} from "react-icons/hi";
import { user } from "@/lib/api/auth";

interface User {
  username: string;
  email: string;
}

const Navbar = () => {
  const currentRoute = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [thisUser, setThisUser] = useState<User>();
  const [token, setToken] = useState<string | undefined>(undefined); // Ubah jadi state

  // Ambil token hanya di client
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, []);

  const fetchUser = async () => {
    try {
      const data = await user();
      setThisUser(data);
    } catch (error) {}
  };

  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token]);

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

  const handleOpenUserMenu = () => {
    setIsUserOpen(!isUserOpen);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full flex justify-between items-center px-6 md:px-12 py-4 z-40 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={handleOpenMenu}
          className="md:hidden h-[40px] w-[40px] flex justify-center items-center text-gray-800 hover:bg-orange-500 hover:text-white rounded-md transition-all duration-200"
        >
          <HiMenuAlt3 />
        </button>
        <Link className="" href={"/"}>
          <Image
            src={"/images/Logo.svg"}
            alt="Logo"
            width={80}
            height={80}
            priority
          />
        </Link>
        <ul
          className={`${
            isMenuOpen ? "absolute z-50" : "hidden"
          } md:hidden  top-0 bottom-0 right-0 left-0 bg-white py-4 px-6 h-screen w-full flex flex-col gap-4 items-center`}
        >
          <div className="flex justify-start">
            <button
              onClick={handleOpenMenu}
              className="md:hidden h-[40px] w-[40px] flex justify-center items-center text-gray-800 hover:bg-orange-500 hover:text-white rounded-md transition-all duration-200"
            >
              <HiX />
            </button>
          </div>
          {Menus().map((menu, index) => (
            <li key={index}>
              <Link
                href={menu.url}
                className={`${
                  menu.url == currentRoute
                    ? "text-orange-500  font-semibold"
                    : scrolled
                    ? "text-gray-600"
                    : "text-gray-600"
                } capitalize hover:text-orange-500 transition ease-in duration-200`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={"hidden md:flex gap-4 text-sm items-center"}>
          {Menus().map((menu, index) => (
            <li key={index}>
              <Link
                href={menu.url}
                className={`${
                  menu.url == currentRoute
                    ? "text-orange-500  font-semibold"
                    : scrolled
                    ? "text-gray-600"
                    : "text-gray-600"
                } capitalize hover:text-orange-500 transition ease-in duration-200`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <ul className="flex gap-3">
          {token ? (
            <>
              <li>
                <Link
                  href="/cart"
                  className="h-[40px] w-[40px] flex justify-center items-center bg-white text-gray-800 hover:bg-orange-500 hover:text-white rounded-md transition-all duration-200 relative"
                >
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                  <HiOutlineShoppingCart />
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className="h-[40px] w-[40px] flex justify-center items-center bg-white text-gray-800 hover:bg-orange-500 hover:text-white rounded-md transition-all duration-200"
                >
                  <HiArchive />
                </Link>
              </li>
              <button
                onClick={handleOpenUserMenu}
                className={` ${
                  isUserOpen
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-800 "
                } h-[40px] w-[40px] flex justify-center items-center hover:bg-orange-500 hover:text-white rounded-md transition-all duration-200`}
              >
                {isUserOpen ? <HiX /> : <HiOutlineUser />}
              </button>
              <ul
                className={`${
                  isUserOpen ? "absolute" : "hidden"
                }  top-16 right-12 bg-white shadow-lg rounded-lg p-8`}
              >
                <li className="text-xl text-orange-500 font-semibold">
                  {thisUser?.username}
                </li>
                <br />
                <li>
                  <Link
                    href={"/biodata"}
                    className="text-gray-600 hover:text-orange-500 mb-2"
                  >
                    Biodata
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/dashboard"}
                    className="text-gray-600 hover:text-orange-500"
                  >
                    Dashboard
                  </Link>
                </li>
                <br />
                <li>
                  <button className="text-gray-600 hover:text-red-500 cursor-pointer">
                    Logout
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <>
              <li>
                <ButtonPrimary
                  title="Login"
                  href="/login"
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
            </>
          )}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
