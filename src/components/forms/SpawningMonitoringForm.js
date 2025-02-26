import React, { useState } from 'react'

function SpawningMonitoringForm({ initialData = {}, onSubmit, onCancel }) {
    const defaultValues = {
        broodstock: "",
        date: "",
        tankNumber: "",
        maturation: "",
        wild: "",
        numberOfSpawner: "",
        numberOfSpawn: "",
        pcrResult: "",
        ph: "",
        salinity: "",
        temperature: "",
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                    <label className="text-gray-900">Broodstock</label>
                    <select
                        name="broodstock"
                        value={formData.broodstock}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 bg-slate-100 rounded-md"
                    >
                        <option value="">Select Broodstock</option>
                        <option value="Type1">Type 1</option>
                        <option value="Type2">Type 2</option>
                        <option value="Type3">Type 3</option>
                    </select>
                </div>

                {/* Date Picker */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                    <label className="text-gray-900">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Tank Number */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                    <label className="text-gray-900">Tank Number</label>
                    <input
                        type="number"
                        name="tankNumber"
                        value={formData.tankNumber}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Maturation & Wild Fields (Both as Number Inputs) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                    <label className="text-gray-900"></label>
                    <div className="flex items-center">
                        <label className="w-2/6 text-gray-900 text-center">Maturation</label>
                        <input
                            type="number"
                            name="maturation"
                            value={formData.maturation}
                            onChange={handleChange}
                            className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                        <label className="w-2/6 text-gray-900 text-center">Wild</label>
                        <input
                            type="number"
                            name="wild"
                            value={formData.wild}
                            onChange={handleChange}
                            className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>
                </div>

                {/* Number of Spawner */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                    <label className="text-gray-900">Number of Spawner</label>
                    <input
                        type="number"
                        name="numberOfSpawner"
                        value={formData.numberOfSpawner}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Number of Spawn */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                    <label className="text-gray-900">Number of Spawn</label>
                    <input
                        type="number"
                        name="numberOfSpawn"
                        value={formData.numberOfSpawn}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 bg-slate-100 rounded-md"
                    />
                </div>

                {/* Standard Text Inputs */}
                {[
                    { label: "PCR Result", name: "pcrResult" },
                    { label: "PH", name: "ph" },
                    { label: "Salinity", name: "salinity" },
                    { label: "Temperature °C", name: "temperature" },
                ].map(({ label, name }) => (
                    <div key={name} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                        <label className="text-gray-900">{label}</label>
                        <input
                            type="text"
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>
                ))}
            </div>

            {/* Remarks Section */}
            <div className="mt-6">
                <label className="text-lg w-full flex font-bold text-gray-700">Remarks</label>
                <textarea
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    className="w-full md:w-2/3 p-2 border border-gray-300 bg-slate-100 rounded-md h-24 mt-2"
                ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6 space-x-4">
                <button onClick={onCancel} className="px-4 py-2 w-full md:w-32 border border-sky-900 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                    Clear
                </button>
                <button onClick={handleSubmit} className="px-4 py-2 w-full md:w-32 bg-sky-900 text-white rounded-lg hover:bg-blue-900">
                    Save
                </button>
            </div>
        </>
    )
}

export default SpawningMonitoringForm