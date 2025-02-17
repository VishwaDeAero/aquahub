import React, { useState } from 'react'
import DiseaseModal from "../DiseaseModal";

function DiseaseManagementForm({ initialData = {}, onSubmit, onCancel }) {
    const defaultValues = {
        broodstock: "",
        date: "",
        sampleCodes: "",
        section: "",
        tankNumber: "",
        disease: "",
        diseases: ["Disease 1", "Disease 2", "Disease 3"], // Allows dynamic addition of diseases
        bacterial: false,
        viral: false,
        parasitic: false,
        symptoms: "",
        treatmentChemical: false,
        chlorine: false,
        formaline: false,
        iodine: false,
        kmno4: false,
        treatmentPhysical: false,
    };

    // Merge default values with `initialData`
    const [formData, setFormData] = useState({ ...defaultValues, ...initialData });

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Hande Submit
    const handleSubmit = () => {
        onSubmit(formData);
    };

    // Handle adding a new disease
    const handleAddDisease = (newDisease) => {
        setFormData((prevData) => ({
            ...prevData,
            diseases: [...prevData.diseases, newDisease],
            disease: newDisease, // Automatically select the newly added disease
        }));
    };
    return (
        <>
            {/* Form */}
            <div className="grid grid-cols-1 gap-6 mb-10">

                {/* Broodstock Dropdown */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Broodstock</label>
                    <select
                        name="broodstock"
                        value={formData.broodstock}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                    >
                        <option value="">Select Broodstock</option>
                        <option value="Type1">Type 1</option>
                        <option value="Type2">Type 2</option>
                        <option value="Type3">Type 3</option>
                    </select>
                </div>

                {/* Date */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Sample Codes */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Sample Codes</label>
                    <input
                        type="text"
                        name="sampleCodes"
                        value={formData.sampleCodes}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Section Dropdown */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Section</label>
                    <select
                        name="section"
                        value={formData.section}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                    >
                        <option value="">Select Section</option>
                        <option value="Type1">Type 1</option>
                        <option value="Type2">Type 2</option>
                        <option value="Type3">Type 3</option>
                    </select>
                </div>

                {/* Tank Number */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Tank Number</label>
                    <input
                        type="number"
                        name="tankNumber"
                        value={formData.tankNumber}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Disease Dropdown */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Disease</label>
                    <select
                        name="disease"
                        value={formData.disease}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                    >
                        <option value="">Select Disease</option>
                        {(formData.diseases).map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Add More Disease */}
                <div className="flex items-center">
                    <button type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="text-sky-900 text-sm flex items-center">
                        <span className="me-2 font-bold text-sky-900">Add More </span><i class="fa-solid fa-plus border border-sky-900 rounded-full p-1"></i>
                    </button>
                </div>

                {/* Variety of Disease */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Variety of Disease</label>
                    <div className="w-1/3 flex items-center justify-around">
                        {["Bacterial", "Viral", "Parasitic"].map((disease) => (
                            <div key={disease} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name={disease.toLowerCase()}
                                    checked={formData[disease.toLowerCase()]}
                                    onChange={handleChange}
                                />
                                <label className="text-gray-900">{disease}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Symptoms */}
                <div className="">
                    <label className="w-full flex font-bold text-gray-700">Symptoms (Optional)</label>
                    <textarea
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleChange}
                        className="w-2/3 p-2 border border-gray-300 bg-slate-100 rounded-md h-24 mt-2"
                    ></textarea>
                </div>

                {/* Treatment Section */}
                <div className="flex items-top">
                    <label className="w-1/4 text-gray-900">Treatment</label>
                    <div className="w-1/4">
                        <input
                            type="checkbox"
                            name="treatmentChemical"
                            checked={formData.treatmentChemical}
                            onChange={handleChange}
                        />
                        <label className="text-gray-900 ml-2">Chemical</label>
                    </div>
                    {formData.treatmentChemical && (
                        <div className="w-1/4">
                            {["Chlorine", "Formaline", "Iodine", "KMNO4"].map((chemical) => (
                                <div key={chemical}>
                                    <input
                                        type="checkbox"
                                        name={chemical.toLowerCase()}
                                        checked={formData[chemical.toLowerCase()]}
                                        onChange={handleChange}
                                    />
                                    <label className="text-gray-900 ml-2">{chemical}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex items-center">
                    <label className="w-1/4 text-gray-900"></label>
                    <div className="w-1/4">
                        <input
                            type="checkbox"
                            name="treatmentPhysical"
                            checked={formData.treatmentPhysical}
                            onChange={handleChange}
                        />
                        <label className="text-gray-900 ml-2">Physical</label>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6 space-x-4">
                <button onClick={onCancel} className="px-4 py-2 w-32 border border-sky-900 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                    Clear
                </button>
                <button onClick={handleSubmit} className="px-4 py-2 w-32 bg-sky-900 text-white rounded-lg hover:bg-blue-900">
                    Save
                </button>
            </div>

            {/* Disease Modal */}
            {isModalOpen && (
                <DiseaseModal
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleAddDisease}
                />
            )}
        </>
    )
}

export default DiseaseManagementForm