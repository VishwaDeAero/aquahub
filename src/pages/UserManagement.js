import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import CreateUserModal from "../components/modals/CreateUserModal";
import { useNavigate } from "react-router-dom";
import DeactivateUserModal from "../components/DeactivateUserModal";

const UserManagement = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const navigate = useNavigate();
    const [users] = useState([
        { id: 1, name: "Christopher Brown", email: "chris.brown@example.com", userType: "Admin" },
        { id: 2, name: "Matthew Wilson", email: "matt.wilson@example.com", userType: "User" },
        { id: 3, name: "Emily Thompson", email: "emily.thompson@example.com", userType: "User" },
        { id: 4, name: "David Smith", email: "david.smith@example.com", userType: "Admin" },
        { id: 5, name: "Sarah Martinez", email: "sarah.martinez@example.com", userType: "User" },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openDeleteModal = (userId) => {
        setSelectedUserId(userId);
        setIsDeleteModalOpen(true);
    };

    const closDeleteModal = () => {
        setSelectedUserId(null);
        setIsDeleteModalOpen(false);
    };

    const handleSave = () => {
        // Add save logic here
        console.log("User saved!");
        closeModal();
    };

    const handleDeactivate = (reason, userId) => {
        console.log(`Deactivated User ID: ${userId} with Reason: ${reason}`);
        closDeleteModal();
    };


    return (
        <AppLayout title="User Management">
            <div className="p-6">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mb-6">
                    <button className="w-full sm:w-auto bg-darkblue text-white px-4 py-2 rounded-lg flex items-center justify-center shadow hover:bg-blue-900">
                        <i className="fa-solid fa-users mr-2"></i> User List
                    </button>
                    <button
                        onClick={openModal}
                        className="w-full sm:w-auto bg-darkblue text-white px-4 py-2 rounded-lg flex items-center justify-center shadow hover:bg-blue-900"
                    >
                        <i className="fas fa-plus-circle mr-2"></i> Create Admin/User
                    </button>
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
                                    key={user.id}
                                    className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}
                                >
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">{user.userType}</td>
                                    <td className="px-4 py-2 flex items-center space-x-4">
                                        <button onClick={() => navigate(`/user-management/${user.id}`)} className="text-blue-500 hover:underline flex items-center">
                                            <i className="fas fa-eye mr-1"></i> View
                                        </button>
                                        <button onClick={() => openDeleteModal(user.id)} className="text-red-500 hover:underline flex items-center">
                                            <i className="fas fa-ban mr-1"></i> Deactivate
                                        </button>
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
                    onClose={closDeleteModal}
                    onSave={handleDeactivate}
                    userId={selectedUserId}
                />

            </div>
        </AppLayout>
    );
};

export default UserManagement;