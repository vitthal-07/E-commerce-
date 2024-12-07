import { Link, NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { motion } from "motion/react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { getCartCount } = useContext(ShopContext);
  const [visible, setVisible] = useState(false); // Sidebar menu visibility
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between py-5 px-6 sm:px-10 font-medium">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} className="w-36" alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
          <NavLink
            to="/"
            className="flex flex-col items-center gap-1 hover:text-gray-900 transition-all"
          >
            <p>HOME</p>
            <motion.hr
              className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden"
              whileHover={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </NavLink>
          {["Collection", "About", "Contact"].map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase()}`}
              className="flex flex-col items-center gap-1 hover:text-gray-900 transition-all"
            >
              <p>{item.toUpperCase()}</p>
              <motion.hr
                className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden"
                whileHover={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </NavLink>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <img
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="Search Icon"
          />

          {/* Profile Dropdown */}
          <div className="group relative">
            <Link to="/login">
              <img
                src={assets.profile_icon}
                className="cursor-pointer w-5"
                alt="Profile Icon"
              />
            </Link>
            <motion.div
              className="absolute right-0 mt-2 bg-white shadow-md rounded py-2 w-40 hidden group-hover:block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {["My Profile", "Orders", "Logout"].map((option, index) => (
                <p
                  key={index}
                  className="px-4 py-2 text-gray-600 hover:text-black cursor-pointer"
                >
                  {option}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5" alt="Cart Icon" />
            <p className="absolute right-[-5px] top-3 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          {/* Hamburger Menu */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt="Menu Icon"
          />
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`min-h-[100vh] absolute top-0 left-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.cross_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          {["Home", "Collection", "About", "Contact"].map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase()}`}
              className="py-2 pl-6 border"
              onClick={() => setVisible(false)}
            >
              {item.toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
