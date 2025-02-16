import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import { useNavigate } from "react-router-dom";
import TankMonitoringForm from "../components/forms/TankMonitoringForm";

const TankMonitoring = () => {
    const navigate = useNavigate();

    // Function to handle form submission (for adding new Tank)
    const handleSave = (formData) => {
        console.log("New Tank Data:", formData);
        // Redirect to the Tank Monitoring View
        navigate("/tank-monitoring/view");
    };

    return (
        <AppLayout title="Tank Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

            <div className="flex justify-end">
                    <button onClick={() => {
                        navigate("/tank-monitoring/view");
                    }} className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Reusable Tank Monitoring Component */}
                <TankMonitoringForm initialData={null} onSubmit={handleSave} onCancel={() => navigate("/tank-monitoring/view")} />

            </div>
        </AppLayout >
    );
};

export default TankMonitoring;