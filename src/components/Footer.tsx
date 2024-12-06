import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-40 px-6 sm:px-12 lg:px-20 text-sm text-gray-600">
      {/* Top Section */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10">
        {/* Logo and About */}
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="Company Logo" />
          <p className="w-full sm:w-2/3 leading-relaxed">
            Delivering quality and innovation to enhance your daily life. Our
            mission is to provide exceptional service while fostering
            connections and building trust.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-medium mb-5 text-gray-800">Explore</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Delivery Info
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-medium mb-5 text-gray-800">Contact Us</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              📞 <span>+91 23121 13671</span>
            </li>
            <li className="flex items-center gap-2">
              📧 <span>vitthalbiradar@example.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-center text-gray-500">
          © 2024 MyWeb.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
