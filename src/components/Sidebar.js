import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    // Menu items array
    const menuItems = [
        { title: "Dashboard", path: "/", icon: "fas fa-home" },
        { title: "Hatchery Management", path: "/hatchery-management", icon: "fas fa-fish" },
        { title: "Inventory Management", path: "/inventory-management", icon: "fas fa-boxes" },
        { title: "User Management", path: "/user-management", icon: "fas fa-users" },
    ];

    return (
        <div className="w-64 bg-gradient-to-r from-sky-600 to-sky-900 h-screen text-white flex flex-col justify-between">
            <div>
                <div className="p-6">
                    <h1 className="text-2xl font-bold">AquaHub</h1>
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
                                >
                                    <i className={`${item.icon} mr-4`}></i> {item.title}
                                </NavLink>
                            </li>
                        ))}
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