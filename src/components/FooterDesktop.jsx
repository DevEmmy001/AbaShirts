import React from "react";
// import { Visa, Mastercard, PayPal, ApplePay } from "lucide-react"; // Import your payment icons
import lightlogo from "./site-identity/lightlogo.png";

const FooterDesktop = () => {
  return (
    <footer className="bg-gray-900 text-white px-20 py-5  hidden md:block font-Poppins">
      <div className="flex-col justify-between w-fit">
        <div className="flex justify-between ">
          {/* Logo and Description */}
          <div className="w-1/4">
            <img
              src={lightlogo}
              alt="AbaShirts"
              className="mr-2"
              style={{ width: "150px" }}
            />
            <p className="not-italic text-xs font-light leading-6 mt-8">
              AbaShirts is your go-to destination for premium, stylish shirts
              that reflect the rich culture and craftsmanship of Aba. Our
              commitment is to deliver high-quality, comfortable, and affordable
              fashion pieces that inspire confidence and redefine your wardrobe.
              With a focus on exceptional customer service, we ensure your
              shopping experience is as seamless as possible.
            </p>
          </div>

          <div className="flex">
            {/* Page Links */}
            <div className="w-fit mr-20 leading-8">
              <h3 className="font-medium text-base mb-4">Page</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-xs font-light  hover:text-gray-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/shop"
                    className="text-xs font-light  hover:text-gray-400 transition-colors"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-xs font-light  hover:text-gray-400 transition-colors"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="/articles"
                    className="text-xs font-light  hover:text-gray-400 transition-colors"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-xs font-light  hover:text-gray-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Info Links */}
            <div className="w-fit mr-20">
              <h3 className="font-medium text-base mb-4">Info</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/shipping-policy"
                    className="text-xs font-light  hover:text-gray-400 transition-colors"
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/return-policy"
                    className="text-xs font-light  hover:text-gray-400 transition-colors"
                  >
                    Return & Refund
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="text-xs font-light  hover:text-gray-400 transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="/faqs"
                    className="text-xs font-light  hover:text-gray-400 transition-colors"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Office Info */}
            <div className="w-fit">
              <h3 className="font-medium text-base mb-4">Office</h3>
              <address className="not-italic text-xs font-light leading-10">
                10 Calabar Street <br />
                Opposite AbiaPoly <br />
                Aba, Abia State <br />
                <a
                  href="tel:+2348163059312"
                  className="hover:text-gray-400 transition-colors"
                >
                  +234 816 3059 312
                </a>
              </address>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} AbaShirts. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center space-x-4">
            {/* <Visa className="w-8 h-8" />
            <Mastercard className="w-8 h-8" />
            <PayPal className="w-8 h-8" />
            <ApplePay className="w-8 h-8" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDesktop;
