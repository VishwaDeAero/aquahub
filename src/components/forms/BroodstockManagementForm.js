import React, { useState } from 'react';

function BroodstockManagementForm({ initialData = {}, onSubmit, onCancel }) {
  const safeInitialData = initialData || {};

  const defaultValues = {
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
    waterQualityBroodstock: [
      { parameter: "Salinity", value: "" },
      { parameter: "Ca ++", value: "" },
      { parameter: "Mg ++", value: "" },
      { parameter: "PH", value: "" },
      { parameter: "Alkalinity", value: "" }
    ],
    waterQualityNauplia: [
      { parameter: "Salinity", value: "" },
      { parameter: "Ca ++", value: "" },
      { parameter: "Mg ++", value: "" },
      { parameter: "PH", value: "" },
      { parameter: "Alkalinity", value: "" }
    ]
  };

  const [formData, setFormData] = useState({
    ...defaultValues,
    ...safeInitialData,
    waterQualityBroodstock: safeInitialData.waterQualityBroodstock 
      ? [...safeInitialData.waterQualityBroodstock] 
      : defaultValues.waterQualityBroodstock,
    waterQualityNauplia: safeInitialData.waterQualityNauplia 
      ? [...safeInitialData.waterQualityNauplia] 
      : defaultValues.waterQualityNauplia
  });

  // Rest of the component remains the same as previous working version
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWaterQualityChange = (section, index, value) => {
    const updated = formData[section].map((item, i) =>
      i === index ? { ...item, value } : item
    );
    setFormData(prev => ({ ...prev, [section]: updated }));
  };

  const handleAddWaterQuality = (section) => {
    const newParam = { parameter: "New Parameter", value: "" };
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], newParam]
    }));
  };

  const handleSubmit = () => {
    const submissionData = {
      ...formData,
      waterQualityBroodstock: formData.waterQualityBroodstock.map(({ parameter, value }) => ({
        parameter,
        value
      })),
      waterQualityNauplia: formData.waterQualityNauplia.map(({ parameter, value }) => ({
        parameter,
        value
      }))
    };
    onSubmit(submissionData);
  };


  return (
    <>
      {/* Broodstock Details */}
      <h3 className="text-xl font-bold text-red-800 mb-4">Broodstock Details</h3>
      <div className="grid grid-cols-1 gap-6 mb-10">
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
              className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Water Quality for Broodstock */}
      <h3 className="text-lg font-bold text-blue-800 mb-4">Water Quality for Broodstock</h3>
      <div className="mb-10">
        <div className="grid grid-cols-1 gap-6">
          {formData.waterQualityBroodstock.map((param, index) => (
            <div key={index} className="flex items-center">
              <label className="pl-32 w-1/3 text-sky-700">{param.parameter}</label>
              <input
                type="text"
                value={param.value}
                onChange={(e) => handleWaterQualityChange("waterQualityBroodstock", index, e.target.value)}
                className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="w-2/3 flex justify-end mt-4">
          <button
            onClick={() => handleAddWaterQuality("waterQualityBroodstock")}
            className="py-2 px-4 text-sky-900 items-center rounded-lg border-2 border-sky-900"
          >
            Add More <i className="fa-solid fa-plus"></i>
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
              className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Water Quality for Nauplia */}
      <h3 className="text-lg font-bold text-blue-800 mb-4">Water Quality for Nauplia</h3>
      <div className="mb-10">
        <div className="grid grid-cols-1 gap-6">
          {formData.waterQualityNauplia.map((param, index) => (
            <div key={index} className="flex items-center">
              <label className="pl-32 w-1/3 text-sky-700">{param.parameter}</label>
              <input
                type="text"
                value={param.value}
                onChange={(e) => handleWaterQualityChange("waterQualityNauplia", index, e.target.value)}
                className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="w-2/3 flex justify-end mt-4">
          <button
            onClick={() => handleAddWaterQuality("waterQualityNauplia")}
            className="py-2 px-4 text-sky-900 items-center rounded-lg border-2 border-sky-900"
          >
            Add More <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>

      {/* Algae Culturing Method */}
      <h6 className="text-lg font-semibold text-sky-900 mb-4">Algae Culturing Method in Nursery Hatchery:</h6>
      <div className="mb-10">
        <div className="flex items-center">
          <label className="w-1/3 text-gray-900">Method</label>
          <select
            name="algaeCulturingMethod"
            value={formData.algaeCulturingMethod}
            onChange={handleChange}
            className="w-1/3 p-2 border border-gray-300 bg-slate-100 rounded-md"
          >
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
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

      {/* Save & Clear Buttons */}
      <div className="flex justify-end mt-6 space-x-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 w-32 border border-sky-900 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          Clear
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 w-32 bg-sky-900 text-white rounded-lg hover:bg-blue-900"
        >
          Save
        </button>
      </div>
    </>
  );
}

export default BroodstockManagementForm;