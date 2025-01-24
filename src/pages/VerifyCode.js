import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyCode = () => {
    const { state } = useLocation();
    const email = state?.email || "alpha...@gmail.com"; // Default message if no email is passed
    const [code, setCode] = useState(["", "", "", "", ""]);
    const navigate = useNavigate();

    const handleChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return; // Allow only digits
        const updatedCode = [...code];
        updatedCode[index] = value;
        setCode(updatedCode);

        // Focus the next input if value is entered
        if (value && index < code.length - 1) {
            document.getElementById(`code-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && code[index] === "" && index > 0) {
            // Move to previous input on Backspace
            document.getElementById(`code-${index - 1}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullCode = code.join("");

        if (fullCode.length === 5) {
            // Simulate verification
            alert(`Code Verified: ${fullCode}`);
            navigate("/reset-password"); // Redirect to password reset page
        } else {
            alert("Please enter a complete 5-digit code.");
        }
    };

    const handleResend = () => {
        alert("Verification email resent.");
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md p-6">
                <div className="flex mb-20">
                    <button
                        onClick={() => navigate("/recovery")}
                        className="text-gray-500 text-lg"
                    >
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <div className="w-full flex justify-center">
                        <h2 className="text-2xl font-bold text-center text-darkblue">Check your email</h2>
                    </div>
                </div>
                <p className="text-sm text-center text-gray-600 mb-6">
                    We sent a reset link to <strong>{email}</strong>. Enter the
                    5-digit code mentioned in the email.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex justify-between">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                id={`code-${index}`}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-14 h-14 text-center text-2xl font-semibold border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-darkblue text-white py-3 rounded-lg hover:bg-blue-900"
                    >
                        Verify code
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-6">
                    Haven’t got the email yet?{" "}
                    <span
                        onClick={handleResend}
                        className="text-darkblue cursor-pointer hover:underline"
                    >
                        Resend email
                    </span>
                </p>
            </div>
        </div>
    );
};

export default VerifyCode;