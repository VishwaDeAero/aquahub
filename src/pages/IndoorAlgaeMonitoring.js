import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import { useNavigate } from "react-router-dom";
import IndoorAlgaeMonitoringForm from "../components/forms/IndoorAlgaeMonitoringForm";

const IndoorAlgaeMonitoring = () => {
    const navigate = useNavigate();

    // Function to handle form submission (for adding new Indoor Algae)
    const handleSave = (formData) => {
        console.log("New Indoor Algae Data:", formData);
        // Redirect to the Indoor Algae Monitoring View
        navigate("/indoor-algae-monitoring/view");
    };

    return (
        <AppLayout title="Indoor Algae Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

                <div className="flex justify-end">
                    <button onClick={() => {
                        navigate("/indoor-algae-monitoring/view");
                    }} className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Reusable Indoor Algae Monitoring Component */}
                <IndoorAlgaeMonitoringForm initialData={null} onSubmit={handleSave} onCancel={() => navigate("/maturation-monitoring/view")} />

            </div>
        </AppLayout>
    );
};

export default IndoorAlgaeMonitoring;