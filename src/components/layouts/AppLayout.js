import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

const AppLayout = ({ title, children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="h-screen flex overflow-hidden">
            {/* Sidebar (Fixed on Desktop, Toggles on Mobile) */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content Area */}
            <div
                className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarOpen ? "md:ml-72" : "ml-0"
                    }`}
            >
                {/* Topbar */}
                <Topbar title={title} toggleSidebar={toggleSidebar} />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4 bg-slate-100">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AppLayout;