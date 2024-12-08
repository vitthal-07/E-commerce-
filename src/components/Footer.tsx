import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      className="bg-primary border-t border-secondary mt-40 px-6 sm:px-12 lg:px-20 text-sm text-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Section */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10">
        {/* Logo and About */}
        <motion.div
          className="w-full sm:w-2/3"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <img className="mb-5 w-32" src={assets.logo} alt="Company Logo" />
          <p className="leading-relaxed">
            Delivering quality and innovation to enhance your daily life. Our
            mission is to provide exceptional service while fostering
            connections and building trust.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <h3 className="text-xl font-medium mb-5 text-text">Explore</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="duration-200">
                Delivery Info
              </Link>
            </li>
            <li>
              <Link to="#" className="duration-200">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        >
          <h3 className="text-xl font-medium mb-5 text-text">Contact Us</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              📞 <span>+91 23121 13671</span>
            </li>
            <li className="flex items-center gap-2">
              📧 <span>vitthalbiradar@example.com</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <hr className="border-secondary" />
        <p className="py-5 text-center text-text">
          © 2024 MyWeb.com. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
