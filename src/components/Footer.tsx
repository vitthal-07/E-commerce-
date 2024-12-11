import { motion } from "motion/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <motion.footer
      className="bg-secondary border-t border-primary mt-40 px-6 sm:px-12 lg:px-20 text-sm text-background"
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
          <h3 className="text-xl font-medium mb-5 text-background">Explore</h3>
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
          <h3 className="text-xl font-medium mb-5 text-background">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              📞 <span>+91 23121 13671</span>
            </li>
            <li className="flex items-center gap-2">
              📧 <span>vitthalbiradar@example.com</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-text transition-colors bg-background rounded-full p-1.5"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-text transition-colors bg-background rounded-full p-1.5"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-text transition-colors bg-background rounded-full p-1.5"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-text transition-colors bg-background rounded-full p-1.5"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <hr className="border-primary" />
        <p className="py-5 text-center text-background">
          © 2024 tidkess.com. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
