import { FaApple } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full flex justify-center items-center max-w-screen-2xl mx-auto px-4">
      <div className="sm:w-full lg:w-[80%] flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="hidden lg:block border-r-2 border-neutral-100 p-5">
          <ul>
            <li className="leading-loose hover:underline cursor-pointer">
              Woman&apos;s Fashion
            </li>
            <li className="leading-loose hover:underline cursor-pointer">
              Men&apos;s Fashion
            </li>
            <li className="leading-loose hover:underline cursor-pointer">
              Electronics
            </li>
            <li className="leading-loose hover:underline cursor-pointer">
              Home & Lifestyle
            </li>
            <li className="leading-loose hover:underline cursor-pointer">
              Medicine
            </li>
            <li className="leading-loose hover:underline cursor-pointer">
              Sports & Outdoor
            </li>
            <li className="leading-loose hover:underline cursor-pointer">
              Baby&apos;s & Toys
            </li>
            <li className="leading-loose hover:underline cursor-pointer">
              Groceries & Pets
            </li>
            <li className="leading-loose hover:underline cursor-pointer">
              Health & Beauty
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="sm:w-full lg:w-[770px] bg-black text-white flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between p-6">
          <div className="sm:w-full lg:w-[200px] pt-4 text-center lg:text-left">
            <div className="flex gap-x-2 items-center justify-center lg:justify-start">
              <FaApple className="text-white sm:text-2xl lg:text-4xl" />
              <span className="sm:text-[10px] lg:text-xs">
                iPhone 14 Series
              </span>
            </div>
            <h1 className="sm:text-lg lg:text-4xl font-bold my-5">
              Up to 10% off Voucher
            </h1>
            <Link
              href={"#products"}
              className="underline underline-offset-4 hover:font-bold"
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
              className="sm:w-[250px] lg:w-[350px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
