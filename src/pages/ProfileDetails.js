import React, { useState, useEffect } from "react";
import AppLayout from "../components/layouts/AppLayout";
import { Link } from "react-router-dom";
import ChangePasswordModal from "../components/modals/ConfirmPasswordModal";
import axios from "axios"; // Import axios for API calls

const ProfileDetails = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState({
        _id: "", // Add _id for updates
        title: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    });

    // Fetch user profile data
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("authToken"); // Get the token from local storage
                const response = await axios.get("http://localhost:5001/api/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data); // Set the fetched user data
            } catch (error) {
                console.error("Error fetching profile:", error);
                alert("Failed to fetch profile. Please try again.");
            }
        };

        fetchProfile();
    }, []);

    // Toggle edit mode
    const toggleEditMode = () => setIsEditable((prev) => !prev);

    // Handle saving updated profile
    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("authToken");
            const response = await axios.put(
                `http://localhost:5001/api/users/${user._id}`, // Use the user's ID
                user, // Send the updated user data
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Profile updated successfully:", response.data);
            setIsEditable(false); // Exit edit mode
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile. Please try again.");
        }
    };

    return (
        <AppLayout title="My Profile">
            <div className="p-4 md:p-6">
                <div className="bg-white shadow-md rounded-lg p-4 md:p-6 flex flex-col md:flex-row">
                    {/* User Profile Section */}
                    <div className="flex flex-col items-center border-b md:border-b-0 md:border-r md:pr-6 pb-6 md:pb-0 w-full md:w-auto">
                        <div className="w-full flex justify-end">
                            <button
                                onClick={toggleEditMode}
                                className="text-sky-900 hover:text-blue-700"
                            >
                                <i className="fas fa-pen text-xl"></i>
                            </button>
                        </div>
                        <div className="w-24 h-24 md:w-36 md:h-36 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                            <img className="" src="img/profile-img.png" alt="Profile" />
                        </div>
                        <h2 className="text-lg font-bold">{`${user.firstName} ${user.lastName}`}</h2>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    {/* User Details Section */}
                    <div className="flex-1 px-4 md:pl-12 py-4 md:py-6 w-full">
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4">
                                {/* First Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        value={user.firstName}
                                        disabled={!isEditable}
                                        className={`mt-1 block w-full border p-2.5 rounded-md border-gray-300 shadow-sm ${isEditable ? "focus:border-blue-500 focus:ring-blue-500" : "bg-gray-100"}`}
                                        onChange={(e) => setUser((prev) => ({ ...prev, firstName: e.target.value }))}
                                    />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        value={user.lastName}
                                        disabled={!isEditable}
                                        className={`mt-1 block w-full border p-2.5 rounded-md border-gray-300 shadow-sm ${isEditable ? "focus:border-blue-500 focus:ring-blue-500" : "bg-gray-100"}`}
                                        onChange={(e) => setUser((prev) => ({ ...prev, lastName: e.target.value }))}
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="text"
                                        value={user.phoneNumber}
                                        disabled={!isEditable}
                                        className={`mt-1 block w-full border p-2.5 rounded-md border-gray-300 shadow-sm ${isEditable ? "focus:border-blue-500 focus:ring-blue-500" : "bg-gray-100"}`}
                                        onChange={(e) => setUser((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                                    />
                                    <Link to="/">
                                        <p className="mt-2 text-sky-600 text-sm text-end">Verify Phone Number</p>
                                    </Link>
                                </div>

                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        type="text"
                                        value={user.title}
                                        disabled={!isEditable}
                                        className={`mt-1 block w-full border p-2.5 rounded-md border-gray-300 shadow-sm ${isEditable ? "focus:border-blue-500 focus:ring-blue-500" : "bg-gray-100"}`}
                                        onChange={(e) => setUser((prev) => ({ ...prev, title: e.target.value }))}
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            {isEditable && (
                                <div className="flex space-x-4 w-full md:w-2/5 mb-6">
                                    <button type="button" onClick={toggleEditMode} className="px-4 py-2 w-full bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Cancel</button>
                                    <button type="submit" onClick={handleSave} className="px-4 py-2 w-full bg-sky-900 text-white rounded-lg hover:bg-blue-600">Save</button>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4">
                                {/* Password */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                    <div className="relative">
                                        <input type={showPassword ? "text" : "password"} placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2.5 rounded-md border shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-blue-300" />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-600">
                                            <i className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                                        </button>
                                    </div>
                                    <button onClick={() => setModalOpen(true)} type="button" className="mt-2 w-full text-sky-600 text-sm text-end">Change Password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ChangePasswordModal isOpen={modalOpen} onClose={() => setModalOpen(false)} email={user.email} />
        </AppLayout>
    );
};

export default ProfileDetails;