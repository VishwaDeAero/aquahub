import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import SpawningMonitoringForm from "../components/forms/SpawningMonitoringForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SpawningMonitoring = () => {
    const navigate = useNavigate();

    // Function to handle form submission (for adding new Spawning)
  // Update handleSave function
const handleSave = async (formData) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.post("http://localhost:5001/api/spawnings", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/spawning-monitoring/view");
    } catch (error) {
      console.error("Error saving spawning data:", error);
      alert("Failed to save spawning data");
    }
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