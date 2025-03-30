import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kameshar Kumar",
      role: "Principal",
      image: "images/kameshwar.png",
      quote: "With TeachMark’s marketing strategies—banners, posters, and social media promotion—schools have seen a 10% increase in admissions while improving student performance.",
      rating: 5
    },
    {
      id: 2,
      name: "Varun Kumar",
      role: "Science Teacher",
      image: "images/vipin.png",
      quote: "hanks to TeachMark’s promotional videos, our school’s visibility has skyrocketed! The professionally crafted content, combined with strategic marketing through banners, posters, and social media, has helped us increase admissions by 10%! Parents now see the true value of our institute, and our reputation has never been stronger.",
      rating: 5
    },
    {
      id: 3,
      name: "Pintu Kumar",
      role: "R s Coaching ",
      image: "images/rohit.png",
      quote: "Our enrollment increased by 27% after implementing the marketing services. The professional banners and digital ads really showcased our school's strengths.",
      rating: 4
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        position: "absolute", // Ensures smooth horizontal transition
        top: 0, // Keeps position stable
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }
      })
      
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
      />
    ));
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
            <ChevronLeft className="h-6 w-6 text-blue-900" />
          </button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
            <ChevronRight className="h-6 w-6 text-blue-900" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={testimonials[currentIndex].id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white rounded-xl shadow-lg overflow-hidden md:flex"
              >
                <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-indigo-200 p-6 flex flex-col items-center justify-center">
                  <div className="h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-blue-900">{testimonials[currentIndex].name}</h3>
                  <p className="text-blue-600">{testimonials[currentIndex].role}</p>
                  <div className="flex mt-2">{renderStars(testimonials[currentIndex].rating)}</div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonials[currentIndex].quote}"</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => handleDotClick(index)} className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-blue-600 w-6' : 'bg-blue-300'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
