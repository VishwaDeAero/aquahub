import React, { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import StockIn from "../components/inventory/StockIn";
import ManageInventory from "../components/inventory/ManageInventory";
import StockOut from "../components/inventory/StockOut";

const InventoryManagement = () => {
    const [activeTab, setActiveTab] = useState("stock-in");
    // Tab items array
    const tabItems = [
        { title: "Stock In", component: "stock-in" },
        { title: "Manage", component: "manage" },
        { title: "Stock Out", component: "stock-out" },
    ];
    return (
        <AppLayout title="Inventory Management">
            {/* Tab Navigation */}
            <div className="grid grid-cols-3 gap-2">
                {tabItems.map((item, index) => (
                    <button
                        onClick={() => setActiveTab(item.component)}
                        className={`px-4 py-2 bg-darkblue text-lg uppercase font-medium ${activeTab === item.component
                            ? "text-white hover:text-sky-500"
                            : "text-gray-400 hover:text-gray-200"
                            }`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            <div className="py-4">
                {/* Tab Content */}
                    {activeTab === "stock-in" && <StockIn />}
                    {activeTab === "manage" && <ManageInventory />}
                    {activeTab === "stock-out" && <StockOut />}
            </div>
        </AppLayout>
    );
};

export default InventoryManagement;