import React, { useState } from "react";
import { Menu, Search, User, ShoppingCart } from "lucide-react";
import darklogo from "./site-identity/darklogo.png";
const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 font-Poppins  px-8 py-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        {/* Hamburger Menu */}
        <button
          className="text-xl text-black md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={darklogo}
            alt="AbaShirts"
            className="mr-2"
            style={{ width: "100px" }}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a href="/search" className="text-black hover:text-gray-600">
            <Search size={20} />
          </a>
          <a href="/login" className="text-black hover:text-gray-600">
            <User size={20} />
          </a>
          <a href="/cart" className="text-black hover:text-gray-600">
            <ShoppingCart size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 bg-gray-100">
          <li className="py-2 ">
            <a
              href="/products"
              className="block px-4 text-black p-4 bg-white hover:bg-gray-100"
            >
              Products
            </a>
          </li>
          <li className="py-2">
            <a
              href="/contact"
              className="block px-4 text-black p-4 bg-white hover:bg-gray-100"
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavbarMobile;
