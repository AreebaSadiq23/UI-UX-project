import {
  Smartphone,
  Laptop,
  Watch,
  Camera,
  Headphones,
  Gamepad,
} from "lucide-react";

function Category() {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1 max-w-screen-2xl mx-auto">
      <div className="sm:w-full md:w-[80%]  border-b-2 border-neutral-100 pb-10">
        <div className="flex flex-col sm:pl-[6%] md:pl-0">
          <h3 className="text-red-500 font-bold border-l-8  border-red-400 pl-3 ml-1">
            Categories
          </h3>
          <div className="flex ">
            <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">
              Browse By Category
            </h1>
          </div>
        </div>

        <div className="flex sm:flex-row gap-x-5 gap-y-10 md:flex-row lg:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap  lg:flex-nowrap">
          {/* box1 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <Smartphone size={48} />
            <p>Phones</p>
          </div>

          {/* box2 */}
          <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500  sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <Laptop size={48} />
            <p>Computers</p>
          </div>

          {/* box 3 */}
          <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500   sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <Watch size={48} />
            <p>SmartWatch</p>
          </div>

          {/* box4 */}
          <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500   sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <Camera size={48} />
            <p>Camera</p>
          </div>

          {/* box 5 */}
          <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500  sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <Headphones size={48} />
            <p>Headphones</p>
          </div>

          {/* box 6 */}
          <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500   sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <Gamepad size={48} />
            <p>Gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
