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
        <div className="absolute bottom-[30px] left-[50px] w-[30px] h-[30px] bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute right-0 top-0 h-[7px] w-[45px] rounded-md shadow-[0_5px_0_#f2f2f2,-35px_50px_0_#f2f2f2,-70px_95px_0_#f2f2f2] animate-[loading-step_1s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
};

export default Loader;
