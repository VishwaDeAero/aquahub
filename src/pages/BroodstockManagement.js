import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import BroodstockManagementForm from "../components/forms/BroodstockManagementForm";
import { useNavigate } from "react-router-dom";

const BroodstockManagement = () => {
    const navigate = useNavigate();

    // Function to handle form submission (for adding new Broodstock)
    const handleSave = (formData) => {
        console.log("New Broodstock Data:", formData);
        // Redirect to the Broodstock Management View
        navigate("/broodstock-management/view");
    };

    return (
        <AppLayout title="Broodstock Management">

            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

                <div className="flex justify-end">
                    <button onClick={() => {
                        navigate("/broodstock-management/view");
                    }} className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Reusable BroodstockForm Component */}
                <BroodstockManagementForm initialData={null} onSubmit={handleSave} onCancel={() => navigate("/broodstock-management/view")} />

            </div>
        </AppLayout >
    );
};

export default BroodstockManagement;