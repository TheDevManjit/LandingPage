import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/email-marketing.json";
const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .send("service_vkxi40f", "template_duv7amj", formData, "FVOwyC9n7bFrNRCIG")
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch((error) => console.error("Email send error:", error));
  };

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
           <Lottie animationData={animationData} loop={true} className="w-full h-auto" />
          
        </motion.div>

        {/* Right Side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">We’d love to hear from you! Fill in the form and we’ll get back to you soon.</p>
          
          {isSubmitted ? (
            <p className="text-green-600 text-center">Message sent successfully!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button 
                type="submit" 
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;