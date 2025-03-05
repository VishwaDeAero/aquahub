import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import QuarantineMonitoringForm from "../components/forms/QuarantineMonitoringForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QuarantineMonitoring = () => {
  const navigate = useNavigate();

  // Function to handle form submission (for adding new Quarantine)
  // Enhanced save handler
  const handleSave = async (formData) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.post("http://localhost:5001/api/quarantines", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/quarantine-monitoring/view");
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save quarantine data");
    }
  };

  return (
    <AppLayout title="Quarantine Monitoring">
      {/* Scrollable Icon Navigation */}
      <IconNavigation onSelect={() => {}} />

      <div className="p-6 border rounded-md bg-white shadow-sm">
        <div className="flex justify-end">
          <button
            onClick={() => {
              navigate("/quarantine-monitoring/view");
            }}
            className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300"
          >
            View
          </button>
        </div>

        {/* Reusable QuarantineForm Component */}
        <QuarantineMonitoringForm
          initialData={null}
          onSubmit={handleSave}
          onCancel={() => navigate("/quarantine-monitoring/view")}
        />
      </div>
    </AppLayout>
  );
};

export default QuarantineMonitoring;
