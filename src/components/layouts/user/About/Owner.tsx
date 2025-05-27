"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";

const Owner = () => {
  const Owners = [
    {
      name: "Ayu Laksana",
      description:
        "Seorang pengrajin yang memiliki passion dalam menciptakan karya seni yang unik dan berkualitas. Dengan pengalaman bertahun-tahun di bidang kerajinan tangan, Ayu Laksana telah berhasil menciptakan berbagai produk yang tidak hanya indah, tetapi juga fungsional.",
      image: "/images/bennerimage.png",
    },
    {
      name: "Ayu Laksana",
      description:
        "Seorang pengrajin yang memiliki passion dalam menciptakan karya seni yang unik dan berkualitas. Dengan pengalaman bertahun-tahun di bidang kerajinan tangan, Ayu Laksana telah berhasil menciptakan berbagai produk yang tidak hanya indah, tetapi juga fungsional.",
      image: "/images/bennerimage.png",
    },
    {
      name: "Ayu Laksana",
      description:
        "Seorang pengrajin yang memiliki passion dalam menciptakan karya seni yang unik dan berkualitas. Dengan pengalaman bertahun-tahun di bidang kerajinan tangan, Ayu Laksana telah berhasil menciptakan berbagai produk yang tidak hanya indah, tetapi juga fungsional.",
      image: "/images/bennerimage.png",
    },
  ];
  return (
    <section className="mx-12 mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-2 text-center">
          Pendiri Kami
        </h2>
        <p className="text-gray-500 text-lg max-w-xl text-center mx-auto">
          Ayu Laksana Craft tidak akan terbentuk tanpa adanya ide dari pendiri
          dari Ayu Laksana Craft.
        </p>
        <div className="grid grid-cols-3 gap-4 px-32">
          {Owners.map((owner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 mt-8"
            >
              <div className="relative w-full h-[250px] mt-8">
                <Image
                  src={owner.image}
                  alt="Logo"
                  fill
                  objectFit="contain"
                  className=""
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start mt-4 text-center">
                <h3 className="text-xl text-orange-500 mb-2 font-semibold w-full">
                  {owner.name}
                </h3>
                <p className="text-gray-600">{owner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Owner;
