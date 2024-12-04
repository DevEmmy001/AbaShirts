import React, { useState } from "react";
import Navbar from "../components/Navbarwrapper";
import shopper from "../images/shopper.jpg";
import sitelogo from "../components/site-identity/darklogo.png";
import Footer from "../components/Footer";

const LoginPage = () => {
  // Step 1: Define state for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    emailOrPhone: "",
    password: "",
    showPassword: false,
  });

  const [error, setError] = useState("");

  // Step 2: Handle input changes
  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
    if (error) setError("");
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validation
    if (!formData.fullName) {
      setError("Full Name is required");
      return;
    }
    if (!formData.fullName || formData.fullName.length < 6) {
      setError("Input valid username with characters more than 6!");
      return;
    }
    if (!formData.emailOrPhone) {
      setError("Mobile Number or Email is required");
      return;
    }
    if (!formData.password || formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // If validation passes
    console.log("Form Data Submitted:", formData);

    // Simulate success action
    alert("Account created successfully!");
    setFormData({
      fullName: "",
      emailOrPhone: "",
      password: "",
      showPassword: false,
    }); // Reset form
  };

  return (
    <>
      {/* <Navbar /> */}
      <section
        className="flex flex-col md:px-20 md:py-5 py-8 px-8 font-Poppins md:flex md:flex-col md:items-center"
        id="Login_section"
      >
        {/* intro with logo */}
        <div className="flex flex-col items-center">
          <img src={sitelogo} alt="site logo icon" className="w-1/2 md:w-40" />
          <h1 className="mt-4 text-gray-600 font-bold">Welcome to AbaShirts</h1>
          <p className="text-gray-600 text-sm font-medium">Create account</p>
        </div>

        {/* user forms input for signup */}
        <form className="mt-3 md:w-fit md:flex" onSubmit={handleSubmit}>
          <img
            className="hidden md:rounded-md md:flex md:w-1/2 md:h-96 md:object-cover md:items-center"
            src={shopper}
            alt="happy woman with shopping bag"
          />
          <div className="md:w-1/2 md:ml-6" id="form-div-section">
            {/* Full Name */}
            <div className="flex flex-col pt-6 md:pt-0">
              <label className="text-xs text-gray-600" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="px-5 py-4 text-xs bg-slate-100 focus:outline-none rounded-md mt-3"
              />
            </div>

            {/* Mobile Number or Email */}
            <div className="flex flex-col pt-4">
              <label className="text-xs text-gray-600" htmlFor="emailOrPhone">
                Mobile Number or Email
              </label>
              <input
                type="text"
                id="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleInputChange}
                className="px-5 py-4 text-xs bg-slate-100 focus:outline-none rounded-md mt-3"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col pt-4">
              <label className="text-xs text-gray-600" htmlFor="password">
                Create a password
              </label>
              <input
                type={formData.showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className="px-5 py-4 text-xs bg-slate-100 focus:outline-none rounded-md mt-3"
              />
            </div>

            {/* Checkbox to Show Password */}
            <div className="flex pt-4">
              <input
                type="checkbox"
                id="showPassword"
                checked={formData.showPassword}
                onChange={handleInputChange}
                className="mr-3"
              />
              <p className="text-xs text-gray-600">Show Password</p>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-700 py-4 text-xs text-white rounded-md mt-4"
            >
              Continue
            </button>
          </div>
        </form>

        {/* Already have an account */}
        <div className="mt-6">
          <p className="text-xs text-center">
            Already have an account{" "}
            <a className="text-orange-700 font-bold" href="">
              Sign In
            </a>
          </p>
          {/* Terms and conditions */}
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
