import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const icons = [
    { id: 1, name: "Broodstock Management", src: "/img/menu-icons/BroodstockManagementIcon.png", path: "/broodstock-management" },
    { id: 2, name: "Quarantine Monitoring", src: "/img/menu-icons/QuarantineMonitoringIcon.png", path: "/quarantine-monitoring" },
    { id: 3, name: "Spawning Monitoring", src: "/img/menu-icons/SpawningMonitoringIcon.png", path: "/spawning-monitoring" },
    { id: 4, name: "Hatching Monitoring", src: "/img/menu-icons/HatchingMonitoringIcon.png", path: "/hatching-monitoring" },
    { id: 5, name: "Maturation Tank Monitoring", src: "/img/menu-icons/MaturationTankMonitoringIcon.png", path: "/maturation-tank-monitoring" },
    { id: 6, name: "Tank Monitoring", src: "/img/menu-icons/TankMonitoringIcon.png", path: "/tank-monitoring" },
    { id: 7, name: "Indoor Algae Monitoring", src: "/img/menu-icons/IndoorAlgaeMonitoringIcon.png", path: "/indoor-algae-monitoring" },
    { id: 8, name: "Outdoor Algae Monitoring", src: "/img/menu-icons/OutdoorAlgaeMonitoringIcon.png", path: "/outdoor-algae-monitoring" },
    { id: 9, name: "Artemia Monitoring", src: "/img/menu-icons/ArtemiaMonitoringIcon.png", path: "/artemia-monitoring" },
    { id: 10, name: "Harvesting Monitoring", src: "/img/menu-icons/HarvestingMonitoringIcon.png", path: "/harvesting-monitoring" },
    { id: 11, name: "Disease & Management", src: "/img/menu-icons/DiseaseManagementIcon.png", path: "/disease-management" },
];

const IconNavigation = ({ onSelect }) => {
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState(1); // Default: Broodstock

    const handleSelect = (item) => {
        setSelectedId(item.id);
        onSelect(item.id);
        navigate(item.path);
    };

    return (
        <div className="w-full overflow-x-auto whitespace-nowrap py-2">
            <div className="flex space-x-2 md:space-x-4">
                {icons.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className={({ isActive }) =>
                            `p-2 md:p-3 rounded-md flex-shrink-0 md:[flex-shrink:1] transition-opacity ${isActive ? "opacity-100 bg-gray-200" : "opacity-50 hover:opacity-80"
                            }`
                        }
                    >
                        <img src={item.src} alt={item.name} className="h-auto w-12 md:w-full" />
                    </NavLink>

                ))}
            </div>
        </div>
    );
};

export default IconNavigation;