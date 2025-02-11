import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";

const BroodstockManagement = () => {
    const [formData, setFormData] = useState({
        countryImported: "",
        companyImported: "",
        dateOfImportation: "",
        line: "",
        pcrTestReportNo: "",
        dateOfEyeAbalation: "",
        batchReferenceNo: "",
        tankNo: "",
        totalNauplia: "",
        discountPercentage: "",
        issuedNaupliaAmount: "",
        totalCashAmount: "",
        issuedHatcheryName: "",
        stockTankNo: "",
        algaeCulturingMethod: "Indoor",
        remarks: "",
        waterQualityBroodstock: ["Salinity", "Ca ++", "Mg ++", "PH", "Alkalinity"],
        waterQualityNauplia: ["Salinity", "Ca ++", "Mg ++", "PH", "Alkalinity"],
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle adding new water quality parameters
    const handleAddWaterQuality = (section) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: [...prevData[section], ""],
        }));
    };

    return (
        <AppLayout title="Broodstock Management">

            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6">

                {/* Broodstock Details */}
                <h3 className="text-xl font-bold text-red-800 mb-4">Broodstock Details</h3>

                <div className="grid grid-cols-1 gap-6 mb-10">
                    {/* Broodstock Inputs */}
                    {[
                        { label: "Country Imported", name: "countryImported", type: "text" },
                        { label: "Company Imported", name: "companyImported", type: "text" },
                        { label: "Date of Importation", name: "dateOfImportation", type: "date" },
                        { label: "Line", name: "line", type: "text" },
                        { label: "Animal PCR Test Report No", name: "pcrTestReportNo", type: "text" },
                        { label: "Date of Eye Abalation", name: "dateOfEyeAbalation", type: "date" },
                        { label: "Batch Reference No", name: "batchReferenceNo", type: "text" },
                        { label: "Tank No", name: "tankNo", type: "text" },
                    ].map(({ label, name, type }) => (
                        <div key={name} className="flex items-center">
                            <label className="w-1/3 text-gray-900">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className="w-1/3 p-2 border rounded-md"
                            />
                        </div>
                    ))}
                </div>

                {/* Water Quality for Broodstock */}
                <h3 className="text-lg font-bold text-blue-800 mb-4">Water Quality</h3>
                <div className="mb-10">
                    <div className="grid grid-cols-1 gap-6">
                        {formData.waterQualityBroodstock.map((label, index) => (
                            <div key={index} className="flex items-center">
                                <label className="w-1/3 text-sky-700">{label}</label>
                                <input type="text" className="w-1/3 p-2 border rounded-md" />
                            </div>
                        ))}
                    </div>
                    <div className="w-2/3 flex justify-end mt-4">
                        <button onClick={() => handleAddWaterQuality("waterQualityBroodstock")} className="py-2 px-4 text-sky-900 items-center rounded-lg border-2 border-sky-900">
                            Add More <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>

                {/* Nauplia Details */}
                <h3 className="text-xl font-bold text-red-800 mb-4">Nauplia Details</h3>
                <div className="grid grid-cols-1 gap-6 mb-10">
                    {[
                        { label: "Total Number of Nauplia", name: "totalNauplia", type: "text" },
                        { label: "Discount Percentage", name: "discountPercentage", type: "text" },
                        { label: "Issued Nauplia Amount", name: "issuedNaupliaAmount", type: "text" },
                        { label: "Total Cash Amount", name: "totalCashAmount", type: "text" },
                        { label: "Issued Hatchery Name", name: "issuedHatcheryName", type: "text" },
                        { label: "Stock Tank No", name: "stockTankNo", type: "text" },
                    ].map(({ label, name, type }) => (
                        <div key={name} className="flex items-center">
                            <label className="w-1/3 text-gray-900">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className="w-1/3 p-2 border rounded-md"
                            />
                        </div>
                    ))}
                </div>

                <h3 className="text-lg font-bold text-blue-800 mb-4">Water Quality</h3>
                {/* Water Quality for Nauplia */}
                <div className="mb-10">
                    <div className="grid grid-cols-1 gap-6">
                        {formData.waterQualityNauplia.map((label, index) => (
                            <div key={index} className="flex items-center">
                                <label className="w-1/3 text-sky-700">{label}</label>
                                <input type="text" className="w-1/3 p-2 border rounded-md" />
                            </div>
                        ))}
                    </div>
                    <div className="w-2/3 flex justify-end mt-4">
                        <button onClick={() => handleAddWaterQuality("waterQualityNauplia")} className="py-2 px-4 text-sky-900 items-center rounded-lg border-2 border-sky-900">
                            Add More <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>

                {/* Remarks Section */}
                <div className="mt-6">
                    <label className="text-lg w-full flex font-bold text-gray-700">Remarks</label>
                    <textarea
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleChange}
                        className="w-2/3 p-2 border rounded-md h-24 mt-2"
                    ></textarea>
                </div>

                {/* Save & Clear Buttons */}
                <div className="flex justify-end mt-6 space-x-4">
                    <button
                        onClick={() => setFormData({})} className="px-4 py-2 w-32 border border-sky-900 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
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

export default BroodstockManagement;