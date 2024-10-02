import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-row justify-between items-center py-3 px-2 lg:px-[60px] bg-white shadow-md lg:shadow-none">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-xl lg:text-[36px] font-bold text-[#000000] font-roboto-serif">
          Abdulsalam Ibrahim Adisa
        </h1>
      </motion.div>

      <button
        onClick={toggleMenu}
        className="lg:hidden text-black focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <div className="hidden lg:flex flex-row space-x-7">
        {["/", "/project", "/blogs"].map((path, idx) => (
          <NavLink
            key={idx}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "font-nunito text-xl font-bold text-[#528FCC]"
                : "font-nunito text-xl font-bold text-[#000000]"
            }
          >
            {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-14 left-0 w-full bg-white shadow-md z-10"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-[#528FCC] font-bold font-nunito"
                  : "block px-4 py-2 text-[#000000] font-bold font-nunito"
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-[#528FCC] font-bold font-nunito"
                  : "block px-4 py-2 text-[#000000] font-bold font-nunito"
              }
              onClick={toggleMenu}
            >
              Project
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-[#528FCC] font-bold font-nunito"
                  : "block px-4 py-2 text-[#000000] font-bold font-nunito"
              }
              onClick={toggleMenu}
            >
              Blogs
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
