import React from "react";

const FormModal = ({ isOpen, title, form, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md w-full max-w-4xl shadow-lg border border-blue-500">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h2 className="text-lg font-bold text-sky-900">{title}</h2>
                    <button onClick={onClose} className="text-sky-900 hover:text-gray-700">
                        <i className="text-xl fa-regular fa-circle-xmark"></i>
                    </button>
                </div>

                {/* Pass the form as a prop */}
                <div className="p-6 overflow-y-auto max-h-[75vh]">{form}</div>
            </div>
        </div>
    );
};

export default FormModal;