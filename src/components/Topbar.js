import React from "react";

const Topbar = ({ title }) => {
    return (
        <div className="bg-white flex justify-between items-center px-6 py-4 shadow-md z-10">
            <h1 className="text-xl font-bold text-darkblue">{title}</h1>
            <div className="flex items-center space-x-6">
                <i className="fas fa-bell text-gray-500"></i>
                <div className="flex items-center">
                    <img
                        src="/img/user-icon.jpg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="ml-2 font-semibold text-darkblue">Heena</span>
                </div>
            </div>
        </div>
    );
};

export default Topbar;