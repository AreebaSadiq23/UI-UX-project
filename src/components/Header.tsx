import { FC } from "react";
import { Search, Heart, ShoppingCart } from "lucide-react";  // Import icons from lucide-react

const Header: FC = () => {
  return (
    <header className="bg-transparent border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-semibold text-black">Exclusive</div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li className="text-gray-800 hover:underline">
              <a href="/">Home</a>
            </li>
            <li className="text-gray-800 hover:underline">
              <a href="/contact">Contact</a>
            </li>
            <li className="text-gray-800 hover:underline">
              <a href="/about">About</a>
            </li>
            <li className="text-gray-800 hover:underline">
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </nav>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              className="w-64 px-4 py-2 border rounded-lg text-gray-800"
              placeholder="What are you looking for?"
            />
            {/* Search Icon moved to the right */}
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          {/* Increased size of Heart and Cart icons and made background transparent */}
          <Heart className="cursor-pointer text-2xl" />
          <ShoppingCart className="cursor-pointer text-2xl"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
