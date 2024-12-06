import { Heart, Eye, Star as LucideStar } from "lucide-react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

function FreshSales() {
  return (
    <main>
      <div className="w-full flex justify-center items-center mt-10 mb-1 max-w-screen-2xl mx-auto">
        <div className="w-[80%]">
          <div className="flex flex-col">
            <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">
              Our Product
            </h3>
            <div className="flex">
              <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">
                Explore Our Products
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {[
              {
                image: "/dog.png",
                title: "Breed Dry Dog Food",
                price: "$100",
                rating: 4,
                reviews: "(88)",
              },
              {
                image: "/camera.png",
                title: "CANON EOS DSLR Camera",
                price: "$360",
                rating: 4,
                reviews: "(95)",
              },
              {
                image: "/laptop.png",
                title: "ASUS FHD Gaming Laptop",
                price: "$700",
                rating: 5,
                reviews: "(325)",
              },
              {
                image: "/creame.png",
                title: "Curology Product Set",
                price: "$1500",
                rating: 4,
                reviews: "(3145)",
              },
              {
                image: "/car.png",
                title: "Kids Electric Car",
                price: "$960",
                rating: 5,
                reviews: "(65)",
              },
              {
                image: "/sho.png",
                title: "Jr. Zoom Soccer Cleats",
                price: "$1160",
                rating: 4,
                reviews: "(25)",
              },
              {
                image: "/game.png",
                title: "GP11 Shooter USB Gamepad",
                price: "$600",
                rating: 5,
                reviews: "(55)",
              },
              {
                image: "/jacket.png",
                title: "Quilted Satin Jacket",
                price: "$600",
                rating: 5,
                reviews: "(55)",
              },
            ].map((product, index) => (
              <div key={index}>
                <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-full h-[240px] flex justify-center items-center">
                  <Image
                    src={product.image}
                    width={150}
                    height={100}
                    alt={product.title}
                  />
                  <span className="bg-red-500 px-2 rounded-md text-white absolute top-0 left-0">
                  </span>
                  <span className="absolute top-1 right-1 text-red rounded-full">
                    <Heart className="text-xl" />
                  </span>
                  <span className="absolute top-10 right-1 text-black rounded-full">
                    <Eye className="text-xl" />
                  </span>
                  <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                </div>
                <h1 className="font-bold font-sans pt-2">{product.title}</h1>
                <span className="text-red-500 font-bold">{product.price}</span>
                <span className="text-gray-400 font-bold line-through ml-2">
                </span>
                <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                  <LucideStar className="text-yellow-300" size={20} />
                  <span className="text-gray-400">{product.reviews}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-[80%] flex justify-center border-b-2 border-neutral-100 pb-10">
          <button className="bg-red-500 hover:bg-red-600 py-2 px-5 text-white rounded-sm">
            View All Products
          </button>
        </div>
      </div>
    </main>
  );
}

export default FreshSales;
