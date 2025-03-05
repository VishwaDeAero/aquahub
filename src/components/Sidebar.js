import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import mainLogoLight from '../assets/img/main-logo-light.png';

const Sidebar = ({isOpen, toggleSidebar}) => {
  const navigate = useNavigate();
  // Menu items array
  const menuItems = [
    { title: "Dashboard", path: "/", icon: "fas fa-home" },
    {
      title: "Hatchery Management",
      path: "/hatchery-management",
      icon: "fas fa-fish",
    },
    {
      title: "Inventory Management",
      path: "/inventory-management",
      icon: "fas fa-boxes",
    },
    {
      title: "User Management",
      path: "/user-management",
      icon: "fas fa-users",
    },
  ];

  // Handle logout
  const handleLogout = async () => {
    try {
      // Call the logout endpoint
      await axios.post("http://localhost:5001/api/auth/logout", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
// Clear the token from localStorage
localStorage.removeItem("authToken");

// Redirect to login page
navigate("/login");
} catch (err) {
console.error("Failed to logout", err);
}
};

return (
<>
  {/* Sidebar Overlay for Mobile */}
  {isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleSidebar}></div>
  )}
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen w-72 bg-gradient-to-r from-sky-600 to-sky-900 text-white flex flex-col justify-between shadow-lg transition-transform duration-300 z-50 
                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
            >
                <div>
                    <div className="p-6 flex justify-between items-center">
                        {/* <h1 className="text-2xl font-bold">AquaHub</h1> */}
                        <img className="w-2/3" src={mainLogoLight}/>
                        <button className="md:hidden text-white text-2xl" onClick={toggleSidebar}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                    <nav className="mt-6">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `w-full block px-5 py-3 hover:bg-blue-500 cursor-pointer ${isActive ? "bg-sky-700 font-bold" : ""
                                            }`
                                        }
                                        onClick={toggleSidebar}
                                    >
                                        <i className={`${item.icon} mr-4`}></i> {item.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="p-6">
                    <button
                        onClick={() => {
                            navigate("/login");
                        }}
                        className="w-full flex items-center justify-center bg-white text-darkblue px-4 py-2 rounded-lg hover:bg-gray-200"
                    >
                        <i className="fas fa-sign-out-alt mr-2"></i> Logout
                    </button>
                </div>
                <nav className="mt-6">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `w-full block px-5 py-3 hover:bg-blue-500 cursor-pointer ${isActive ? "bg-sky-700 font-bold" : ""
                                        }`
                                    }
                                    onClick={toggleSidebar}
                                >
                                    <i className={`${item.icon} mr-4`}></i> {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="p-6">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center bg-white text-darkblue px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                    <i className="fas fa-sign-out-alt mr-2"></i> Logout
                </button>
            </div>
       
    </>
);
};

export default Sidebar;
