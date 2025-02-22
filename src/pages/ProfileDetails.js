import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import { Link } from "react-router-dom";
import ChangePasswordModal from "../components/modals/changePasswordModal";

const ProfileDetails = () => {
    // State to manage edit mode
    const [isEditable, setIsEditable] = useState(false);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    // Mock user data
    const [user, setUser] = useState({
        title: "Manager",
        firstName: "Lakshan",
        lastName: "Heena",
        phoneNumber: "+94 71 12 34 567",
        email: "lakshanheena1@gmail.com",
    });

    // Toggle edit mode
    const toggleEditMode = () => setIsEditable((prev) => !prev);

    return (
        <AppLayout title="My Profile">
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
                            <img className="" src="img/profile-img.png" />
                        </div>
                        <h2 className="text-lg font-bold">{`${user.firstName} ${user.lastName}`}</h2>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    {/* User Details Section */}
                    <div className="flex-1 pl-12 p-6">
                        <form>
                            <div className="grid grid-cols-2 gap-8 mb-4">

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
                                    <Link to="/">
                                        <p className="mt-2 text-sky-600 text-sm text-end">Verify Phone Number</p>
                                    </Link>
                                </div>

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
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between mb-10">
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

                            <div className="grid grid-cols-2 gap-8 mb-6">
                                {/* Password */}
                                <div className="">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            placeholder="Yoor password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full p-2.5 rounded-md border shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-3 text-gray-600"
                                        >
                                            <i className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                                        </button>
                                    </div>
                                    <button onClick={()=>setModalOpen(true)} type="button" className="mt-2 w-full text-sky-600 text-sm text-end">Change Password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <ChangePasswordModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </AppLayout>
    );
};

export default ProfileDetails;