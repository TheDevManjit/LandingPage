import { FaChalkboardTeacher, FaFilePowerpoint, FaBullhorn, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const CoachingServices = () => {
  const services = [
    {
      icon: <FaChalkboardTeacher className="text-orange-500 text-4xl" />,
      title: "Advanced Digital Panels",
      description: "60-70% Cost + No-Cost EMI for modern teaching",
    },
    {
      icon: <FaFilePowerpoint className="text-orange-500 text-4xl" />,
      title: "Custom PPTs for Teaching",
      description: "Easy-to-understand visuals for better concept clarity",
    },
    {
      icon: <FaBullhorn className="text-orange-500 text-4xl" />,
      title: "Marketing Support",
      description: "Social media management & branding for growth",
    },
    {
      icon: <FaBookOpen className="text-orange-500 text-4xl" />,
      title: "Practice Sets & Materials",
      description: "Extra support for better student results",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-50 to-blue-100 mt-12 px-6 md:px-16 lg:px-24 py-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6">
        Coaching Services – Upgrade Your Institute with Digital Power!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {service.icon}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoachingServices;
