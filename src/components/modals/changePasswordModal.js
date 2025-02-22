import React, { useState, useEffect, useRef } from "react";
import mainBlueLogo from "../../assets/img/main-logo-blue.png";

const ChangePasswordModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [selectedMethod, setSelectedMethod] = useState("");
    const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [resendTimer, setResendTimer] = useState(59);
    const [canResend, setCanResend] = useState(false);
    const [showPassword, setShowPassword] = useState({ new: false, confirm: false });

    // Handle radio button selection
    const handleSelection = (value) => {
        setSelectedMethod(value);
        setError("");
    };

    // Validate and move to next step
    const handleSendCode = () => {
        if (!selectedMethod) {
            setError("Please select a verification method.");
            return;
        }
        setStep(2);
        startResendTimer();
    };

    // Start timer for resend code
    const startResendTimer = () => {
        setResendTimer(59);
        setCanResend(false);
    };

    useEffect(() => {
        if (resendTimer > 0) {
            const timer = setInterval(() => {
                setResendTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setCanResend(true);
        }
    }, [resendTimer]);

    // Handle verification code input
    const handleCodeChange = (index, value) => {
        if (!/^\d?$/.test(value)) return; // Allow only digits
        let newCode = [...verificationCode];
        newCode[index] = value;
        setVerificationCode(newCode);

        // Auto-focus next input
        if (value !== "" && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Handle backspace in verification code
    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace" && verificationCode[index] === "" && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // Resend code functionality
    const handleResendCode = () => {
        if (canResend) {
            alert("Verification code has been resent!");
            startResendTimer();
        }
    };

    // Validate submission
    const handleSubmit = () => {
        if (verificationCode.some((num) => num === "")) {
            setError("Please enter the complete verification code.");
            return;
        }
        if (newPassword.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        alert("Password successfully changed!");
        onClose();
    };

    // Handle password visibility toggle
    const togglePasswordVisibility = (field) => {
        setShowPassword({ ...showPassword, [field]: !showPassword[field] });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-11/12 sm:w-96 rounded-lg shadow-lg p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                >
                    &times;
                </button>

                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img src={mainBlueLogo} alt="AquaHub" className="h-14" />
                </div>

                {/* Step 1: Select Verification Method */}
                {step === 1 && (
                    <>
                        <h2 className="text-xl font-semibold text-gray-900 mb-1">
                            Change Password
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Please select a method we will send the verification code
                        </p>

                        <div
                            className="flex items-center space-x-2 cursor-pointer hover:text-sky-700"
                            onClick={() => handleSelection("email")}
                        >
                            <input
                                type="radio"
                                name="verification"
                                checked={selectedMethod === "email"}
                                className="form-radio h-4 w-4 text-sky-900"
                                readOnly
                            />
                            <span className="text-gray-900">l*********1@gmail.com</span>
                        </div>
                        {error && <p className="text-red-700 text-sm mt-2">{error}</p>}

                        <button
                            className="w-full mt-6 bg-sky-700 text-white font-semibold py-3 rounded-md hover:bg-sky-900 transition"
                            onClick={handleSendCode}
                        >
                            Send Code
                        </button>
                    </>
                )}

                {/* Step 2: Enter Code & New Password */}
                {step === 2 && (
                    <>
                        <h2 className="text-xl font-semibold text-gray-900 mb-1">
                            Create New Password
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Please enter the verification code
                        </p>

                        {/* Verification Code Inputs */}
                        <div className="flex justify-center space-x-2 mb-2">
                            {verificationCode.map((num, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={num}
                                    maxLength={1}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className="w-10 h-10 text-center text-lg border rounded-md focus:ring-2 focus:ring-sky-500"
                                    onChange={(e) => handleCodeChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                />
                            ))}
                        </div>

                        {/* Resend Code Timer */}
                        <p className="text-center text-sm text-gray-600 mb-6">
                            Don’t receive code?{" "}
                            <span
                                className={`${canResend ? "text-sky-700 cursor-pointer hover:underline" : "text-red-700"
                                    }`}
                                onClick={handleResendCode}
                            >
                                Resend code {resendTimer > 0 ? `0:${resendTimer}` : ""}
                            </span>
                        </p>

                        {/* New Password Input */}
                        <div className="mt-4">
                            <label className="block font-semibold mb-1">New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword.new ? "text" : "password"}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full p-2 border rounded-md pr-10"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-3 text-gray-500"
                                    onClick={() => togglePasswordVisibility("new")}
                                >
                                    <i className={`fas ${showPassword.new ? "fa-eye" : "fa-eye-slash"}`}></i>
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Input */}
                        <div className="mt-4">
                            <label className="block font-semibold mb-1">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword.confirm ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full p-2 border rounded-md pr-10"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-3 text-gray-500"
                                    onClick={() => togglePasswordVisibility("confirm")}
                                >
                                    <i className={`fas ${showPassword.confirm ? "fa-eye" : "fa-eye-slash"}`}></i>
                                </button>
                            </div>
                        </div>

                        <button
                            className="w-full mt-6 bg-sky-700 text-white font-semibold py-3 rounded-md hover:bg-sky-900 transition"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChangePasswordModal;