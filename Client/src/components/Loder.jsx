import React from "react";
import Logo from "../assets/Logo.svg"; // Ensure your logo is in the correct path

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <img src={Logo} alt="Logo" className="w-24 h-24 animate-pulse mb-4" /> 
      <p className="text-lg font-semibold text-gray-700 animate-fade-in">
        Welcome to TeachMark
      </p>
      <div className="relative w-[120px] h-[90px] mt-8">
    
      <div class="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
