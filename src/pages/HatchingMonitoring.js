import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import { useNavigate } from "react-router-dom";
import HatchingMonitoringForm from "../components/forms/HatchingMonitoringForm";

const HatchingMonitoring = () => {
    const navigate = useNavigate();

    // Function to handle form submission (for adding new Hatching)
    const handleSave = (formData) => {
        console.log("New Hatching Data:", formData);
        // Redirect to the Hatching Monitoring View
        navigate("/hatching-monitoring/view");
    };

    return (
        <AppLayout title="Hatching Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

                <div className="flex justify-end">
                    <button onClick={() => {
                        navigate("/hatching-monitoring/view");
                    }} className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Reusable Hatching Monitoring Component */}
                <HatchingMonitoringForm initialData={null} onSubmit={handleSave} onCancel={() => navigate("/hatching-monitoring/view")} />

            </div>
        </AppLayout>
    );
};

export default HatchingMonitoring;