import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import DeactivateUserModal from "../components/DeactivateUserModal";

const UserDetails = () => {
    // State to manage edit mode
    const [isEditable, setIsEditable] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleDeactivate = (reason) => {
        console.log(`Deactivated user with reason: ${reason}`);
        closeModal();
    };

    // Mock user data
    const [user, setUser] = useState({
        title: "Manager",
        firstName: "Thanuka",
        lastName: "Mendis",
        phoneNumber: "+94 71 12 34 567",
        email: "thankukamenda1234@gmail.com",
    });

    // Toggle edit mode
    const toggleEditMode = () => setIsEditable((prev) => !prev);

    return (
        <AppLayout title="User Details">
            <div className="p-6">
                <div className="bg-white shadow-md rounded-lg p-6 flex">
                    {/* User Profile Section */}
                    <div className="flex flex-col items-center border-r pr-6">
                        <div className="w-full flex justify-end">
                            <button
                                onClick={toggleEditMode}
                                className="text-sky-900 hover:text-blue-700"
                            >
                                <i className="fas fa-pen text-xl"></i>
                            </button>
                        </div>
                        <div className="w-36 h-36 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-user text-gray-500 text-6xl"></i>
                        </div>
                        <h2 className="text-lg font-bold">{`${user.firstName} ${user.lastName}`}</h2>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    {/* User Details Section */}
                    <div className="flex-1 pl-12 p-6">
                        <form>
                            <div className="grid grid-cols-1 gap-8">
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
                            <div className="flex justify-between mt-6">
                                <button
                                    type="button"
                                    onClick={openModal}
                                    className="flex items-center px-4 py-2 bg-red-100 text-red-500 rounded-lg hover:bg-red-200"
                                >
                                    <i className="fas fa-user-times mr-2"></i> Deactivate User
                                </button>

                                {isEditable && (
                                    <div className="flex space-x-4 w-2/5">
                                        <button
                                            type="button"
                                            onClick={toggleEditMode}
                                            className="px-4 py-2 w-full bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 w-full bg-sky-900 text-white rounded-lg hover:bg-blue-600"
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
                <DeactivateUserModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSave={handleDeactivate}
                />
            </div>
        </AppLayout>
    );
};

export default UserDetails;