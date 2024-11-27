import React from "react";
import { Search, UserCircle2Icon, ShoppingCart } from "lucide-react";
import darklogo from "./site-identity/darklogo.png";
const NavbarDesktop = () => {
  return (
    <nav className="bg-gray-100 px-20 py-5 flex justify-between items-center font-Poppins">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
          <img
            src={darklogo}
            alt="AbaShirts"
            className="mr-2"
            style={{ width: "150px" }}
          />
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-6 text-black font-normal">
        <li>
          <a href="/products" className="hover:text-gray-600 text-sm">
            Products
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-600 text-sm">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search Product"
            className="px-2 py-1 w-full focus:outline-none text-black text-sm"
          />
          <button className="px-3">
            <Search size={18} />
          </button>
        </div>
        {/* User Icon */}
        <a href="/login" className="text-black hover:text-gray-600">
          <UserCircle2Icon size={20} />
        </a>
        {/* Cart Icon */}
        <a href="/cart" className="text-black hover:text-gray-600">
          <ShoppingCart size={20} />
        </a>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
