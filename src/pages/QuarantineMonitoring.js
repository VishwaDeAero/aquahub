import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import QuarantineMonitoringForm from "../components/forms/QuarantineMonitoringForm";
import { useNavigate } from "react-router-dom";

const QuarantineMonitoring = () => {
    const navigate = useNavigate();

    // Function to handle form submission (for adding new Quarantine)
    const handleSave = (formData) => {
        console.log("New Quarantine Data:", formData);
        // Redirect to the Quarantine Monitoring View
        navigate("/quarantine-monitoring/view");
    };

    return (
        <AppLayout title="Quarantine Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

                <div className="flex justify-end">
                    <button onClick={() => {
                        navigate("/quarantine-monitoring/view");
                    }} className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Reusable QuarantineForm Component */}
                <QuarantineMonitoringForm initialData={null} onSubmit={handleSave} onCancel={() => navigate("/quarantine-monitoring/view")} />

            </div>
        </AppLayout>
    );
};

export default QuarantineMonitoring;