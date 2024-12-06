import Image from "next/image";
import Link from "next/link";

function Signup() {
  return (
    <div className="w-full flex sm:flex-col md:flex-col lg:flex-row justify-start items-start">
      {/* Left */}
      <div className="sm:w-full md:w-full lg:w-[600px] sm:h-full lg:h-[500px] sm:m-0 sm:mt-10 lg:m-11 cursor-pointer">
        <Image
          src={"/sign-up.jpg"}
          width={400}
          height={400}
          alt="Mobile"
          className="w-full"
        />
      </div>
      {/* Right */}
      <div className="sm:w-full lg:w-[600px] sm:h-full lg:h-[500px] my-11 flex flex-col justify-center items-center">
        <div className="w-[70%] h-[80%]">
          <div>
            <h1 className="sm:text-lg md:text-2xl lg:text-3xl">Create an account</h1>
            <p className="text-sm pt-2">Enter your details below</p>
          </div>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="py-2 px-3 mt-5 bg-transparent border-b-2 w-full"
            />
            <br />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="py-2 px-3 mt-5 bg-transparent border-b-2 w-full"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="py-2 px-3 mt-5 bg-transparent border-b-2 w-full"
            />
            <br />
            <input
              className="py-2 px-12 mt-5 bg-red-500 hover:bg-red-600 text-white rounded-sm w-full"
              type="button"
              value="Create Account"
            />
          </form>
          <div className="flex flex-col items-center mt-5">
            <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded-sm w-full hover:bg-gray-300">
              Continue with Google
            </button>
            <p className="text-sm text-gray-500 mt-3">
              Already have an account?{" "}
              <Link href="/login" className="text-red-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
