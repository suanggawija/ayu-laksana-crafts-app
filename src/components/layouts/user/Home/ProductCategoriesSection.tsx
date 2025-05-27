"use client";
import { ButtonPrimary } from "@/components/ui/Button";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    title: "Kursi",
    description:
      "Kursi kayu berkualitas tinggi yang cocok untuk ruang tamu maupun ruang kerja.",
    image: "/images/kursi.png",
  },
  {
    title: "Meja",
    description:
      "Meja minimalis dengan desain elegan, cocok untuk berbagai kebutuhan.",
    image: "/images/meja.png",
  },
  {
    title: "Pintu",
    description:
      "Pintu dengan material terbaik, memberikan keamanan dan estetika.",
    image: "/images/pintu.png",
  },
  {
    title: "Sofa",
    description:
      "Sofa empuk dan nyaman, tersedia dalam berbagai warna dan ukuran.",
    image: "/images/sofa.png",
  },
];

const ProductCategoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [animationKey, setAnimationKey] = useState(0);

  const handleCategoryClick = (cat: any) => {
    setSelectedCategory(cat);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <section className="mt-24 md:mt-32 w-full px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-2 text-center md:text-left">
          Kategori Produk
        </h2>
        <p className="text-gray-600 text-lg max-w-xl text-center md:text-left">
          Pilih kategori produk yang ingin kamu lihat.
        </p>
      </motion.div>

      <motion.div
        // className="flex flex-col md:flex-row gap-4 mt-1 md:mt-2"
        className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mt-1 md:mt-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* LEFT SIDE - CATEGORY DETAIL */}
        <div className="col-span-2 w-full h-[320px] md:h-[450px] bg-white flex gap-4 items-center rounded-lg p-2 md:p-4 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={animationKey}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-4 items-center w-full absolute top-0 left-0 p-2 md:p-4"
            >
              <div className="w-[150px] md:w-[400px] h-[150px] md:h-[400px] rounded-lg relative">
                <Image
                  alt={selectedCategory.title}
                  src={selectedCategory.image}
                  fill
                  objectFit="cover"
                  className="scale-100 md:scale-80 rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-orange-500 text-2xl font-semibold">
                  {selectedCategory.title}
                </h3>
                <p className="text-gray-500 mb-5">
                  {selectedCategory.description}
                </p>
                <ButtonPrimary title="Show Product" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE - CATEGORY BUTTONS */}
        <motion.div
          className="grid  grid-cols-2 md:grid-cols-1 gap-4 mt-4 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryClick(cat)}
              className={`w-full h-[60px]  md:h-[100px] rounded-md flex gap-4 items-center bg-white transition-all duration-300 ease-in-out transform hover:shadow-lg hover:scale-102 ${
                selectedCategory.title === cat.title
                  ? "ring-2 ring-orange-500 bg-orange-100"
                  : ""
              }`}
            >
              <div className="w-[60px] md:w-[120px] h-[50px] md:h-[100px] rounded-s-md relative overflow-hidden">
                <Image
                  alt={cat.title}
                  src={cat.image}
                  fill
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out scale-90 hover:scale-95"
                />
              </div>
              <h5 className="text-gray-900 text-lg transition-colors duration-300 ">
                {cat.title}
              </h5>
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductCategoriesSection;
