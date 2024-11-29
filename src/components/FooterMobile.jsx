import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import lightlogo from "./site-identity/lightlogo.png";

const FooterMobile = () => {
  const [pageOpen, setPageOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <footer className="bg-black text-white font-Poppins p-6">
      {/* Logo and Description */}
      <div className="mb-6">
        <a href="/">
          <img src={lightlogo} alt="AbaShirts" className="mr-2 w-24 mb-8" />
        </a>
        <p className="text-sm text-gray-400 mt-2">
          AbaShirts is your go-to destination for premium, stylish shirts that
          reflect the rich culture and craftsmanship of Aba. Our commitment is
          to deliver high-quality, comfortable, and affordable fashion pieces
          that inspire confidence and redefine your wardrobe. With a focus on
          exceptional customer service, we ensure your shopping experience is as
          seamless as possible.
        </p>
        <hr className="my-4 border-gray-600" />
      </div>

      {/* Page Links Section */}
      <div>
        <button
          onClick={() => setPageOpen(!pageOpen)}
          className="flex justify-between items-center w-full py-2 text-sm font-medium"
        >
          Page
          {pageOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {pageOpen && (
          <ul className=" mt-2 space-y-1 text-gray-400">
            <li className="text-sm">
              <a href="/home" className="hover:text-white">
                Home
              </a>
            </li>
            <li className="text-sm">
              <a href="/shop" className="hover:text-white">
                Shop
              </a>
            </li>
            <li className="text-sm">
              <a href="/products" className="hover:text-white">
                Product
              </a>
            </li>
            <li className="text-sm">
              <a href="/articles" className="hover:text-white">
                Articles
              </a>
            </li>
            <li className="text-sm">
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        )}
        <hr className="my-4 border-gray-600" />
      </div>

      {/* Info Links Section */}
      <div>
        <button
          onClick={() => setInfoOpen(!infoOpen)}
          className="flex justify-between items-center w-full py-2 text-sm font-medium"
        >
          Info
          {infoOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {infoOpen && (
          <ul className="mt-2 space-y-1 text-gray-400">
            <li className="text-sm">
              <a href="/shipping-policy" className="hover:text-white ">
                Shipping Policy
              </a>
            </li>
            <li className="text-sm ">
              <a href="/return-refund" className="hover:text-white">
                Return & Refund
              </a>
            </li>
            <li className="text-sm ">
              <a href="/support" className="hover:text-white">
                Support
              </a>
            </li>
            <li className="text-sm ">
              <a href="/faqs" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li className="text-sm">
              <a
                href="tel:+2348163059312"
                className="hover:text-gray-400 transition-colors"
              >
                +2348163059312
              </a>
            </li>
          </ul>
        )}
        <hr className="my-4 border-gray-600" />
      </div>

      {/* Office Section */}
      <div className="text-sm">
        <h3 className="font-medium">Office</h3>
        <p className="mt-2 text-gray-400">
          10 Calabar Street Opposite AbiaPoly Aba, Abia State.
        </p>

        <hr className="my-4 border-gray-600" />
      </div>

      {/* Payment Options */}
      <div className="flex justify-center gap-2"></div>

      {/* Footer Note */}
      <p className="text-center text-sm text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} AbaShirts. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterMobile;
