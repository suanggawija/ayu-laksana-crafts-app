"use client";
import { ButtonPrimary } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen px-6 md:px-12 mt-24 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center items-start md:h-screen z-20">
          <motion.h1
            className="text-orange-500 text-3xl md:text-5xl text-center md:text-left font-bold mb-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Temukan Sentuhan Elegan untuk Setiap Sudut Rumah Anda
          </motion.h1>
          <motion.p
            className="text-gray-600 text-center md:text-left mt-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Percantik rumah Anda dengan pilihan furniture elegan dan menarik.
            Temukan berbagai produk yang sesuai dengan gaya dan kebutuhan Anda.
          </motion.p>
          <motion.div
            className="mt-8 flex w-full justify-center md:justify-start"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ButtonPrimary title="Lihat Produk" href="/product" />
          </motion.div>
        </div>
        <motion.div
          className="relative scale-95"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-full h-[300px] md:h-full"
            animate={{ y: [30, 20, 30] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Image
              src={"/images/bennerimage.png"}
              alt="benner"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
