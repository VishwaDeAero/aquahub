import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import { useNavigate } from "react-router-dom";
import ArtemiaMonitoringForm from "../components/forms/ArtemiaMonitoringForm";

const ArtemiaMonitoring = () => {
    const navigate = useNavigate();

    // Function to handle form submission (for adding new Artemia)
    const handleSave = (formData) => {
        console.log("New Artemia Data:", formData);
        // Redirect to the Artemia Monitoring View
        navigate("/artemia-monitoring/view");
    };

    return (
        <AppLayout title="Artemia Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

                <div className="flex justify-end">
                    <button onClick={() => {
                        navigate("/artemia-monitoring/view");
                    }} className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Reusable Artemia Monitoring Component */}
                <ArtemiaMonitoringForm initialData={null} onSubmit={handleSave} onCancel={() => navigate("/maturation-monitoring/view")} />
            </div>
        </AppLayout>
    );
};

export default ArtemiaMonitoring;