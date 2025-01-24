import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Recovery = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email and simulate sending recovery email
        if (!email) {
            setError("Email is required");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        setError("");
        navigate("/verify-code", { state: { email } }); // Pass email to VerifyCode page
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md p-6 ">
                <div className="flex mb-20">
                    <button
                        onClick={() => navigate("/")}
                        className="text-gray-500 text-lg"
                    >
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <div className="w-full flex justify-center">
                        <h2 className="text-2xl font-bold text-center text-darkblue">Recovery</h2>
                    </div>
                </div>
                <p className="text-sm text-left font-semibold text-gray-600 mb-6">
                    Enter the email address associated with your account and we'll send
                    you a link to reset your password.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6 mb-10">
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 rounded-lg border bg-gray-200 ${error ? "border-red-500" : "border-gray-300"
                                } focus:outline-none focus:ring focus:ring-blue-300`}
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-darkblue text-white py-3 rounded-lg hover:bg-blue-900"
                    >
                        Continue
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <a href="#" className="text-darkblue hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Recovery;