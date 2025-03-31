import React from 'react';
import { Crown, Target, PiggyBank, CheckCircle } from 'lucide-react';
import Lottie from "lottie-react";
// Replace with your Lottie file path
import Animation from "../assets/Animation - 1743184412827.json"


const WhyChoose = () => {
  return (
    <div className='my-10 text-center text-btn bg-gradient-to-br from-blue-50 to-indigo-100 py-5 '>
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Why Choose TeachMark?</h1>
      <div className="  flex flex-col lg:flex-row items-center justify-center p-6 "
      >

        <div className="w-full lg:w-1/2 max-w-xl">


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First-of-its-Kind Solution */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <Crown className="text-orange-500 w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">First-of-its-Kind Solution</h3>
                <p className="text-gray-600 text-sm">No one else offers this complete package</p>
              </div>
            </div>

            {/* Affordable & Flexible */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <PiggyBank className="text-orange-500 w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Affordable & Flexible</h3>
                <p className="text-gray-600 text-sm">No-cost EMI, no high franchise fees</p>
              </div>
            </div>

            {/* Smart Growth Strategies */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <Target className="text-orange-500 w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Smart Growth Strategies</h3>
                <p className="text-gray-600 text-sm">Combining learning tools + digital marketing</p>
              </div>
            </div>

            {/* Trusted by Schools & Centers */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <CheckCircle className="text-orange-500 w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="ffont-semibold text-lg mb-2">Trusted by Schools & Centers</h3>
                <p className="text-gray-600 text-sm">Helping institutes grow with tech</p>
              </div>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <div className="relative w-full max-w-md">
            {/* <img 
            src="/api/placeholder/500/500" 
            alt="TeachMark Illustration" 
            className="w-full h-auto z-10 relative"
          /> */}
            {/* <Lottie animationData={animationData} loop={true} className="w-full h-auto" /> */}
            <Lottie animationData={Animation} loop={true} className="w-full h-auto" />
            <div className="absolute inset-0 bg-blue-100 rounded-full opacity-50 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;