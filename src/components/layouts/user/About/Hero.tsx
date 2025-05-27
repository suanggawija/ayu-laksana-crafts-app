"use client";
import Image from "next/image";
import React from "react";
import { GoArrowDown } from "react-icons/go";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="mx-12">
      <motion.div
        className="relative w-full h-screen"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          alt="Logo"
          src={"/images/Logo.svg"}
          fill
          objectFit="fill"
          className="scale-70"
        />
        <motion.div
          className="absolute bottom-2 w-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <GoArrowDown className="w-[50px] h-[50px] p-2 animate-bounce bg-gray-100 text-orange-500 rounded-full shadow-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
