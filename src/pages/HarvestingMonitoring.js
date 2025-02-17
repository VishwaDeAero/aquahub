import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import HarvestingMonitoringForm from "../components/forms/HarvestingMonitoringForm";
import { useNavigate } from "react-router-dom";

const HarvestingMonitoring = () => {
    const navigate = useNavigate();

    // Function to handle form submission (for adding new Harvesting)
    const handleSave = (formData) => {
        console.log("New Harvesting Data:", formData);
        // Redirect to the Harvesting Monitoring View
        navigate("/harvesting-monitoring/view");
    };

    return (
        <AppLayout title="Harvesting Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

                <div className="flex justify-end">
                    <button onClick={() => {
                        navigate("/harvesting-monitoring/view");
                    }} className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Reusable Harvesting Monitoring Component */}
                <HarvestingMonitoringForm initialData={null} onSubmit={handleSave} onCancel={() => navigate("/harvesting-monitoring/view")} />

            </div>
        </AppLayout>
    );
};

export default HarvestingMonitoring;