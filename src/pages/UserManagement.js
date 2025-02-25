import React, { useState, useEffect } from "react";
import AppLayout from "../components/layouts/AppLayout";
import CreateUserModal from "../components/modals/CreateUserModal";
import { useNavigate } from "react-router-dom";
import DeactivateUserModal from "../components/DeactivateUserModal";
import axios from "axios";

const UserManagement = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [loggedInUserRole, setLoggedInUserRole] = useState(""); // State to store logged-in user's role
  const navigate = useNavigate();

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

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setUsers(response.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };
    fetchUsers();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeleteModal = (userId) => {
    setSelectedUserId(userId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedUserId(null);
    setIsDeleteModalOpen(false);
  };

  const handleSave = () => {
    // Add save logic here
    console.log("User saved!");
    closeModal();
  };

  const handleDeactivate = async (reason, userId) => {
    try {
      await axios.delete(`http://localhost:5001/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        data: { reason }, // Pass the reason in the request body
      });
      console.log(`Deactivated User ID: ${userId} with Reason: ${reason}`);
      closeDeleteModal();
      // Refresh the user list
      const response = await axios.get("http://localhost:5001/api/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      setUsers(response.data);
    } catch (err) {
      console.error("Failed to deactivate user", err);
    }
  };

  return (
    <AppLayout title="User Management">
      <div className="p-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mb-6">
          <button className="w-full sm:w-auto bg-darkblue text-white px-4 py-2 rounded-lg flex items-center justify-center shadow hover:bg-blue-900">
            <i className="fa-solid fa-users mr-2"></i> User List
          </button>
          {loggedInUserRole === "admin" && (
            <button
              onClick={openModal}
              className="w-full sm:w-auto bg-darkblue text-white px-4 py-2 rounded-lg flex items-center justify-center shadow hover:bg-blue-900"
            >
              <i className="fas fa-plus-circle mr-2"></i> Create Admin/User
            </button>
          )}
        </div>

        {/* User Table */}
        <div className="bg-white shadow-md rounded-lg overflow-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Users</th>
                <th className="px-4 py-2 text-left">Emails</th>
                <th className="px-4 py-2 text-left">User Type</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}
                >
                  <td className="px-4 py-2">{`${user.firstName} ${user.lastName}`}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2 flex items-center space-x-4">
                    <button onClick={() => navigate(`/user-management/${user._id}`)} className="text-blue-500 hover:underline flex items-center">
                      <i className="fas fa-eye mr-1"></i> View
                    </button>
                    {loggedInUserRole === "admin" && (
                      <button onClick={() => openDeleteModal(user._id)} className="text-red-500 hover:underline flex items-center">
                        <i className="fas fa-ban mr-1"></i> Deactivate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Component */}
        <CreateUserModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={handleSave}
        />

        {/* Deactivate User Modal */}
        <DeactivateUserModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onSave={handleDeactivate}
          userId={selectedUserId}
        />
      </div>
    </AppLayout>
  );
};

export default UserManagement;