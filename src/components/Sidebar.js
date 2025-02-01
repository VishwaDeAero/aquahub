import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-700 h-screen text-white flex flex-col justify-between">
            <div>
                <div className="p-6">
                    <h1 className="text-2xl font-bold">AquaHub</h1>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li className="">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `w-full block px-6 py-3 hover:bg-blue-500 cursor-pointer ${isActive ? "bg-blue-500 font-bold" : ""
                                    }`
                                }
                            >
                                <i className="fas fa-home mr-4"></i> Dashboard
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                to="/hatchery-management"
                                className={({ isActive }) =>
                                    `w-full block px-6 py-3 hover:bg-blue-500 cursor-pointer ${isActive ? "bg-blue-500 font-bold" : ""
                                    }`
                                }
                            >
                                <i className="fas fa-fish mr-4"></i> Hatchery Management
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                to="/inventory-management"
                                className={({ isActive }) =>
                                    `w-full block px-6 py-3 hover:bg-blue-500 cursor-pointer ${isActive ? "bg-blue-500 font-bold" : ""
                                    }`
                                }
                            >
                                <i className="fas fa-boxes mr-4"></i> Inventory Management
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                to="/user-management"
                                className={({ isActive }) =>
                                    `w-full block px-6 py-3 hover:bg-blue-500 cursor-pointer ${isActive ? "bg-blue-500 font-bold" : ""
                                    }`
                                }
                            >
                                <i className="fas fa-users mr-4"></i> User Management
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="p-6">
                <button className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
                    <i className="fas fa-sign-out-alt mr-2"></i> Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;