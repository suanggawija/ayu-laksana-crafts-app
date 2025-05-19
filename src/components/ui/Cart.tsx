import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { ButtonPrimary } from "./Button";

export const ProductCart = () => {
  return (
    <div className="bg-white w-full p-3 rounded-lg flex flex-col justify-center item-center relative">
      <div className="w-full h-[250px] bg-black rounded-md relative overflow-hidden">
        <Image
          alt=""
          src={"/banner.png"}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* <button className="absolute  top-1 right-1 bg-white flex justify-center items-center w-8 h-8 text-center rounded-sm">
          <GoHeart />
        </button> */}
      </div>
      <div className="mt-2">
        <h5 className=" font-bold text-lg">Name Product</h5>
        <div className="text-orange-500 font-semibold mb-2 ">Price</div>
        <div className="w-full flex justify-end">
          <button className="w-10 h-10 flex justify-center items-center text-white text-lg  rounded-full bg-orange-500">
            <HiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};
