import React from "react";

const CreateUserModal = ({ isOpen, onClose, onSave }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-11/12 max-w-4xl rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center border-b px-6 py-4">
                    <h2 className="text-xl text-sky-900 font-bold">Create Admin/User</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="p-6">
                    {/* Form */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            onSave();
                        }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {/* First Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            {/* Last Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            {/* User Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    User Type
                                </label>
                                <select
                                    className="mt-1 block w-full border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className="flex justify-end mt-6 space-x-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-1/5 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="w-1/5 px-4 py-2 bg-darkblue text-white rounded-lg hover:bg-blue-900"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateUserModal;