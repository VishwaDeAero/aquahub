import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md p-6">
        <button
          onClick={() => navigate("/reset-password")}
          className="text-gray-500 text-lg mb-6"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4">
            <i className="fas fa-check text-green-500 text-3xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-darkblue mb-6">Successful</h2>
          <p className="text-sm font-medium text-gray-600 mb-6">
            Congratulations! Your password has been changed. Click continue to
            login.
          </p>
          <button
            onClick={handleContinue}
            className="w-1/2 bg-darkblue text-white font-semibold py-3 rounded-lg hover:bg-blue-900"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;