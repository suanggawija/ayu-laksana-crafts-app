"use client";
import Link from "next/link";
import { GoPersonFill, GoBellFill } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-1 flex items-center justify-between">
      <Link href="/dashboard" className="font-bold text-gray-800 text-lg">
        Dashboard
      </Link>
      <ul className="flex gap-4 justify-center items-center text-gray-600">
        <li className="flex gap-1 justify-center items-center">
          <GoPersonFill />
          <span className="text-sm font-semibold  ">User Name</span>
        </li>
        <li>
          <GoBellFill />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
