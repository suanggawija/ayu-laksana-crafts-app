"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="mx-12 mt-32">
      <div className="grid grid-cols-2 ">
        <motion.div
          className="relative w-full h-[400px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/images/bennerimage.png"}
            alt="images"
            fill
            objectFit="contain"
            className=""
          />
        </motion.div>
        <motion.div
          className="w-full flex flex-col justify-center items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl text-orange-500 mb-2 font-semibold">
            Ayu Laksana Craft
          </h1>
          <p className="text-gray-600">
            Ayu Laksana Craft adalah sebuah usaha yang bergerak di bidang
            kerajinan tangan, khususnya dalam pembuatan produk-produk unik dan
            berkualitas tinggi. Kami berkomitmen untuk menghadirkan karya-karya
            yang tidak hanya indah, tetapi juga memiliki nilai seni yang tinggi.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
