import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import { useNavigate } from "react-router-dom";
import DiseaseManagementForm from "../components/forms/DiseaseManagementForm";

const DiseaseManagement = () => {
    const navigate = useNavigate();

    // Function to handle form submission (for adding new Disease)
    const handleSave = (formData) => {
        console.log("New Disease Data:", formData);
        // Redirect to the Disease Management View
        navigate("/disease-management/view");
    };


    return (
        <AppLayout title="Disease & Management">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">

                <div className="flex justify-end">
                    <button onClick={() => {
                        navigate("/disease-management/view");
                    }} className="px-2 py-1 w-20 border border-sky-900 bg-slate-50 text-gray-700 rounded-full hover:bg-gray-300">View</button>
                </div>

                {/* Reusable Disease Management Component */}
                <DiseaseManagementForm initialData={null} onSubmit={handleSave} onCancel={() => navigate("/disease-management/view")} />

            </div>

        </AppLayout>
    );
};

export default DiseaseManagement;