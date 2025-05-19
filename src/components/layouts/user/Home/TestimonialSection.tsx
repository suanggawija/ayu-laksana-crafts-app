import React from "react";

const TestimonialSection = () => {
  return (
    <section>
      <div className="w-full px-12 mt-32">
        <h2 className="text-xl font-semibold capitalize mb-1 text-gray-900">
          Testimoni Pelanggan
        </h2>
        <p className="text-sm text-gray-600">
          Kami selalu berusaha memberikan yang terbaik untuk pelanggan kami.
        </p>
      </div>
      <div className="w-full px-12 mt-4 grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">Pelanggan 1</h3>
          <p className="text-gray-600 mt-2">
            "Layanan yang sangat memuaskan! Produk berkualitas tinggi."
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">Pelanggan 2</h3>
          <p className="text-gray-600 mt-2">
            "Pengalaman belanja yang luar biasa, akan kembali lagi!"
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">Pelanggan 3</h3>
          <p className="text-gray-600 mt-2">
            "Produk sesuai dengan deskripsi, sangat puas dengan pembelian saya."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
