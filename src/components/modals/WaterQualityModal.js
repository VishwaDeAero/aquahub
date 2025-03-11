import React from 'react'

function WaterQualityModal({ isOpen, onClose, onSave, parameter, setParameter, value, setValue }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-11/12 max-w-lg rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center border-b px-6 py-4">
                    <h2 className="text-xl text-sky-900 font-bold">Add Water Quality</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="p-6">
                    {/* Form */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            onSave();
                        }}
                    >
                        <div className="grid grid-cols-1 gap-2 md:gap-4">
                            {/* Parameter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Parameter
                                </label>
                                <input
                                    type="text"
                                    value={parameter}
                                    onChange={(e) => setParameter(e.target.value)}
                                    className="mt-1 block w-full border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            {/* Value */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Value
                                </label>
                                <input
                                    type="text"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    className="mt-1 block w-full border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-end mt-6 space-y-2 sm:space-y-0 sm:space-x-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-full sm:w-1/5 px-4 py-2 border border-sky-900 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="w-full sm:w-1/5 px-4 py-2 bg-darkblue text-white rounded-lg hover:bg-blue-900"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WaterQualityModal