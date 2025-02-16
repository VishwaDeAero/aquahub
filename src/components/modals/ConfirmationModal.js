import React from "react";

const ConfirmationModal = ({ isOpen, message, onClose, onConfirm }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold">Confirmation</h2>
                <p className="text-gray-900 mb-10">{message}</p>
                {/* Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 w-full border border-sky-900 bg-gray-200 text-sky-900 rounded-lg hover:bg-gray-300"
                    >
                        No
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 w-full bg-sky-900 text-white rounded-lg hover:bg-blue-900"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;