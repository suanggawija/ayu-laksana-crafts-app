"use client";
import React from "react";
import { motion } from "framer-motion";

const Galery = () => {
  return (
    <main>
      <section className="mt-18 px-12">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-orange-500 font-semibold mb-8"
        >
          Galery
        </motion.h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="w-full h-[300px] bg-gray-200">1</div>
          <div className="w-full h-[300px] bg-gray-200">2</div>
          <div className="w-full h-[300px] bg-gray-200">3</div>
          <div className="w-full h-[300px] bg-gray-200">4</div>
          <div className="w-full h-[300px] bg-gray-200">5</div>
          <div className="w-full h-[300px] bg-gray-200">6</div>
          <div className="w-full h-[300px] bg-gray-200">7</div>
        </div>
      </section>
    </main>
  );
};

export default Galery;
