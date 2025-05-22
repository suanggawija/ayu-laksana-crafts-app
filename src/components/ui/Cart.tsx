import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { ButtonPrimary } from "./Button";
import Link from "next/link";

interface ProductCartProps {
  id: number;
  name: string;
  price: number;
  image_url: string;
}

export const ProductCart: React.FC<ProductCartProps> = ({
  id,
  name,
  price,
  image_url,
}) => {
  return (
    <Link
      href={`/product/${id}`}
      className="bg-white w-full p-3 rounded-lg flex flex-col justify-center item-center relative cursor-pointer hover:scale-101  transition-all duration-200 hover:z-10"
    >
      <div className="w-full h-[250px] rounded-md relative overflow-hidden">
        <Image
          alt={name}
          src={image_url || "/banner.png"}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* <button className="absolute  top-1 right-1 bg-white flex justify-center items-center w-8 h-8 text-center rounded-sm">
          <GoHeart />
        </button> */}
      </div>
      <div className="mt-2">
        <h5 className=" font-bold text-lg">{name}</h5>
        <div className="text-orange-500 font-semibold mb-2 ">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(price)}
        </div>
        <div className="w-full flex justify-end">
          <button className="w-10 h-10 flex justify-center items-center text-white text-lg  rounded-full bg-orange-500">
            <HiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </Link>
  );
};

// Loading skeleton for ProductCart
export const ProductCartLoading: React.FC = () => (
  <div className="bg-white w-full p-3 rounded-lg flex flex-col justify-center item-center relative animate-pulse">
    <div className="w-full h-[250px] rounded-md bg-gray-200 mb-2" />
    <div className="mt-2">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-5 bg-gray-200 rounded w-1/2 mb-4" />
      <div className="w-full flex justify-end">
        <div className="w-10 h-10 bg-gray-200 rounded-full" />
      </div>
    </div>
  </div>
);
