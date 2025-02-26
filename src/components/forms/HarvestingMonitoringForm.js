import React, { useState } from 'react'

function HarvestingMonitoringForm({ initialData = {}, onSubmit, onCancel }) {
    const defaultValues = {
        broodstock: "",
        date: "",
        block: "",
        tankNumber: "",
        plAge: "",
        salinity: "",
        harvestAmount: "",
        saleAmount: "",
        plPrice: "",
        area: "",
        customerName: "",
        farmName: "",
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

                {/* Single Fields */}
                {[
                    { label: "Date", name: "date", type: "date" },
                    { label: "Block", name: "block" },
                    { label: "Tank Number", name: "tankNumber" },
                    { label: "PL Age", name: "plAge", type: "number" },
                    { label: "Salinity", name: "salinity", type: "number" },
                    { label: "Harvest Amount", name: "harvestAmount", type: "number" },
                    { label: "Sale Amount", name: "saleAmount", type: "number" },
                    { label: "PL Price", name: "plPrice", type: "number" },
                    { label: "Area", name: "area" },
                    { label: "Customer Name", name: "customerName" },
                    { label: "Farm Name", name: "farmName" },
                ].map(({ label, name, type = "text" }) => (
                    <div key={name} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                        <label className="text-gray-900">{label}</label>
                        <input
                            type={type}
                            name={name}
                            value={formData.name}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>
                ))}

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

export default HarvestingMonitoringForm