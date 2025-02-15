import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import { useNavigate } from "react-router-dom";

const HatcheryManagement = () => {
  const navigate = useNavigate();
  // Dummy data for the grid items
  const sections = [
    { title: "Broodstock Management", icon: "/img/menu-icons/BroodstockManagementIcon.png", path: "/broodstock-management" },
    { title: "Quarantine Monitoring", icon: "/img/menu-icons/QuarantineMonitoringIcon.png", path: "/quarantine-monitoring" },
    { title: "Spawning Monitoring", icon: "/img/menu-icons/SpawningMonitoringIcon.png", path: "/spawning-monitoring" },
    { title: "Hatching Monitoring", icon: "/img/menu-icons/HatchingMonitoringIcon.png", path: "/hatching-monitoring" },
    { title: "Maturation Tank Monitoring", icon: "/img/menu-icons/MaturationTankMonitoringIcon.png", path: "/maturation-tank-monitoring" },
    { title: "Tank Monitoring", icon: "/img/menu-icons/TankMonitoringIcon.png", path: "/tank-monitoring" },
    { title: "Indoor Algae Monitoring", icon: "/img/menu-icons/IndoorAlgaeMonitoringIcon.png", path: "/indoor-algae-monitoring" },
    { title: "Outdoor Algae Monitoring", icon: "/img/menu-icons/OutdoorAlgaeMonitoringIcon.png", path: "/outdoor-algae-monitoring" },
    { title: "Artemia Monitoring", icon: "/img/menu-icons/ArtemiaMonitoringIcon.png", path: "/artemia-monitoring" },
    { title: "Harvesting Monitoring", icon: "/img/menu-icons/HarvestingMonitoringIcon.png", path: "/harvesting-monitoring" },
    { title: "Disease & Management", icon: "/img/menu-icons/DiseaseManagementIcon.png", path: "/disease-management" },
  ];

  return (
    <AppLayout title="Hatchery Management">
      <div className="p-6">
        <div className="bg-white shadow-md rounded-lg p-10">
          {/* Grid for sections */}
          <div className="grid grid-cols-4 gap-5">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => navigate(section.path)}
                className="flex flex-col items-center rounded-3xl py-12 p-8 hover:shadow-lg transition"
              >
                <img
                  src={section.icon}
                  alt={section.title}
                  className="w-12 h-12 mb-4"
                />
                <p className="text-center text-lg font-medium text-darkblue">
                  {section.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HatcheryManagement;