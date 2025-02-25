import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { state } = useLocation();
  const resetToken = state?.resetToken; // Get the reset token from the location state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      // Reset the password
      await axios.post("http://localhost:5001/api/auth/reset-password", {
        token: resetToken, // Include the reset token
        password,
      });

      // Redirect to success page
      navigate("/success");
    } catch (err) {
      setError("Failed to reset password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6">
        <div className="flex mb-6">
          <button
            onClick={() => navigate("/password-reset-confirm")}
            className="text-gray-500 text-lg"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <div className="w-full flex justify-start">
            <h2 className="ml-4 text-2xl font-bold text-center text-darkblue">Set a new password</h2>
          </div>
        </div>
        <p className="text-sm text-start text-gray-600 mb-6">
          Create a new password. Ensure it differs from previous ones for
          security.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
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
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-600"
              >
                <i className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
              </button>
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-600"
              >
                <i
                  className={`fas ${showConfirmPassword ? "fa-eye" : "fa-eye-slash"
                    }`}
                ></i>
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-darkblue text-white font-semibold py-3 rounded-lg hover:bg-blue-900"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;