import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";

const TankMonitoring = () => {
    const [formData, setFormData] = useState({
        broodstock: "",
        broodStockArea: "",
        numberOfBroodStock: "",
        hatchingTankNumber: "",
        hatchingRate: "",
        naupliiCollectingDate: "",
        block: "",
        tankNumber: "",
        stockAmount: "",
        date: "",
        stage: "",
        feed: "",
        algae: "",
        artemia: "",
        waterLevel: "",
        waterChangePercentage: "",
        edta: "",
        tri: "",
        otc: "",
        ery: "",
        probrictic: "",
        diseaseObservation: "",
        ph: "",
        salinity: "",
        temperature: "",
        vibrioLargeY: "",
        vibrioSmallY: "",
        vibrioGreen: "",
        vibrioLuminus: "",
        remarks: "",
        harvestDate: "",
        harvestAmount: "",
        harvestPLAge: "",
        customerName: "",
        area: "",
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
        <AppLayout title="Tank Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

                <div className="flex justify-end">
                    <button className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Form */}

                {/* Broodstock Dropdown */}
                <div className="flex items-center mb-8">
                    <label className="text-gray-900 me-5">Broodstock</label>
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

                <div className="grid grid-cols-2 gap-6 mb-10">
                    {/* Two Fields Per Row */}
                    {[
                        ["Brood Stock Area", "broodStockArea"], ["Number of Brood Stock", "numberOfBroodStock"],
                        ["Hatching Tank Number", "hatchingTankNumber"], ["Hatching Rate", "hatchingRate"],
                        ["Nauplii Collecting / Stocking Date", "naupliiCollectingDate"], ["Block", "block"],
                        ["Tank Number", "tankNumber"], ["Stock Amount", "stockAmount"],
                    ].map(([label, name]) => (
                        <div>
                            <label className="flex text-gray-900 mb-4">{label}</label>
                            <input
                                type={name.includes("Date") ? "date" : "text"}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    ))}
                </div>

                {/* Single Fields */}
                <div className="grid grid-cols-1 gap-6 mb-10">
                    {[
                        ["Date", "date"],
                        ["Stage", "stage"],
                        ["Feed", "feed"],
                        ["Algae", "algae"],
                        ["Artemia", "artemia"],
                        ["Water Level", "waterLevel"],
                        ["Water Change Percentage", "waterChangePercentage"]
                    ].map(([label, name]) => (
                        <div className="flex items-center">
                            <label className="w-1/3 text-gray-900">{label}</label>
                            <input
                                type={name.includes("date") ? "date" : "text"}
                                name={name}
                                value={formData.name}
                                onChange={handleChange}
                                className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-6 mb-10">
                    {/* Three Fields Per Row */}
                    {[
                        ["EDTA", "EDTA"],
                        ["Tri", "tri"],
                        ["OTC", "OTC"],
                        ["Ery", "ery"],
                        ["Probirtic", "probirtic"]
                    ].map(([label, name]) => (
                        <div>
                            <label className="flex text-gray-900 mb-4">{label}</label>
                            <input
                                type="text"
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6 mb-10">
                    {[
                        ["Disease Observation", "diseaseObservation"],
                        ["PH", "phNo"],
                        ["Salinity", "salinity"],
                        ["Temperature (c)", "temperature"]
                    ].map(([label, name]) => (
                        <div className="flex items-center">
                            <label className="w-1/3 text-gray-900">{label}</label>
                            <input
                                type="text"
                                name={name}
                                value={formData.name}
                                onChange={handleChange}
                                className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    ))}
                </div>

                {/* Vibrio Count */}
                <div className="flex items-center mb-4">
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
                <div className="mb-10">
                    <label className="text-lg w-full flex text-gray-700">Remarks</label>
                    <textarea
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleChange}
                        className="w-2/3 p-2 border border-gray-300 bg-slate-100 rounded-md h-24 mt-2"
                    ></textarea>
                </div>

                {/* Harvest Information */}
                <div className="grid grid-cols-1 gap-6 mb-10">
                    {[
                        ["Harvest Date", "harvestDate"],
                        ["Harvest Amount", "harvestAmount"],
                        ["Harvest PL age", "harvestPLAge"],
                        ["Customer Name", "customerName"],
                        ["Area", "area"]
                    ].map(([label, name]) => (
                        <div className="flex items-center">
                            <label className="w-1/3 text-gray-900">{label}</label>
                            <input
                                type={name.includes("date") ? "date" : "text"}
                                name={name}
                                value={formData.name}
                                onChange={handleChange}
                                className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    ))}
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
        </AppLayout >
    );
};

export default TankMonitoring;