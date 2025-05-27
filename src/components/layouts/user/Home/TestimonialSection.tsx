"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Pelanggan 1",
    text: "Layanan yang sangat memuaskan! Produk berkualitas tinggi.",
  },
  {
    name: "Pelanggan 2",
    text: "Pengalaman belanja yang luar biasa, akan kembali lagi!",
  },
  {
    name: "Pelanggan 3",
    text: "Produk sesuai dengan deskripsi, sangat puas dengan pembelian saya.",
  },
  {
    name: "Pelanggan 4",
    text: "Respon cepat dan pengiriman tepat waktu. Luar biasa!",
  },
  {
    name: "Pelanggan 5",
    text: "Desain toko menarik, navigasi mudah, pengalaman menyenangkan.",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <div className="w-full px-6 md:px-12 mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-orange-600 mb-2">
            Testimoni Pelanggan
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Kami selalu berusaha memberikan yang terbaik untuk pelanggan kami.
          </p>
        </motion.div>
      </div>
      <div className="mt-6 h-40 overflow-hidden px-6 md:px-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {testimonials[index].name}
            </h3>
            <p className="text-gray-600 mt-2">"{testimonials[index].text}"</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialSection;
