import React from 'react';
import { motion } from 'framer-motion';
import { VideoIcon, Projector, TrendingUp, BarChart2 } from 'lucide-react';

const School = () => {
  const services = [
    {
      icon: VideoIcon,
      title: '2D & 3D Animated Videos',
      description: 'Make learning fun & easy with colourful visuals',
      gradient: 'from-orange-100 to-orange-200',
      alt: 'Animated educational video icon'
    },
    {
      icon: Projector,
      title: 'Interactive Projectors',
      description: 'Boost understanding with engaging visual lessons',
      gradient: 'from-blue-100 to-blue-200',
      alt: 'Interactive classroom projector icon'
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Promotion',
      description: 'Banners, posters & digital ads to grow',
      gradient: 'from-green-100 to-green-200',
      alt: 'School marketing and promotion icon'
    },
    {
      icon: BarChart2,
      title: 'Landing Pages',
      description: 'Build a professional website for your School',
      gradient: 'from-purple-100 to-purple-200',
      alt: 'School website landing page icon'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <>
      <section 
        className="relative py-12 md:py-16 bg-white overflow-hidden"
        aria-label="School Educational Services"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8 md:mb-12"
          >
            School Services – Smarter Classrooms, Better Learning!
          </motion.h1>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="h-full"
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${service.gradient} 
                    shadow-md rounded-xl p-5 md:p-6 text-center h-full
                    border border-gray-100 
                    transition-shadow duration-300 hover:shadow-lg`}
                >
                  <motion.div
                    className="mb-4 flex justify-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    aria-hidden="true"
                  >
                    <service.icon className="w-10 h-10 md:w-12 md:h-12 text-gray-700" aria-label={service.alt} />
                  </motion.div>
                  <h2 className="text-lg md:text-xl font-semibold text-blue-900 mb-2 md:mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default School;
