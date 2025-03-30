import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { X } from "lucide-react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_vkxi40f", "template_duv7amj", formData, "FVOwyC9n7bFrNRCIG")
      .then(
        () => {
          setIsSubmitted(true);
          setTimeout(() => {
            setShowPopup(false);
          }, 2000);
        },
        (error) => {
          console.error("Email Error:", error);
        }
      );
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="bg-white p-5 shadow-lg rounded-lg border border-gray-200 w-96 relative"
      >
        <button onClick={handleClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
          <X size={20} />
        </button>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-blue-900">Want to Build Your Brand?</h3>
        </div>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
            <textarea
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Enquiry
            </button>
          </form>
        ) : (
          <p className="text-green-600 text-center font-semibold">Thank you! We'll contact you soon.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Popup;