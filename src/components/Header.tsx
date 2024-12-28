import { FC } from "react";
import Link from "next/link"; // Import Link from next/link
import { Search, Heart, ShoppingCart } from "lucide-react";

const Header: FC = () => {
  return (
    <header className="bg-transparent border-b border-gray-300 max-w-screen-2xl mx-auto">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-4xl font-semibold text-black">Exclusive</div>

        <nav>
          <ul className="flex space-x-8">
            <li className="text-gray-800 hover:underline">
              <Link href="/">Home</Link> {/* Use Link */}
            </li>
            <li className="text-gray-800 hover:underline">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="text-gray-800 hover:underline">
              <Link href="/about">About</Link>
            </li>
            <li className="text-gray-800 hover:underline">
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              className="w-64 px-4 py-2 border rounded-lg text-gray-800"
              placeholder="What are you looking for?"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <Heart className="cursor-pointer text-2xl" />
          <ShoppingCart className="cursor-pointer text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
