import { Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-orange-500"></div>

          <h1 className="text-xl sm:text-2xl font-bold text-white">
            Stock<span className="text-orange-500">AI</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-gray-300">
          <li><a href="#" className="hover:text-orange-500">Home</a></li>
          <li><a href="#" className="hover:text-orange-500">Markets</a></li>
          <li><a href="#" className="hover:text-orange-500">Predictions</a></li>
          <li><a href="#" className="hover:text-orange-500">Portfolio</a></li>
          <li><a href="#" className="hover:text-orange-500">News</a></li>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">

          <button className="flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-gray-300 hover:border-orange-500 hover:text-orange-500">
            <Search size={18} />
            Search
          </button>

          <button className="rounded-full bg-orange-500 px-5 py-2 text-white hover:bg-orange-600">
            Login
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          <Menu size={26} />
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col p-4 space-y-4 text-gray-300">

            <li><a href="#">Home</a></li>
            <li><a href="#">Markets</a></li>
            <li><a href="#">Predictions</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">News</a></li>

            <button className="mt-2 rounded-full border border-gray-700 py-2 text-white">
              Search
            </button>

            <button className="rounded-full bg-orange-500 py-2 text-white">
              Login
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
}