import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* TeachMark Info */}
        <div>
          <div className="flex items-center">
            <a
              href="#home"
              className="text-2xl font-bold text-blue-600"
              aria-label="TeachMark Home"
            >
              <img src={Logo} alt="TeachMark Logo" className="h-8 w-auto" />
            </a>
          </div>
          <p className="text-gray-400 mt-2 text-sm">
            Empowering Education with Smart Digital Solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                School Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Coaching Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Additional Services
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500">Contact</h3>
          <p className="flex items-center space-x-2 text-gray-400 mt-2 text-sm">
            <Phone className="text-orange-500" size={18} />
            <span>+91 6205097876</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-400 mt-2 text-sm">
            <Mail className="text-orange-500" size={18} />
            <span>teachmark.official@gmail.com</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-400 mt-2 text-sm">
            <MessageCircle className="text-green-500" size={18} />
            <span>WhatsApp: +91 6205097876</span>
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500">Follow Us</h3>
          <div className="flex space-x-4 text-xl mt-2 justify-start sm:justify-center">
            <a
              href="https://www.facebook.com/teachmark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://twitter.com/teachmark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://www.instagram.com/teachmark.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/teachmark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="https://wa.me/916205097876"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-white transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4 text-sm">
        © 2025 TeachMark. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
