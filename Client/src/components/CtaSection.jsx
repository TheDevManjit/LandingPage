import React, { useState } from 'react';
import { motion, } from 'framer-motion';


const CtaSection = () => {
    return (
      <section className="bg-gray-900 text-white text-center py-12 px-6 my-8">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to Transform Your Educational Institute?</h2>
        <p className="mt-2 text-gray-300">Schedule a free consultation today and discover how TeachMark can help you grow.</p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
        >
          Get In Touch
        </motion.a>
      </section>
    );
  };

  export default CtaSection
  

