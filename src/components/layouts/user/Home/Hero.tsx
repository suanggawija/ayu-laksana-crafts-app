import { ButtonPrimary } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen relative">
      <Image
        src={"/image.jpeg"}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      {/* Overlay gradient from left (black) to right (transparent) */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="absolute top-0 left-0 h-full flex flex-col justify-center items-start z-20 px-12">
        <h1 className="text-white text-6xl font-bold mb-2 w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-white mt-2 w-1/2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          ratione eligendi nemo ea perspiciatis vitae omnis magnam ad quas quod!
        </p>
        <div className="mt-8">
          <ButtonPrimary title="Liaht Produk" href="/product" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="absolute bg-white w-3/4 h-[120px] bottom-[-60px] z-20 rounded-full flex justify-between items-center px-12">
          <div className="w-full text-center grid grid-cols-4">
            <div className="flex flex-col">
              <span className="text-5xl font-bold">500+</span>
              <span>Terjual</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold">100+</span>
              <span>Varian Produk</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold">200+</span>
              <span>Konsimen Aktif</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold">32</span>
              <span>Mitra</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
