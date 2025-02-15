import React, { useState } from "react";

const DeactivateUserModal = ({ isOpen, onClose, onSave, userId }) => {
    const [reason, setReason] = useState("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-11/12 max-w-lg rounded-lg shadow-lg">
                {/* Header */}
                <div className="flex justify-between items-center border-b px-6 py-4">
                    <h2 className="text-xl text-sky-900 font-bold">Deactivate User</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Please add a reason
                    </label>
                    <textarea
                        className="w-full h-32 p-2 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        maxLength={80}
                        placeholder="Add your reason here..."
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    ></textarea>
                    <div className="text-sm text-gray-400 text-right">{reason.length}/80</div>

                    {/* Footer Buttons */}
                    <div className="flex justify-end mt-6 space-x-4">
                        <button
                            onClick={onClose}
                            className="w-1/3 px-4 py-2 bg-gray-200 text-sky-900 border border-sky-950 rounded-lg hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                onSave(reason, userId);
                                setReason(""); // Clear reason after saving
                            }}
                            className="w-1/3 px-4 py-2 bg-darkblue text-white rounded-lg hover:bg-blue-900"
                            disabled={!reason.trim()}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeactivateUserModal;