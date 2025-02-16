import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import MaturationTankMonitoringForm from "../components/forms/MaturationTankMonitoringForm";
import { useNavigate } from "react-router-dom";

const MaturationTankMonitoring = () => {
    const navigate = useNavigate();

    // Function to handle form submission (for adding new Maturation Tank)
    const handleSave = (formData) => {
        console.log("New Maturation Tank Data:", formData);
        // Redirect to the Maturation Tank Monitoring View
        navigate("/maturation-tank-monitoring/view");
    };

    return (
        <AppLayout title="Maturation Tank Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

            <div className="flex justify-end">
                    <button onClick={() => {
                        navigate("/maturation-tank-monitoring/view");
                    }} className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Reusable MaturationTank Monitoring Component */}
                <MaturationTankMonitoringForm initialData={null} onSubmit={handleSave} onCancel={() => navigate("/maturation-monitoring/view")} />
                
            </div>
        </AppLayout>
    );
};

export default MaturationTankMonitoring;