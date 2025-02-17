import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import { useNavigate } from "react-router-dom";
import OutdoorAlgaeMonitoringForm from "../components/forms/OutdoorAlgaeMonitoringForm";

const OutdoorAlgaeMonitoring = () => {
    const navigate = useNavigate();

    // Function to handle form submission (for adding new Outdoor Algae)
    const handleSave = (formData) => {
        console.log("New Outdoor Algae Data:", formData);
        // Redirect to the Outdoor Algae Monitoring View
        navigate("/outdoor-algae-monitoring/view");
    };

    return (
        <AppLayout title="Outdoor Algae Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

                <div className="flex justify-end">
                    <button onClick={() => {
                        navigate("/outdoor-algae-monitoring/view");
                    }} className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Reusable Outdoor Algae Monitoring Component */}
                <OutdoorAlgaeMonitoringForm initialData={null} onSubmit={handleSave} onCancel={() => navigate("/maturation-monitoring/view")} />
                
            </div>
        </AppLayout>
    );
};

export default OutdoorAlgaeMonitoring;