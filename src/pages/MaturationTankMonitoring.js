import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";

const MaturationTankMonitoring = () => {
    const [formData, setFormData] = useState({
        broodstock: "",
        stockDate: "",
        numberOfBroodstock: "",
        maleCount: "",
        femaleCount: "",
        area: "",
        feedTime: "",
        date: "",
        numberOfMale: "",
        numberOfFemale: "",
        feedSquid: "",
        feedLiver: "",
        feedWorm: "",
        feedClamb: "",
        numberOfSpawnerCollect: "",
        numberOfSpawn: "",
        numberOfMoltMale: "",
        numberOfMoltFemale: "",
        numberOfMortalityMale: "",
        numberOfMortalityFemale: "",
        waterChangeMorning: "",
        waterChangeEvening: "",
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
        <AppLayout title="Maturation Tank Monitoring">
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

                    {/* Number of Broodstock */}
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900">Number of Broodstock</label>
                        <input
                            type="number"
                            name="numberOfBroodstock"
                            value={formData.numberOfBroodstock}
                            onChange={handleChange}
                            className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>

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

                    {/* Stock Date */}
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900">Stock Date</label>
                        <input
                            type="date"
                            name="stockDate"
                            value={formData.stockDate}
                            onChange={handleChange}
                            className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>

                    {/* Area */}
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900">Area</label>
                        <input
                            type="text"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>

                    {/* Feed Time */}
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900">Feed Time</label>
                        <input
                            type="time"
                            name="feedTime"
                            value={formData.feedTime}
                            onChange={handleChange}
                            className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
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
                            <label className="w-2/6 text-gray-900 text-center">Squid(g)</label>
                            <input
                                type="number"
                                name="squid"
                                value={formData.squid}
                                onChange={handleChange}
                                className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                            <label className="w-2/6 text-gray-900 text-center">Liver(g)</label>
                            <input
                                type="number"
                                name="liver"
                                value={formData.liver}
                                onChange={handleChange}
                                className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900"></label>
                        <div className="w-1/3 flex items-center">
                            <label className="w-2/6 text-gray-900 text-center">Worm(g)</label>
                            <input
                                type="number"
                                name="worm"
                                value={formData.worm}
                                onChange={handleChange}
                                className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                            <label className="w-2/6 text-gray-900 text-center">Clamb(g)</label>
                            <input
                                type="number"
                                name="clamb"
                                value={formData.clamb}
                                onChange={handleChange}
                                className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Number Of Spawner collect */}
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900">Number Of Spawner Collect</label>
                        <input
                            type="number"
                            name="numberOfSpawnerCollect"
                            value={formData.numberOfSpawnerCollect}
                            onChange={handleChange}
                            className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
                    </div>

                    {/* Number Of Spawn */}
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900">Number Of Spawn</label>
                        <input
                            type="number"
                            name="numberOfSpawn"
                            value={formData.numberOfSpawn}
                            onChange={handleChange}
                            className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
                        />
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

                    {/* Number Of Molt */}
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900">Number Of Molt</label>
                        <div className="w-1/3 flex items-center">
                            <label className="w-2/6 text-gray-900 text-center">Male</label>
                            <input
                                type="number"
                                name="moltMaleCount"
                                value={formData.moltMaleCount}
                                onChange={handleChange}
                                className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                            <label className="w-2/6 text-gray-900 text-center">Female</label>
                            <input
                                type="number"
                                name="moltFemaleCount"
                                value={formData.moltFemaleCount}
                                onChange={handleChange}
                                className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Number Of Mortality */}
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-900">Number Of Mortality</label>
                        <div className="w-1/3 flex items-center">
                            <label className="w-2/6 text-gray-900 text-center">Male</label>
                            <input
                                type="number"
                                name="mortalityMaleCount"
                                value={formData.mortalityMaleCount}
                                onChange={handleChange}
                                className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                            <label className="w-2/6 text-gray-900 text-center">Female</label>
                            <input
                                type="number"
                                name="mortalityFemaleCount"
                                value={formData.mortalityFemaleCount}
                                onChange={handleChange}
                                className="w-1/6 p-2 border border-gray-300 bg-slate-100 rounded-md"
                            />
                        </div>
                    </div>

                    {/* PH, Sailinity & Temperature */}
                    {[
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

                    {/* Vibrio Count */}
                    <div className="flex items-center">
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

export default MaturationTankMonitoring;