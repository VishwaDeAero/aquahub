import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";

const QuarantineMonitoring = () => {
    const [formData, setFormData] = useState({
        broodstock: "",
        date: "",
        area: "",
        sampleNumber: "",
        maleCount: "",
        femaleCount: "",
        feedSquid: "",
        feedLiver: "",
        mortalityMale: "",
        mortalityFemale: "",
        moultMale: "",
        moultFemale: "",
        waterChangeMorning: "",
        waterChangeEvening: "",
        pcrSample: "",
        pcrResult: "",
        ph: "",
        salinity: "",
        temperature: "",
        remarks: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <AppLayout title="Quarantine Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

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

                    {/* Area & Sample Number */}
                    {[
                        { label: "Area", name: "area" },
                        { label: "Sample Number", name: "sampleNumber" },
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

                    {/* Number of Male & Female */}
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900">Number of</label>
                        <div className="w-1/3 flex items-center">
                            <label className="w-2/6 text-gray-900 text-center">Male</label>
                            <input
                                type="number"
                                name="maleCount"
                                value={formData.maleCount}
                                onChange={handleChange}
                                className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                            <label className="w-2/6 text-gray-900 text-center">Female</label>
                            <input
                                type="number"
                                name="femaleCount"
                                value={formData.femaleCount}
                                onChange={handleChange}
                                className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Feed Section */}
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900">Feed</label>
                        <div className="w-1/3 flex items-center">
                            <label className="w-2/6 text-gray-900 text-center">Squid</label>
                            <input
                                type="number"
                                name="feedSquid"
                                value={formData.feedSquid}
                                onChange={handleChange}
                                className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                            <label className="w-2/6 text-gray-900 text-center">Liver</label>
                            <input
                                type="number"
                                name="feedLiver"
                                value={formData.feedLiver}
                                onChange={handleChange}
                                className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Water Change Time */}
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900">Water Change Time</label>
                        <div className="w-1/3 flex items-center">
                            <label className="w-1/4 text-gray-900 text-center">Morning</label>
                            <input
                                type="time"
                                name="waterChangeMorning"
                                value={formData.waterChangeMorning}
                                onChange={handleChange}
                                className="w-1/4 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                            <label className="w-1/4 text-gray-900 text-center">Evening</label>
                            <input
                                type="time"
                                name="waterChangeEvening"
                                value={formData.waterChangeEvening}
                                onChange={handleChange}
                                className="w-1/4 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    </div>

                    {/* PCR, PH, Sailinity & Temperature */}
                    {[
                        { label: "PCR sample ", name: "pcrSample" },
                        { label: "PCR Result ", name: "pcrResult" },
                        { label: "PH", name: "phNumber" },
                        { label: "Salinity", name: "salinity" },
                        { label: "Temperature (C)", name: "temperature" },
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
                    <button className="px-4 py-2 w-32 border border-sky-900 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                        Clear
                    </button>
                    <button className="px-4 py-2 w-32 bg-sky-900 text-white rounded-lg hover:bg-blue-900">
                        Save
                    </button>
                </div>
            </div>
        </AppLayout>
    );
};

export default QuarantineMonitoring;