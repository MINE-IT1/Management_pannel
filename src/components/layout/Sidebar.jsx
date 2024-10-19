import { useEffect, useState } from "react";
import {
  FaHome,
  FaUsers,
  FaProjectDiagram,
  FaDollarSign,
  FaComments,
  FaBars,
  FaEnvelopeOpen,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaRegChartBar, // Importing the new icon
} from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import TypingAnimator from "react-typing-animator";
import logo from "../../assets/jiffy-logo.svg";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "HR", path: "/hr", icon: <FaUsers /> },
    { name: "Clients", path: "/clients", icon: <FaUsers /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Business", path: "/business", icon: <FaEnvelopeOpen /> },
    { name: "Finance", path: "/finance", icon: <FaDollarSign /> },
    { name: "Sales", path: "/sales", icon: <FaRegChartBar /> }, // Updated icon
  ];

  // Typing effect
  const textArray = ["Let's Connect..."];

  return (
    <>
     
      <div className="flex flex-col gap-y-10 h-screen bg-white shadow-md p-4 w-64">
        {/* Logo Section */}
        <div className="text-center mb-4 ml-[-2.5rem]">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-6 items-start mb-12 ">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center w-full px-4 py-3 rounded-lg text-lg text-indigo-700 transition-all duration-300 ease-in-out ${
                  isActive ||
                  (location.pathname === "/" && item.path === "/dashboard")
                    ? "bg-pink-500 text-white"
                    : "hover:bg-pink-200"
                }`
              }
              end
            >
              <span className="mr-6 text-xl">{item.icon}</span>
              <span className="">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="ml-4">
          <TypingAnimator
            textArray={textArray}
            cursorColor="linear-gradient(90deg, #f36, #f90)"
            textColor="linear-gradient(90deg, #f36, #f90)"
            fontSize="20px"
            loop
            typingSpeed={100}
            delaySpeed={1000}
            backspace
            dynamicDelay
          />
        </div>
        {/* Social Media Icons at the Bottom */}
        <div className=" mt-[-2rem] flex justify-center space-x-8 pb-2 ">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-indigo-700 text-2xl hover:text-pink-500 transition duration-300" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-indigo-700 text-2xl hover:text-pink-500 transition duration-300" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-indigo-700 text-2xl hover:text-pink-500 transition duration-300" />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-indigo-700 text-2xl hover:text-pink-500 transition duration-300" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
