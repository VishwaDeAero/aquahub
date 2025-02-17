import React, { useState } from 'react'

function IndoorAlgaeMonitoringForm({ initialData = {}, onSubmit, onCancel }) {
    const defaultValues = {
        date: "",
        ph: "",
        salinity: "",
        temperature: "",
        prepare10ml: "",
        discarded10ml: "",
        prepare100ml: "",
        discarded100ml: "",
        prepare250ml: "",
        discarded250ml: "",
        prepare1L: "",
        discarded1L: "",
        prepare3L: "",
        discarded3L: "",
        prepare5L: "",
        discarded5L: "",
        prepare20L: "",
        discarded20L: "",
        bagSupply: "",
        cellCount: "",
        ciliate: "",
        platePreparation: "",
        vibrioLargeY: "",
        vibrioSmallY: "",
        vibrioGreen: "",
        vibrioLuminus: "",
        remarks: "",
    };

    // Merge default values with `initialData`
    const [formData, setFormData] = useState({ ...defaultValues, ...initialData });

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


    return (
        <>
            {/* Form */}
            <div className="grid grid-cols-1 gap-6 mb-10">

                {/* Single Fields */}
                {[
                    { label: "Date", name: "date", type: "date" },
                    { label: "PH", name: "ph", type: "number" },
                    { label: "Salinity", name: "salinity", type: "number" },
                    { label: "Temperature °C", name: "temperature", type: "number" },
                ].map(({ label, name, type }) => (
                    <div key={name} className="flex items-center">
                        <label className="w-1/3 text-gray-900">{label}</label>
                        <input
                            type={type}
                            name={name}
                            value={formData}
                            onChange={handleChange}
                            className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>
                ))}

                {/* Capacity Fields */}
                <div className="flex items-center mt-4">
                    <label className="w-1/3 text-gray-900"></label>
                    <div className="w-1/3 flex justify-around gap-6 items-center">
                        <label className="text-gray-900">Prepare</label>
                        <label className="text-gray-900">Discarded</label>

                    </div>
                </div>
                {[
                    "10ml",
                    "100ml",
                    "250ml",
                    "1L",
                    "3L",
                    "5L",
                    "20L"
                ].map((label) => (
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900">{label}</label>
                        <div className="w-1/3 flex justify-around gap-6 items-center">
                            <input
                                type="number"
                                name={`prepare${label.replace(/ /g, "")}`}
                                value={formData[`prepare${label.replace(/ /g, "")}`]}
                                onChange={handleChange}
                                className="w-2/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                            <input
                                type="number"
                                name={`discarded${label.replace(/ /g, "")}`}
                                value={formData[`discarded${label.replace(/ /g, "")}`]}
                                onChange={handleChange}
                                className="w-2/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    </div>
                ))}

                {/* Single Fields */}
                {[
                    { label: "Bag Supply", name: "bagSupply", type: "number" },
                    { label: "Cell Count", name: "cellCount", type: "number" },
                    { label: "Ciliate", name: "ciliate", type: "text" },
                    { label: "Plate Preparation", name: "platePreparation", type: "text" },
                ].map(({ label, name, type }) => (
                    <div key={name} className="flex items-center">
                        <label className="w-1/3 text-gray-900">{label}</label>
                        <input
                            type={type}
                            name={name}
                            value={formData.name}
                            onChange={handleChange}
                            className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>
                ))}

                {/* Vibrio Count */}
                <div className="flex items-center mt-4">
                    <label className="w-1/3 text-gray-900">Vibrio Count</label>
                    <div className="w-1/3 flex items-center">
                        <label className="w-2/6 text-gray-900 text-center">Large Y</label>
                        <input
                            type="number"
                            name="largeY"
                            value={formData.largeY}
                            onChange={handleChange}
                            className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                        <label className="w-2/6 text-gray-900 text-center">Small Y</label>
                        <input
                            type="number"
                            name="smallY"
                            value={formData.smallY}
                            onChange={handleChange}
                            className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900"></label>
                    <div className="w-1/3 flex items-center">
                        <label className="w-2/6 text-gray-900 text-center">Green</label>
                        <input
                            type="number"
                            name="vibrioGreen"
                            value={formData.vibrioGreen}
                            onChange={handleChange}
                            className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                        <label className="w-2/6 text-gray-900 text-center">Luminus</label>
                        <input
                            type="number"
                            name="vibrioLuminus"
                            value={formData.vibrioLuminus}
                            onChange={handleChange}
                            className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>
                </div>

                {/* Remarks Section */}
                <div className="mt-6">
                    <label className="text-lg w-full flex font-bold text-gray-700">Remarks</label>
                    <textarea
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleChange}
                        className="w-2/3 p-2 border border-gray-300 bg-slate-100 rounded-md h-24 mt-2"
                    ></textarea>
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
        </>
    )
}

export default IndoorAlgaeMonitoringForm