import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", href: "#hero" },
    { name: "SCHOOL SERVICES", href: "#school" },
    { name: "COACHING SERVICES", href: "#coaching" },
    { name: "ADDITIONAL SERVICES", href: "#additional" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src={Logo} alt="TeachMark Logo" className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8" role="menu">
            {menuItems.map((item) => (
              <motion.li key={item.name} role="menuitem">
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
            {/* Contact Button */}
            <li role="menuitem">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition-all"
              >
                CONTACT US
              </motion.a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-md rounded-lg w-full"
              role="menu"
            >
              <ul className="flex flex-col items-center space-y-3 py-4">
                {menuItems.map((item) => (
                  <motion.li key={item.name} role="menuitem">
                    <a
                      href={item.href}
                      className="block text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-4 py-2 rounded-md text-center w-full"
                      onClick={closeMenu} // Close menu on click
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
                {/* Contact Button (Mobile) */}
                <li role="menuitem" className="w-full px-4">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block bg-orange-500 text-white text-center px-5 py-2 rounded-full hover:bg-orange-600 transition-all"
                    onClick={closeMenu}
                  >
                    CONTACT US
                  </motion.a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
