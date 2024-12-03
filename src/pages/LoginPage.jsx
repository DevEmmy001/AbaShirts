import React from "react";
import Navbar from "../components/Navbarwrapper";
import sitelogo from "../components/site-identity/darklogo.png";
import Footer from "../components/Footer";
const LoginPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section
        className="md:px-20 md:py-5 py-8 px-8 font-Poppins md:flex md:flex-col md:items-center"
        id="Login_section"
      >
        {/* intro with logo */}
        <div className="flex flex-col items-center">
          <img src={sitelogo} alt="site logo icon" className="w-1/2 md:w-40" />
          <h1 className="mt-4 font-bold">Welcome to AbaShirts</h1>
          <p className="font-medium">Create account</p>
        </div>
        {/* user forms input for signup */}
        <form className="mt-3 md:w-2/5 ">
          {/* name */}
          <div className="flex flex-col pt-6">
            <label className="text-xs text-gray-600" htmlFor="">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="px-5 py-4 bg-slate-100 focus:outline-none rounded-md mt-3"
            />
          </div>
          {/* number or email */}
          <div className="flex flex-col pt-4">
            <label className="text-xs text-gray-600" htmlFor="">
              Mobile Number or Email
            </label>
            <input
              type="text"
              id="numberandEmail"
              className="px-5 py-4 bg-slate-100 focus:outline-none rounded-md mt-3"
            />
          </div>
          {/* password */}
          <div className="flex flex-col pt-4">
            <label className="text-xs text-gray-600" htmlFor="">
              Create a password
            </label>
            <input
              type="password"
              id="password"
              className="px-5 py-4 bg-slate-100 focus:outline-none rounded-md mt-3"
            />
          </div>
          {/* checkbox-show-password */}
          <div className="flex pt-4">
            <input type="checkbox" className="mr-3" />
            <p className="text-xs text-gray-600">Show Password</p>
          </div>
          {/* submit button */}
          <button className="w-full bg-orange-700 py-4 text-white rounded-md mt-4">
            Continue
          </button>
        </form>
        {/* already have an account */}
        <div className="mt-6 ">
          <p className="text-xs text-center">
            Already have an account{" "}
            <a className="text-orange-700 font-bold" href="">
              Sign In
            </a>
          </p>
          {/* terms and conditions links */}
          <div className="mt-4 border-t border-gray-600 p-4 md:w-fit">
            <p className="text-xs text-center">
              By creating an account, you agree to AbaShirt's{" "}
              <a className="text-cyan-600" href="">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="text-cyan-600" href="">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;
