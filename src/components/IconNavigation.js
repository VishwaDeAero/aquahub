import React, { useState } from "react";

const icons = [
    { id: 1, name: "Broodstock Management", src: "/img/menu-icons/BroodstockManagementIcon.png" },
    { id: 2, name: "Quarantine Monitoring", src: "/img/menu-icons/QuarantineMonitoringIcon.png" },
    { id: 3, name: "Spawning Monitoring", src: "/img/menu-icons/SpawningMonitoringIcon.png" },
    { id: 4, name: "Hatching Monitoring", src: "/img/menu-icons/HatchingMonitoringIcon.png" },
    { id: 5, name: "Maturation Tank Monitoring", src: "/img/menu-icons/MaturationTankMonitoringIcon.png" },
    { id: 6, name: "Tank Monitoring", src: "/img/menu-icons/TankMonitoringIcon.png" },
    { id: 7, name: "Indoor Algae Monitoring", src: "/img/menu-icons/IndoorAlgaeMonitoringIcon.png" },
    { id: 8, name: "Outdoor Algae Monitoring", src: "/img/menu-icons/OutdoorAlgaeMonitoringIcon.png" },
    { id: 9, name: "Artemia Monitoring", src: "/img/menu-icons/ArtemiaMonitoringIcon.png" },
    { id: 10, name: "Harvesting Monitoring", src: "/img/menu-icons/HarvestingMonitoringIcon.png" },
    { id: 11, name: "Disease & Management", src: "/img/menu-icons/DiseaseManagementIcon.png" },
];

const IconNavigation = ({ onSelect }) => {
    const [selectedId, setSelectedId] = useState(1); // Default: Broodstock

    const handleSelect = (id) => {
        setSelectedId(id);
        onSelect(id);
    };

    return (
        <div className="w-full overflow-x-auto whitespace-nowrap py-2">
            <div className="flex space-x-4">
                {icons.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleSelect(item.id)}
                        className={`p-3 rounded-md transition-opacity ${selectedId === item.id ? "opacity-100 bg-gray-200" : "opacity-50 hover:opacity-80"
                            }`}
                    >
                        <img src={item.src} alt={item.name} className="h-auto w-full" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default IconNavigation;