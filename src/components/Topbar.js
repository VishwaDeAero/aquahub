import React, { useState, useEffect } from "react";
import axios from "axios";

const Topbar = ({ title }) => {
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
          {/* Display the user's first name */}
          <span className="ml-2 font-semibold text-darkblue">{userFirstName}</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;