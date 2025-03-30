import React from 'react';
import { Book, Rocket, Users, MonitorSmartphone, Lightbulb, ImageOff } from 'lucide-react';


function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-900 relative overflow-hidden pt-16 md:pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <Lightbulb className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-8 md:pt-12 pb-24 md:pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 text-white space-y-4 md:space-y-6 text-center lg:text-left">
            <div className="w-16 md:w-20 h-1 bg-white rounded-full mb-4 md:mb-8 mx-auto lg:mx-0"></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Transform Education with TeachMark
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Smart Class Solutions, Digital Marketing, and Career Growth Strategies designed to empower educational institutions.
            </p>
            <button  className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 md:py-4 px-8 md:px-10 rounded-full transition-all transform hover:scale-105">
              <a href="#contact">Contact Us</a>
            </button>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-orange-500 rounded-3xl md:rounded-[3rem] transform rotate-6"></div>

            {/* Main Image */}
            <div className="relative bg-orange-500 rounded-3xl md:rounded-[3rem] p-4 md:p-8 overflow-hidden">
              <img 
                src="https://www.vhv.rs/dpng/f/573-5736093_corporate-girl-png.png"
                alt="Smart Class"
                className="rounded-2xl w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] "
              />
            </div>

            {/* Floating Cards - Hidden on extra small screens, visible on small screens and above */}
            <div className="hidden sm:block absolute -top-8 -right-4 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
              <div className="flex items-center gap-2 md:gap-3">
                <MonitorSmartphone className="w-6 h-6 md:w-10 md:h-10 text-blue-500" />
                <div>
                  <p className="font-semibold text-sm md:text-base">Smart Classes</p>
                  <p className="text-xs md:text-sm text-gray-500">Modern Learning</p>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute top-1/3 -left-4 md:-left-8 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl animate-pulse">
              <div className="flex items-center gap-2 md:gap-3">
                <Users className="w-6 h-6 md:w-10 md:h-10 text-orange-500" />
                <div>
                  <p className="font-semibold text-sm md:text-base">Marketing Solutions</p>
                  <p className="text-xs md:text-sm text-gray-500">Grow Your Institute</p>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute bottom-16 md:bottom-20 -right-4 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
              <div className="flex items-center gap-2 md:gap-3">
                <Book className="w-6 h-6 md:w-10 md:h-10 text-green-500" />
                <div>
                  <p className="font-semibold text-sm md:text-base">Educational Resources</p>
                  <p className="text-xs md:text-sm text-gray-500">Enhanced Learning</p>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute bottom-0 left-1/4 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl animate-bounce">
              <div className="flex items-center gap-2 md:gap-3">
                <Rocket className="w-6 h-6 md:w-10 md:h-10 text-red-500" />
                <div>
                  <p className="font-semibold text-sm md:text-base">Career Growth</p>
                  <p className="text-xs md:text-sm text-gray-500">Student Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-1/4 top-1/4 w-16 h-16 md:w-20 md:h-20 bg-blue-400 rounded-full blur-2xl md:blur-3xl opacity-20"></div>
      <div className="absolute left-1/4 bottom-1/4 w-24 h-24 md:w-32 md:h-32 bg-orange-400 rounded-full blur-2xl md:blur-3xl opacity-20"></div>
    </div>
  );
}

export default Hero;