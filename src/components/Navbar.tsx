import { motion } from "motion/react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ShopContext } from "@/context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { setShowSearch } = useContext(ShopContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 lg:px-28 bg-primary shadow-md"
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
        <ul className="hidden sm:flex gap-6 text-sm text-text">
          <NavLink
            to="/"
            className="flex flex-col items-center gap-1 transition-all"
          >
            <p>HOME</p>
            <motion.hr
              className="w-2/3 border-none h-[1.5px] bg-[#e2e2b6] hidden"
              whileHover={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </NavLink>
          {["Collection", "About", "Contact"].map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase()}`}
              className="flex flex-col items-center gap-1 transition-all"
            >
              <p>{item.toUpperCase()}</p>
              <motion.hr
                className="w-2/3 border-none h-[1.5px] bg-[#e2e2b6] hidden"
                whileHover={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </NavLink>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <FaSearch
            onClick={() => setShowSearch(true)}
            className="w-6 h-6 cursor-pointer"
          />
          {/* Hamburger Menu */}
          <GiHamburgerMenu
            className="w-6 h-6 cursor-pointer sm:hidden block"
            onClick={() => setVisible(true)}
          />
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`min-h-[100vh] absolute top-0 left-0 overflow-hidden bg-background transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-text">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.cross_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className="py-2 pl-6 border-b border-secondary"
            onClick={() => setVisible(false)}
          >
            HOME
          </NavLink>
          {["Collection", "About", "Contact"].map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase()}`}
              className="py-2 pl-6 border-b border-secondary"
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
