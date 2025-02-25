import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Topbar = ({ title, toggleSidebar }) => {
  const [userFirstName, setUserFirstName] = useState(""); // State to store the user's first name

  // Fetch the logged-in user's details
  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/auth/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setUserFirstName(response.data.firstName); // Set the user's first name
      } catch (err) {
        console.error("Failed to fetch logged-in user", err);
      }
    };
    fetchLoggedInUser();
  }, []);



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
                <Link to="/my-profile">
                    <div className="flex items-center">
                        <img
                            src="/img/user-icon.jpg"
                            alt="Profile"
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                        />
          <span className="ml-2 font-semibold text-darkblue">{userFirstName}</span>
          </div>
                </Link>
            </div>
        </div>
    );
};

export default Topbar;