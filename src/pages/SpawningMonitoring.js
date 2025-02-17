import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import SpawningMonitoringForm from "../components/forms/SpawningMonitoringForm";
import { useNavigate } from "react-router-dom";

const SpawningMonitoring = () => {
    const navigate = useNavigate();

    // Function to handle form submission (for adding new Spawning)
    const handleSave = (formData) => {
        console.log("New Spawning Data:", formData);
        // Redirect to the Spawning Monitoring View
        navigate("/spawning-monitoring/view");
    };

    return (
        <AppLayout title="Spawning Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

                <div className="flex justify-end">
                    <button onClick={() => {
                        navigate("/spawning-monitoring/view");
                    }} className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Reusable Spawning Monitoring Component */}
                <SpawningMonitoringForm initialData={null} onSubmit={handleSave} onCancel={() => navigate("/spawning-monitoring/view")} />

            </div>
        </AppLayout>
    );
};

export default SpawningMonitoring;