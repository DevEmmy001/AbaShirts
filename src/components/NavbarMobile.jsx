import React, { useState } from "react";
import { AlignLeft, Search, UserCircle2Icon, ShoppingCart } from "lucide-react";
import darklogo from "./site-identity/darklogo.png";

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [searchOpen, setSearchOpen] = useState(false);
  const cartCount = 3; //  cart count;

  return (
    <nav className="bg-gray-100 font-Poppins px-8 py-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        {/* Hamburger Menu */}
        <button
          className="text-xl text-black md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <AlignLeft size={24} />
        </button>

        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src={darklogo} alt="AbaShirts" className="mr-2 w-24" />
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* User Icon */}
          <a href="/login" className="text-black hover:text-gray-600">
            <UserCircle2Icon size={20} />
          </a>

          {/* Cart Icon with Badge */}
          <div className="relative">
            <a href="/cart" className="text-black hover:text-gray-600">
              <ShoppingCart size={20} />
            </a>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center border mt-4 border-gray-300 rounded-md overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="Search Product"
          className="px-3 py-3 w-full focus:outline-none text-black text-sm"
        />
        <button className="px-3">
          <Search size={18} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 bg-gray-100">
          <li className="py-2 ">
            <a
              href="/products"
              className="block rounded-md px-4 text-black py-4 bg-white hover:bg-gray-100 text-sm"
            >
              Products
            </a>
          </li>
          <li className="py-2">
            <a
              href="/contact"
              className="block rounded-md px-4 text-black py-4 bg-white hover:bg-gray-100 text-sm"
            >
              Contact Us
            </a>
          </li>
          <li className="py-2">
            <a
              href="/about"
              className="block rounded-md px-4 text-black py-4 bg-white hover:bg-gray-100 text-sm"
            >
              About Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavbarMobile;
