import React from "react";

const Topbar = ({ title, toggleSidebar }) => {
    return (
        <div className="bg-white flex justify-between items-center px-4 md:px-6 py-4 shadow-md z-10 relative">
            {/* Hamburger Button (Visible on Mobile) */}
            <button className="md:hidden text-darkblue text-2xl" onClick={toggleSidebar}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </button>

            {/* Page Title - Center on Mobile */}
            <h1 className="text-lg md:text-xl font-bold text-darkblue text-center flex-1 md:flex-none ms-4 md:ms-0">
                {title}
            </h1>

            {/* Icons & Profile Section */}
            <div className="flex items-center space-x-4 md:space-x-6">
                <i className="fas fa-bell text-gray-500 text-lg"></i>
                <div className="flex items-center">
                    <img
                        src="/img/user-icon.jpg"
                        alt="Profile"
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                    />
                    <span className="ml-2 font-semibold text-darkblue hidden md:block">Heena</span>
                </div>
            </div>
        </div>
    );
};

export default Topbar;