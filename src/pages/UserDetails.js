import React, { useState, useEffect } from "react";
import AppLayout from "../components/layouts/AppLayout";
import DeactivateUserModal from "../components/DeactivateUserModal";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [isEditable, setIsEditable] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    title: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    role: "",
  });
  const [loggedInUserRole, setLoggedInUserRole] = useState(""); // State to store logged-in user's role

  // Fetch the logged-in user's role
  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/auth/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setLoggedInUserRole(response.data.role); // Set the logged-in user's role
      } catch (err) {
        console.error("Failed to fetch logged-in user", err);
      }
    };
    fetchLoggedInUser();
  }, []);

  // Fetch user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/users/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setUser(response.data); // Set the user's details
      } catch (err) {
        console.error("Failed to fetch user details", err);
      }
    };
    fetchUser();
  }, [id]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDeactivate = async (reason) => {
    try {
      await axios.delete(`http://localhost:5001/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        data: { reason }, // Pass the reason in the request body
      });
      console.log(`Deactivated user with reason: ${reason}`);
      closeModal();
    } catch (err) {
      console.error("Failed to deactivate user", err);
    }
  };

  const toggleEditMode = () => setIsEditable((prev) => !prev);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5001/api/users/${id}`, user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      console.log("User updated successfully");
      toggleEditMode();
    } catch (err) {
      console.error("Failed to update user", err);
    }
  };

  return (
    <AppLayout title="User Details">
      <div className="p-6">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row">
          {/* User Profile Section */}
          <div className="flex flex-col items-center md:border-r md:pr-6 w-full md:w-1/3">
            <div className="w-full flex justify-end md:hidden">
              {loggedInUserRole === "admin" && (
                <button
                  onClick={toggleEditMode}
                  className="text-sky-900 hover:text-blue-700"
                >
                  <i className="fas fa-pen text-xl"></i>
                </button>
              )}
            </div>
            <div className="w-36 h-36 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-user text-gray-500 text-6xl"></i>
            </div>
            <h2 className="text-lg font-bold">{`${user.firstName} ${user.lastName}`}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
            <div className="hidden md:block mt-4">
              {loggedInUserRole === "admin" && (
                <button
                  onClick={toggleEditMode}
                  className="text-sky-900 hover:text-blue-700"
                >
                  <i className="fas fa-pen text-xl"></i>
                </button>
              )}
            </div>
          </div>

          {/* User Details Section */}
          <div className="flex-1 md:pl-12 p-6">
            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
              <div className="grid grid-cols-1 gap-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    value={user.title}
                    disabled={!isEditable}
                    className={`mt-1 block w-full border p-2.5 rounded-md border-gray-300 shadow-sm ${isEditable ? "focus:border-blue-500 focus:ring-blue-500" : "bg-gray-100"
                      }`}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, title: e.target.value }))
                    }
                  />
                </div>

                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={user.firstName}
                    disabled={!isEditable}
                    className={`mt-1 block w-full border p-2.5 rounded-md border-gray-300 shadow-sm ${isEditable ? "focus:border-blue-500 focus:ring-blue-500" : "bg-gray-100"
                      }`}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, firstName: e.target.value }))
                    }
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={user.lastName}
                    disabled={!isEditable}
                    className={`mt-1 block w-full border p-2.5 rounded-md border-gray-300 shadow-sm ${isEditable ? "focus:border-blue-500 focus:ring-blue-500" : "bg-gray-100"
                      }`}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, lastName: e.target.value }))
                    }
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={user.phoneNumber}
                    disabled={!isEditable}
                    className={`mt-1 block w-full border p-2.5 rounded-md border-gray-300 shadow-sm ${isEditable ? "focus:border-blue-500 focus:ring-blue-500" : "bg-gray-100"
                      }`}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, phoneNumber: e.target.value }))
                    }
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
                {loggedInUserRole === "admin" && (
                  <button
                    type="button"
                    onClick={openModal}
                    className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-red-100 text-red-500 rounded-lg hover:bg-red-200"
                  >
                    <i className="fas fa-user-times mr-2"></i> Deactivate User
                  </button>
                )}

                {isEditable && loggedInUserRole === "admin" && (
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-2/5">
                    <button
                      type="button"
                      onClick={toggleEditMode}
                      className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-sky-900 text-white rounded-lg hover:bg-blue-600"
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Deactivate User Modal */}
        <DeactivateUserModal isOpen={isModalOpen} onClose={closeModal} onSave={handleDeactivate} />
      </div>
    </AppLayout>
  );
};

export default UserDetails;