"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaShippingFast, FaShieldAlt, FaStar } from "react-icons/fa";

const advantages = [
  {
    title: "Kualitas Premium",
    description:
      "Kami hanya menyediakan produk terbaik yang telah melalui seleksi ketat.",
    icon: <FaStar size={70} className="text-yellow-400" />,
  },
  {
    title: "Pengiriman Super Cepat",
    description:
      "Pesanan Anda akan kami kirim dalam waktu 24 jam ke seluruh Indonesia.",
    icon: <FaShippingFast size={70} className="text-blue-500" />,
  },
  {
    title: "Keamanan Terjamin",
    description:
      "Sistem kami dilengkapi enkripsi tingkat tinggi untuk menjaga data dan transaksi Anda.",
    icon: <FaShieldAlt size={70} className="text-green-500" />,
  },
];

const CompanyAdvantages = () => {
  return (
    <section className="mt-24 md:mt-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-2">
          Kenapa Pilih Kami?
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Kami hadir dengan komitmen untuk memberikan pengalaman belanja terbaik
          bagi Anda.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {advantages.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all"
          >
            <div className="mb-5">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyAdvantages;
