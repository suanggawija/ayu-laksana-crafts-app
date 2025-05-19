import React from "react";

const CompanyAdvantages = () => {
  return (
    <section>
      <div className="w-full px-12 mt-32">
        <h2 className="text-xl font-semibold capitalize mb-1 text-gray-900">
          Keunggulan Perusahaan
        </h2>
        <p className="text-sm text-gray-600">
          Kami memiliki berbagai keunggulan yang membuat kami berbeda dari yang
          lain.
        </p>
      </div>
      <div className="w-full px-12 mt-4 grid grid-cols-3 gap-6">
        <div className="bg-white p-8 h-[450px] rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-[250px] h-[250px] bg-black "></div>
          <h3 className="text-lg font-semibold text-gray-900 mt-4">
            Keunggulan 1
          </h3>
          <p className="text-gray-600 mt-2">
            Deskripsi singkat tentang keunggulan pertama perusahaan.
          </p>
        </div>
        <div className="bg-white p-8 h-[450px] rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-[250px] h-[250px] bg-black "></div>
          <h3 className="text-lg font-semibold text-gray-900 mt-4">
            Keunggulan 1
          </h3>
          <p className="text-gray-600 mt-2">
            Deskripsi singkat tentang keunggulan pertama perusahaan.
          </p>
        </div>
        <div className="bg-white p-8 h-[450px] rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-[250px] h-[250px] bg-black "></div>
          <h3 className="text-lg font-semibold text-gray-900 mt-4">
            Keunggulan 1
          </h3>
          <p className="text-gray-600 mt-2">
            Deskripsi singkat tentang keunggulan pertama perusahaan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyAdvantages;
