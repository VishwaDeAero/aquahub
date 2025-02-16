import React, { useState } from 'react'

function HatchingMonitoringForm({ initialData = {}, onSubmit, onCancel }) {
    const defaultValues = {
        broodstock: "",
        date: "",
        spawningTankNo: "",
        hatchingTankNo: "",
        eggQuality: "",
        numberOfEggs: "",
        ph: "",
        salinity: "",
        temperature: "",
        numberOfNauplii: "",
        naupliiStage: "",
        hatchingRate: "",
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

                {/* Date Picker */}
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

                {/* Spawning Tank No */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Spawning Tank No</label>
                    <input
                        type="number"
                        name="spawningTankNo"
                        value={formData.spawningTankNo}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Hatching Tank No */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Hatching Tank No</label>
                    <input
                        type="number"
                        name="hatchingTankNo"
                        value={formData.hatchingTankNo}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Egg Quality (%) */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Egg Quality (%)</label>
                    <input
                        type="number"
                        name="eggQuality"
                        value={formData.eggQuality}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Number of Eggs */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Number of Eggs</label>
                    <input
                        type="number"
                        name="numberOfEggs"
                        value={formData.numberOfEggs}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Standard Text Inputs */}
                {[
                    { label: "PH", name: "ph" },
                    { label: "Salinity", name: "salinity" },
                    { label: "Temperature °C", name: "temperature" },
                ].map(({ label, name }) => (
                    <div key={name} className="flex items-center">
                        <label className="w-1/3 text-gray-900">{label}</label>
                        <input
                            type="text"
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>
                ))}

                {/* Number of Nauplii */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Number of Naupilli</label>
                    <input
                        type="number"
                        name="numberOfNauplii"
                        value={formData.numberOfNauplii}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Nauplii Stage */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Naupilli Stage</label>
                    <input
                        type="text"
                        name="naupliiStage"
                        value={formData.naupliiStage}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Hatching Rate */}
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-900">Hatching Rate</label>
                    <input
                        type="number"
                        name="hatchingRate"
                        value={formData.hatchingRate}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
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

export default HatchingMonitoringForm