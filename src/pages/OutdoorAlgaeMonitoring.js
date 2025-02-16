import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";

const OutdoorAlgaeMonitoring = () => {
    const [formData, setFormData] = useState({
        date: "",
        tankNumber: "",
        inoculationBagNumber: "",
        cementTankInoculation: "",
        cultureAmount: "",
        supplyAmount: "",
        cellCount: "",
        ciliate: "",
        ph: "",
        salinity: "",
        temperature: "",
        vibrioLargeY: "",
        vibrioSmallY: "",
        vibrioGreen: "",
        vibrioLuminus: "",
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
        <AppLayout title="Outdoor Algae Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

                <div className="flex justify-end">
                    <button className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Form */}
                <div className="grid grid-cols-1 gap-6 mb-10">
                    {/* Single Fields */}
                    {[
                        { label: "Date", name: "date", type: "date" },
                        { label: "Tank Number", name: "tankNumber" },
                        { label: "Inoculation Bag Number (250L Tank)", name: "inoculationBagNumber" },
                        { label: "Cement Tank Inoculation", name: "cementTankInoculation" },
                        { label: "Culture Amount in Ton", name: "cultureAmount", type: "number" },
                        { label: "Supply Amount in Ton", name: "supplyAmount", type: "number" },
                        { label: "Cell Count", name: "cellCount", type: "number" },
                        { label: "Ciliate", name: "ciliate", type: "number" },
                        { label: "PH", name: "ph", type: "number" },
                        { label: "Salinity", name: "salinity", type: "number" },
                        { label: "Temperature °C", name: "temperature", type: "number" },
                    ].map(({ label, name, type = "text" }) => (
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

export default OutdoorAlgaeMonitoring;