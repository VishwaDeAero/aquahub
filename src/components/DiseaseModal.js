import React, { useState } from "react";

const DiseaseModal = ({ onClose, onSave }) => {
    const [diseaseName, setDiseaseName] = useState("");
    const [diseaseSymptoms, setDiseaseSymptoms] = useState("");

    const handleSave = () => {
        if (diseaseName.trim() === "") return;
        onSave(diseaseName);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md w-96 shadow-lg border border-blue-500">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-blue-900">Disease</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✖</button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="text-gray-900">Name</label>
                        <input
                            type="text"
                            value={diseaseName}
                            onChange={(e) => setDiseaseName(e.target.value)}
                            className="w-full p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="text-gray-900">Symptoms</label>
                        <textarea
                            value={diseaseSymptoms}
                            onChange={(e) => setDiseaseSymptoms(e.target.value)}
                            className="w-full p-2 border border-gray-300 bg-slate-100 rounded-md h-24"
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-4 space-x-4">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Clear</button>
                    <button onClick={handleSave} className="px-4 py-2 bg-sky-900 text-white rounded-lg hover:bg-blue-900">Save</button>
                </div>
            </div>
        </div>
    );
};

export default DiseaseModal;