import Image from "next/image";

export default function Featured() {
  return (
    <div className="w-full flex justify-center items-center pt-7 max-w-screen-2xl mx-auto">
      <div className="w-[80%]">
        <div className="w-full">
          <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">
            Featured
          </h3>
          <h1 className="text-gray-800 font-bold sm:text-xl md:text-3xl lg:text-3xl pt-4">
            New Arrival
          </h1>
        </div>
        <div className="flex sm:flex-col md:flex-row gap-x-8 gap-y-5 text-white pt-4">
          <div className="bg-gray-950 sm:w-full md:w-[60%] relative">
            <div className="absolute left-3 bottom-3 text-white">
              <h1 className="sm:text-lg font-bold md:text-2xl">
                PlayStation 5
              </h1>
              <p className="text-xs py-1">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="text-md font-sans underline underline-offset-8 hover:font-bold">
                Shop Now
              </button>
            </div>
            <Image
              src={"/playstation.png"}
              width={500}
              height={500}
              alt="PlayStation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="bg-gray-950 flex relative items-end h-full rounded-lg overflow-hidden">
              <div className="absolute left-2 bottom-3">
                <h1 className="sm:text-lg font-bold md:text-2xl">
                  Women&apos;s Collections
                </h1>
                <p className="text-xs py-1">
                  Featured women collections that give you another vibe.
                </p>
                <button className="text-md font-sans underline underline-offset-8 hover:font-bold">
                  Shop Now
                </button>
              </div>
              <div className="w-full">
                <Image
                  src={"/woman-wearing.png"}
                  width={500}
                  height={300}
                  alt="Women Collection"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-gray-950 relative flex justify-center items-center w-[50%] rounded-lg overflow-hidden">
                <div className="absolute left-2 bottom-3">
                  <h1 className="sm:text-sm font-bold md:text-xl">Speakers</h1>
                  <p className="text-xs sm:py-0 md:py-1">
                    Amazon wireless speakers.
                  </p>
                  <button className="sm:text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold">
                    Shop Now
                  </button>
                </div>
                <Image
                  src={"/speakers.png"}
                  width={200}
                  height={200}
                  alt="Speakers"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-gray-950 relative flex justify-center items-center w-[50%] rounded-lg overflow-hidden">
                <div className="absolute left-2 bottom-3">
                  <h1 className="sm:text-sm font-bold md:text-xl">Perfume</h1>
                  <p className="text-xs sm:py-0 md:py-1">
                    GUCCI INTENSE OUD EDP.
                  </p>
                  <button className="sm:text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold">
                    Shop Now
                  </button>
                </div>
                <Image
                  src={"/perfume.png"}
                  width={200}
                  height={200}
                  alt="Perfume"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
