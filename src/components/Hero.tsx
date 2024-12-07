import { FaApple } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="mx-auto max-w-screen-2xl w-full flex justify-center items-center">
      <div className="sm:w-full md:w-full lg:w-[80%] flex">
        {/* Left Sidebar Menu */}
        <div className="border-r-2 border-neutral-100 p-6 sm:hidden md:block">
          <ul className="space-y-4 text-gray-800">
            {/* Menu Item with Dropdown */}
            <li className="group relative font-medium cursor-pointer hover:text-black">
              Woman&apos;s Fashion <span>›</span>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg border mt-2 py-2 w-full rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100">Dresses</li>
                <li className="px-4 py-2 hover:bg-gray-100">Tops</li>
                <li className="px-4 py-2 hover:bg-gray-100">Accessories</li>
              </ul>
            </li>
            <li className="group relative font-medium cursor-pointer hover:text-black">
              Men&apos;s Fashion <span>›</span>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg border mt-2 py-2 w-full rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100">Shirts</li>
                <li className="px-4 py-2 hover:bg-gray-100">Pants</li>
                <li className="px-4 py-2 hover:bg-gray-100">Shoes</li>
              </ul>
            </li>
            <li className="font-medium cursor-pointer hover:text-black">Electronics</li>
            <li className="font-medium cursor-pointer hover:text-black">Home & Lifestyle</li>
            <li className="font-medium cursor-pointer hover:text-black">Medicine</li>
            <li className="font-medium cursor-pointer hover:text-black">Sports & Outdoor</li>
            <li className="font-medium cursor-pointer hover:text-black">Baby&apos;s & Toys</li>
            <li className="font-medium cursor-pointer hover:text-black">Groceries & Pets</li>
            <li className="font-medium cursor-pointer hover:text-black">Health & Beauty</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="sm:w-full lg:w-[770px] bg-black text-white flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between p-6 ml-7 mt-5">
          <div className="sm:w-full lg:w-[200px] pt-4 text-center lg:text-left">
            <div className="flex gap-x-2 items-center justify-center lg:justify-start">
              <FaApple className="text-white sm:text-2xl lg:text-4xl" />
              <span className="sm:text-[10px] lg:text-xs mt-7">
                iPhone 14 Series
              </span>
            </div>
            <h1 className="sm:text-lg lg:text-4xl font-bold my-5 mt-10">
              Up to 10% off Voucher
            </h1>
            <Link
              href={"#products"}
              className="underline underline-offset-4 hover:font-bold mt-5"
            >
              Shop Now -&gt;
            </Link>
          </div>

          <div className="w-full flex justify-center lg:w-auto">
            <Image
              src="/home.png"
              width={350}
              height={200}
              alt="hero image"
              className="sm:w-[250px] lg:w-[350px] mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;