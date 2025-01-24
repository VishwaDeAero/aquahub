import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordResetConfirm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/reset-password");
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md p-6 ">
                <div className="flex mb-6">
                    <button
                        onClick={() => navigate("/verify-code")}
                        className="text-gray-500 text-lg"
                    >
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <div className="w-full flex justify-start">
                        <h2 className="ml-4 text-2xl font-bold text-center text-darkblue">Password Reset</h2>
                    </div>
                </div>
                <p className="text-sm text-left font-semibold text-gray-600 mb-6">
                    Your password has been successfully reset. Click
                    confirm to set a new password.
                </p>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-darkblue text-white font-semibold py-3 rounded-lg hover:bg-blue-900"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default PasswordResetConfirm;