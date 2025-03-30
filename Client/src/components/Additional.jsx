import { FaGlobe, FaBullhorn, FaPlayCircle, FaPenNib } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router";


const iconVariants = {
    animate: {
        y: [0, -5, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const AdditionalServices = () => {
    const services = [
        {
            icon: <motion.div variants={iconVariants} animate="animate"><FaGlobe className="text-orange-500 text-5xl" /></motion.div>,
            title: "Landing Pages",
            description: "Build a professional website for your institute",
        },
        {
            icon: <motion.div variants={iconVariants} animate="animate"><FaBullhorn className="text-orange-500 text-5xl" /></motion.div>,
            title: "Social Media Management",
            description: "Attract & engage more students",
        },
        {
            icon: <motion.div variants={iconVariants} animate="animate"><FaPlayCircle className="text-orange-500 text-5xl" /></motion.div>,
            title: "Paid Ads",
            description: "Get more enrollments with smart advertising",
        },
        {
            icon: <motion.div variants={iconVariants} animate="animate"><FaPenNib className="text-orange-500 text-5xl" /></motion.div>,
            title: "Content Creation",
            description: "Custom posts, videos & educational materials",
        },
    ];

    return (
        <div className="relative py-12 px-6 md:px-16 lg:px-24 rounded-2xl border"
        >

            <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-800 mb-8">
                Elevate Your Institute with Our Digital Solutions!
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
                    >
                        {service.icon}
                        <h3 className="text-lg font-semibold text-gray-800 mt-4">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-8 relative z-10">
                <NavLink
                    to='/learn-more' // Ensure this matches the route in App.js
                    className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 text-lg font-semibold"
                >
                    Let's Grow Your Institute Together →
                </NavLink>
            </div>
        </div>
    );
};

export default AdditionalServices;